"use client";

import React from "react";

import { downloadFile } from "@scripts";

import { ClientButtonType } from "@minimaldocs/types";

import { cn } from "@minimaldocs/lib";
import { useToast } from "./ui/use-toast";
import { DownloadIcon } from "lucide-react";

export const FileDownloadButton: React.FC<ClientButtonType> = ({
    className,
    iconClass,
    title,
    ...props
}) => {
    const { toast } = useToast()

    return (
        <button
            className={className}
            onClick={() => {
                try {
                    var downloaded = downloadFile();
                } catch (err) {
                    toast({
                        title: "An Error Occurred!",
                        description:
                            "Failed to download file, please try again.",
                        variant: "destructive",
                        duration: 2000,
                    });
                    return
                }
                downloaded ? (toast({
                    title: "Downloaded Text!",
                    description: `Successfully downloaded ${downloaded?.documentName}`,
                    variant: "default",
                    duration: 2000,
                    className: "bg-green-500 border-text",
                })) : (
                    toast({
                        title: "Can't Download Empty File!",
                        variant: "destructive",
                        duration: 2000,
                    })
                )
            }}
        >
            <DownloadIcon className={cn('w-full', iconClass)} />
            {title && <span className="text-[20px]">{title}</span>}
        </button>
    );
};
