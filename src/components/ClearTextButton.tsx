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

import { useSettings } from "./context";
import { Delete } from "lucide-react";

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
            <Delete className={cn('w-full', iconClass)} />
        </button>
    )
}