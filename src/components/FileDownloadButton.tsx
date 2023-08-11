"use client";

import React from "react";

import { downloadFile } from "@scripts";

import { ClientButtonType } from "@minimaldocs/types";

import { cn } from "@minimaldocs/lib";
import { useToast } from "./ui/use-toast";

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
            <span className={cn("material-icons-outlined", iconClass)}>
                {" "}
                file_download{" "}
            </span>
            {title && <span className="text-[20px]">{title}</span>}
        </button>
    );
};
