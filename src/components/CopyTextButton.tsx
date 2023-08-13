"use client";

import React from "react";

import { copyText } from "@scripts";

import { ClientButtonType } from "@minimaldocs/types";

import { cn } from "@minimaldocs/lib";
import { Copy } from "lucide-react";
import { useToast } from "./ui/use-toast";

export const CopyTextButton: React.FC<ClientButtonType> = ({
    className,
    iconClass,
    title,
    ...props
}) => {
    const { toast } = useToast()
    return (

        <button
            className={cn(className, title && 'flex flex-row')}
            onClick={() => {
                try {
                    var copiedData = copyText();
                } catch (err) {
                    toast({
                        title: "An Error Occurred",
                        description: "Unable to copy text to clipboard, please try again!",
                        variant: "destructive",
                        duration: 2000
                    });

                    return
                }
                copiedData == '' ? (
                    toast({
                        title: "Nothing to Copy!",
                        variant: "destructive",
                        duration: 2000,
                    })
                ) : (toast({
                    title: "Copied to Clipboard",
                    description: copiedData,
                    variant: "default",
                    duration: 2000,
                    className: "bg-menu text-text border-text",
                }));
            }}
        >
            <Copy className={cn("w-full", iconClass)} />
            {title && <p className="text-[20px]">{title}</p>}
        </button>
    );
};
