'use client'

import React from "react"

import {
    saveCacheData
} from "@scripts"

import {
    ClientButtonType
} from "@minimaldocs/types"

import {
    useSaved
} from "@minimaldocs/context"

import {
    cn
} from "@minimaldocs/lib"

export const CacheTextButton: React.FC<ClientButtonType> = ({className, iconClass, title, ...props}) => {
    const {saved, setSaved} = useSaved();

    return (
        <button className={className}>
            <span 
                className={cn("material-icons-outlined", iconClass)}
                onClick={() => {saveCacheData(); setSaved({state: "saved"})}}    
            >
                save
            </span>
            {title && <span className="text-[20px]">{ title }</span>}
        </button>
    )
}