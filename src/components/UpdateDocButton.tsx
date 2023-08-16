"use client";

import React from "react";


import { ClientButtonType } from "@minimaldocs/types";

import { useSaved } from "@minimaldocs/context";

import { cn } from "@minimaldocs/lib";
import { useToast } from "./ui/use-toast";
import { SaveIcon } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import Spinner from "./Spinner";
import { UpdateDocPayload } from "@/lib/validators/doc";

export const UpdateDocButton: React.FC<ClientButtonType> = ({
    className,
    iconClass,
    title,
    id,
    ...props
}) => {
    const { saved, setSaved } = useSaved();

    const { toast } = useToast();

    const { mutate: updateDoc, isLoading } = useMutation({
        mutationFn: async () => {
            if (!id) {
                return;
            }

            const titlefield: HTMLTextAreaElement = document.getElementById(
                "titlefield"
            ) as HTMLTextAreaElement;
            const textfield: HTMLTextAreaElement = document.getElementById(
                "textfield"
            ) as HTMLTextAreaElement;
            const title: string = titlefield.value;
            const text: string = textfield.value;

            const payload: UpdateDocPayload = {
                id: id,
                title: title,
                content: text,
            };

            const data = await axios.put("/api/doc/edit", payload);
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
                description: "Could not save doc.",
                variant: "destructive",
                duration: 2000,
            });
        },
        onSuccess: (data) => {
            toast({
                title: "Saved Data!",
                description: "Successfully updated doc.",
                variant: "default",
                duration: 2000,
                className: "bg-green-500 border-text",
            });
            setSaved({ state: "saved" });
        },
    });

    return (
        <button
            className={className}
            onClick={() => {
                updateDoc()
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
