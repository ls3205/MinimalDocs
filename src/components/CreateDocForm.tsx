"use client";

import React, { useState } from "react";
import { Input } from "./ui/Input";
import { PlusIcon } from "lucide-react";
import Spinner from "./Spinner";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { CreateDocPayload } from "@/lib/validators/doc";
import { useRouter } from "next/navigation";
import { useToast } from "./ui/use-toast";

interface CreateDocFormProps {}

const CreateDocForm: React.FC<CreateDocFormProps> = ({}) => {
    const [isSubmitLoading, setIsSubmitLoading] = useState<boolean>(false);
    const [input, setInput] = useState<string>('')

    const { toast } = useToast();
    const router = useRouter();

    const { mutate: createDoc, isLoading } = useMutation({
        mutationFn: async () => {
            setIsSubmitLoading(true)

            const payload: CreateDocPayload = {
                title: input ? input : 'Untitled Document',
                content: "",
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

            setIsSubmitLoading(false)

            toast({
                title: "An Error Occurred!",
                description: "Could not create doc.",
                variant: "destructive",
                duration: 2000,
            });
        },
        onSuccess: (data) => {
            setIsSubmitLoading(false)
            router.push(`/docs/edit/${data}`);
        },
    });

    return (
        <div className="flex flex-row justify-center align-middle absolute w-1/3 h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-menu border-text border-[1px] rounded-lg sm:w-[90%]">
            <Input
                type="text"
                placeholder="Untitled Doc"
                className="bg-bg text-subtext m-2"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                onClick={() => createDoc()}
                className="h-min flex flex-row m-2 bg-subtext rounded-lg text-bg hover:bg-text hover:text-subtext active:bg-highlight active:text-highlight transition-all duration-300 active:transition-none"
            >
                {isSubmitLoading ? (
                    <Spinner width="w-full" height="h-full" className="m-2" />
                ) : (
                    <PlusIcon className="m-2" />
                )}
                <p className="my-2 mr-2">Create</p>
            </button>
        </div>
    );
};

export default CreateDocForm;
