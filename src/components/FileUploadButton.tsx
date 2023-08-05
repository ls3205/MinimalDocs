"use client";

import React from "react";

import {
    uploadFile
} from "@scripts";

import {
    ClientButtonType
} from "@minimaldocs/types"

import {
    cn
} from "@minimaldocs/lib"

export const FileUploadButton: React.FC<ClientButtonType> = ({className, iconClass, title, ...props}) => {
    return (
        <button className={className}>
            <label className="inline-block w-full h-full">
                <span className={cn("material-icons-outlined", iconClass)}> file_upload </span>
                {
                    title && <span className="text-[20px]">{ title }</span>
                }
                <input
                    type="file"
                    accept=".txt"
                    className="hidden"
                    id="upload"
                    onChange={uploadFile}
                />
            </label>
        </button>
    );
};