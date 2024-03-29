'use client'

import React from "react";

import {
    clearText, saveCacheData
} from "@minimaldocs/scripts"

import {
    ClientButtonType
} from "@minimaldocs/types"

import {
    cn
} from "@minimaldocs/lib"

import { Delete } from "lucide-react";
import { useSaved } from "./context";

export const ClearTextButton: React.FC<ClientButtonType> = ({className, iconClass, title, ...props}) => {
    const {saved, setSaved} = useSaved()

    return (
        <button
            className={cn(className, title && 'flex flex-row')}
            onClick={() => {
                clearText();
                setSaved({state: "not saved"})
            }}
        >
            <Delete className={cn('w-full', iconClass)} />
            {title && <p className="text-[20px]">{title}</p>}
        </button>
    )
}