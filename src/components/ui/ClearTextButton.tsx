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

import { useSettings } from "../context";

export const ClearTextButton: React.FC<ClientButtonType> = ({className, iconClass, ...props}) => {
    const {settings, setSettings} = useSettings();

    return (
        <button
            className={className}
            onClick={() => {
                clearText();
                console.log(settings);
                if (settings === true) {
                    saveCacheData();
                }
            }}
        >
            <span className={cn("material-icons-outlined", iconClass)}>
                backspace
            </span>
        </button>
    )
}