"use client";

import React from "react";

import { uploadFile } from "@scripts";

import { ClientButtonType } from "@minimaldocs/types";

import { cn } from "@minimaldocs/lib";
import { useSaved } from "./context";
import { UploadIcon } from "lucide-react";

export const FileUploadButton: React.FC<ClientButtonType> = ({
    className,
    iconClass,
    title,
    ...props
}) => {
    const { setSaved } = useSaved();

    return (
        <button className={className}>
            <label className="inline-block w-full h-full">
                <UploadIcon className={cn('w-full', iconClass)} />
                {title && <span className="text-[20px]">{title}</span>}
                <input
                    type="file"
                    accept=".txt"
                    className="hidden"
                    id="upload"
                    onChange={() => {
                        uploadFile();
                        setSaved({ state: "not saved" });
                    }}
                />
            </label>
        </button>
    );
};
