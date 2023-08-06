"use client";

import React from "react";

import { saveCacheData } from "@scripts";

import { ClientButtonType } from "@minimaldocs/types";

import { useSaved } from "@minimaldocs/context";

import { cn } from "@minimaldocs/lib";
import { useToast } from "./ui/use-toast";

export const CacheTextButton: React.FC<ClientButtonType> = ({
    className,
    iconClass,
    title,
    ...props
}) => {
    const { saved, setSaved } = useSaved();

    const { toast } = useToast();

    return (
        <button className={className}>
            <span
                className={cn("material-icons-outlined", iconClass)}
                onClick={() => {
                    try {
                        saveCacheData();
                    } catch (error) {
                        toast({
                            title: "An Error Occurred!",
                            description: "Failed to cache text data, please try again.",
                            variant: "destructive",
                            duration: 2000
                        })
                        return
                    }
                    toast({
                        title: "Saved Data!",
                        description: "Successfully locally cached text data.",
                        variant: "default",
                        duration: 2000,
                        className: "bg-green-500 border-text"
                    })
                    setSaved({ state: "saved" });
                }}
            >
                save
            </span>
            {title && <span className="text-[20px]">{title}</span>}
        </button>
    );
};
