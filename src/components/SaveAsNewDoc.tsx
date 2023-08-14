"use client";

import React from "react";

import { ClientButtonType } from "@minimaldocs/types";

import { cn } from "@minimaldocs/lib";
import { useToast } from "./ui/use-toast";
import { SaveIcon } from "lucide-react";
import axios, { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { CreateDocPayload } from "@/lib/validators/doc";
import Spinner from "./Spinner";
import { useRouter } from "next/navigation";

const SaveAsNewDoc: React.FC<ClientButtonType> = ({
    className,
    iconClass,
    title,
    ...props
}) => {
    const { toast } = useToast();
    const router = useRouter()

    const { mutate: createDoc, isLoading } = useMutation({
        mutationFn: async () => {
            const titlefield: HTMLTextAreaElement = document.getElementById(
                "titlefield"
            ) as HTMLTextAreaElement;
            const textfield: HTMLTextAreaElement = document.getElementById(
                "textfield"
            ) as HTMLTextAreaElement;
            const title: string = titlefield.value;
            const text: string = textfield.value;

            const payload: CreateDocPayload = {
                title: title,
                content: text,
            };

            const { data } = await axios.post("/api/doc/create", payload);
            return data;
        },
        onError: (err) => {
            if (err instanceof AxiosError) {
                if (err.response?.status === 422) {
                    const target = JSON.parse(err.response.data)[0].path;
                    const res = JSON.parse(err.response.data)[0].message;

                    return toast({
                        title: "An Error Occurred!",
                        description: `${target}: ${res}`,
                        variant: "destructive",
                        duration: 2000,
                    });
                }

                if (err.response?.status === 401) {
                    return toast({
                        title: "An Error Occurred!",
                        description: "Unauthorized! Please Sign In.",
                        variant: "destructive",
                        duration: 2000,
                    });
                }
            }

            toast({
                title: "An Error Occurred!",
                description: "Could not create doc.",
                variant: "destructive",
                duration: 2000,
            });
        },
        onSuccess: (data) => {
            router.push(`/edit/${data}`)
        }
    });

    return (
        <button
            className={className}
            onClick={() => {
                createDoc();
            }}
        >
            {isLoading ? (
                <Spinner width="w-full" height="h-6" />
            ) : (
                <SaveIcon className={cn("w-full", iconClass)} />
            )}
            {title && <span className="text-[20px]">{title}</span>}
        </button>
    );
};

export default SaveAsNewDoc;
