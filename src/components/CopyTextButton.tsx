'use client'

import React from "react"

import {
    copyText
} from "@scripts"

import {
    ClientButtonType
} from "@minimaldocs/types"

import {
    cn
} from "@minimaldocs/lib"

export const CopyTextButton: React.FC<ClientButtonType> = ({className, iconClass, ...props}) => {
    return (
        <button className={className} onClick={copyText}>
            <span className={cn("material-icons-outlined", iconClass)}>
                content_copy
            </span>
        </button>
    )
}