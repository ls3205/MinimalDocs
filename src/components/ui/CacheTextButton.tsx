'use client'

import React from "react"

import {
    saveCacheData
} from "@scripts"

import {
    ClientButtonType
} from "@minimaldocs/types"

import {
    cn
} from "@minimaldocs/lib"

export const CacheTextButton: React.FC<ClientButtonType> = ({className, iconClass, title, ...props}) => {
    return (
        <button className={className}>
            <span 
                className={cn("material-icons-outlined", iconClass)}
                onClick={() => saveCacheData()}    
            >
                save
            </span>
            {title && <span className="text-[20px]">{ title }</span>}
        </button>
    )
}