'use client'

import React from "react";

import {
    clearText
} from "@minimaldocs/scripts"

import {
    ClientButtonType
} from "@minimaldocs/types"

import {
    cn
} from "@minimaldocs/lib"

export const ClearTextButton: React.FC<ClientButtonType> = ({className, iconClass, ...props}) => {
    return (
        <button
            className={className}
            onClick={() => {
                clearText();
            }}
        >
            <span className={cn("material-icons-outlined", iconClass)}>
                backspace
            </span>
        </button>
    )
}