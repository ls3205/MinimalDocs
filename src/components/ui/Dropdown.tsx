"use client"

import React, { useState, useEffect, createContext, useContext, useRef } from "react"

import {
    DropdownProps,
    DropdownTriggerProps,
    DropdownItemsProps,
    DropdownItemProps,
    DropdownDividerProps,
    DropdownItemIconProps,
    ExpandedContextType
} from "@minimaldocs/types"

const ExpandedContext = createContext<ExpandedContextType>({expanded: false, setExpanded: undefined});
const ButtonRefContext = createContext<any>(undefined);
const DropdownRefContext = createContext<any>(undefined);

const Dropdown: React.FC<DropdownProps> = ({children=undefined, ...props}) => {
    const [expanded, setExpanded] = useState(false);
    const dropdownRef = useRef<any>(null);
    const buttonRef = useRef<any>(null);

    useEffect(() => {
        const handler = (e: MouseEvent): void => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                if (buttonRef.current && !buttonRef.current.contains(e.target)) {
                    setExpanded(false)
                }
            }
        }

        window.addEventListener("click", handler);
        return () => window.removeEventListener("click", handler);
    }, [])

    return (
        <ExpandedContext.Provider value={{expanded, setExpanded}}>
            <ButtonRefContext.Provider value={buttonRef}>
                <DropdownRefContext.Provider value={dropdownRef}>
                    <div {...props}>
                        {
                            children
                        }
                    </div>
                </DropdownRefContext.Provider>
            </ButtonRefContext.Provider>
        </ExpandedContext.Provider>
    )
}

const DropdownTrigger: React.FC<DropdownTriggerProps> = ({children=undefined, bypassButton=false, ...props}) => {
    const {expanded, setExpanded} = useContext(ExpandedContext);
    const buttonRef = useContext(ButtonRefContext);

    return (
        !bypassButton ? (
            <button onClick={() => setExpanded!(!expanded)} ref={buttonRef} {...props}>
                {
                    children
                }
            </button>
        ) : (
            <div className="w-full h-full" onClick={() => setExpanded!(!expanded)} ref={buttonRef} {...props}>
                { children }
            </div>
        )
    )
}

const DropdownItems: React.FC<DropdownItemsProps> = ({children=undefined, className='', anchor='bm', ...props}) => {
    const {expanded, setExpanded} = useContext(ExpandedContext);
    const dropdownRef = useContext(DropdownRefContext)

    return (
        expanded ? (
            <div className={[
                `absolute transition-all  ${className}`,
                (anchor === 'bm') && 'left-1/2 -translate-x-1/2 origin-top-left',
                (anchor === 'bottom-mobile' && 'w-[90%] left-[5%] bottom-[150%] h-auto origin-bottom')
                ].filter(Boolean).join(' ')} ref={dropdownRef} {...props}>
                {
                    children
                }
            </div>
        ) : ''
    )
}

const DropdownItem: React.FC<DropdownItemProps> = ({children=undefined, className='', ...props}) => {
    return (
        <div className={`flex flex-row ${className}`} {...props}>
            {
                children
            }
        </div>
    )
}

const DropdownDivider: React.FC<DropdownDividerProps> = ({className='', ...props}) => {
    return (
        <div className={`h-[2px] rounded-full bg-black ${className}`} {...props} />
    )
}

const DropdownItemIcon: React.FC<DropdownItemIconProps> = ({icon = '', ...props}) => {
    return (
        <span className="material-icons-outlined mr-1 text-[20px] relative top-[5px]" {...props}>
            {
                icon
            }
        </span>
    )
}

export {
    Dropdown,
    DropdownTrigger,
    DropdownItems,
    DropdownItem,
    DropdownDivider,
    DropdownItemIcon
}