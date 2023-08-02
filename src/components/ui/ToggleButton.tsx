'use client'

import React from "react";

import {
    cn
} from "@minimaldocs/lib"

type ToggleButtonType = {
    className?: string;
    buttonClass?: string;
    active: boolean;
    activeColor?: string;
    inactiveColor?: string;
    onToggle?: Function
}

export const ToggleButton: React.FC<ToggleButtonType> = ({className, buttonClass, active=false, onToggle, activeColor='bg-green-500', inactiveColor='bg-red-500', ...props}) => {
    return (
        <div 
            className={cn(`rounded-full w-[60px] h-[30px] p-1 `, active ? activeColor : inactiveColor, className)}
            onClick={() => onToggle!()}
        >
            <div
                className={cn(`relative m-0 p-0 rounded-full h-full aspect-square bg-zinc-800 transition-transform duration-300`, active ? `left-[calc(100%-22px)]` : `left-0`, buttonClass)}
            ></div>
        </div>
    )
}