'use client'

import React from "react";

import {
    downloadFile
} from "@scripts"

import {
    ClientButtonType
} from "@minimaldocs/types"

import {
    cn
} from "@minimaldocs/lib"

export const FileDownloadButton: React.FC<ClientButtonType> = ({className, iconClass, title, ...props}) => {
    return (
        <button className={className}>
            <span
                className={cn("material-icons-outlined", iconClass)}
                onClick={downloadFile}
            >
                {" "}
                file_download{" "}
            </span>
            {
                title && <span className="text-[20px]">{ title }</span>
            }
        </button>
    )
}