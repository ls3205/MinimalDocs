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
import { Copy } from "lucide-react"

export const CopyTextButton: React.FC<ClientButtonType> = ({className, iconClass, ...props}) => {
    return (
        <button className={className} onClick={copyText}>
            <Copy className={cn('w-full', iconClass)} />
        </button>
    )
}