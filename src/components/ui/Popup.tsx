"use client"

import React, { useState, useEffect, createContext, useContext, useRef } from "react"

// type PopupProps = {
//     children?: React.ReactNode;
//     id?: string;
// }

// type PopupTriggerProps = {
//     children?: React.ReactNode;
//     id?: string;
//     bypassButton?: boolean;
//     display?: boolean;
// }

// type PopupRemoteTriggerProps = {
//     children?: React.ReactNode;
//     id?: string;
//     className?: string;
//     triggerId?: string;
//     bypassButton?: boolean;
// }

// type PopupContentProps = {
//     children?: React.ReactNode;
//     className?: string;
// }

// type PopupHeaderProps = {
//     children?: React.ReactNode;
//     className?: string;
// }

// type PopedContextType = {
//     poped: boolean;
//     setPoped: React.Dispatch<React.SetStateAction<boolean>> | undefined;
// }

import {
    PopupProps,
    PopupTriggerProps,
    PopupRemoteTriggerProps,
    PopupContentProps,
    PopupHeaderProps,
    PopedContextType
} from "@minimaldocs/types"

const PopedContext = createContext<PopedContextType>({poped: false, setPoped: undefined});
const ButtonRefContext = createContext<any>(undefined);
const PopupRefContext = createContext<any>(undefined);

const Popup: React.FC<PopupProps> = ({children=undefined, id='', ...props}) => {
    const [poped, setPoped] = useState<boolean>(false);
    const buttonRef = useRef<any>(null);
    const popupRef = useRef<any>(null)

    var remoteTrigger: HTMLElement;

    const getRemoteTrigger = (): HTMLElement | undefined => {
        const remoteTriggerElement: HTMLElement = document.getElementById(`${id}-remote`)!;
        if (remoteTriggerElement) {
            remoteTrigger = remoteTriggerElement;
            return remoteTriggerElement;
        } else {
            return undefined;
        }
    }

    useEffect(() => {
        const handler = (e: MouseEvent): void => {
            getRemoteTrigger();
            
            if (popupRef.current && !popupRef.current.contains(e.target)) {
                // @ts-ignore
                if (remoteTrigger && !remoteTrigger.contains(e.target)) {
                    setPoped(false);
                } else if (buttonRef.current && !buttonRef.current.contains(e.target)) {
                    setPoped(false);
                }
            }
        }

        window.addEventListener("click", handler);
        return () => window.removeEventListener("click", handler);
    }, [])

    return (
        <PopedContext.Provider value={{poped, setPoped}}>
            <ButtonRefContext.Provider value={buttonRef}>
                <PopupRefContext.Provider value={popupRef}>
                    <div {...props}>
                        { children }
                    </div>
                </PopupRefContext.Provider>
            </ButtonRefContext.Provider>
        </PopedContext.Provider>
    )
}

const PopupTrigger: React.FC<PopupTriggerProps> = ({id='', bypassButton=false, display=true, children=undefined, ...props}) => {
    const {poped, setPoped} = useContext(PopedContext);
    const buttonRef = useContext(ButtonRefContext);

    return (
        display ? (
            !bypassButton ? (
                <button onClick={() => setPoped!(!poped)} ref={buttonRef} {...props}>
                    {
                        children
                    }
                </button>
            ) : (
                <div className="w-full h-full" onClick={() => setPoped!(!poped)} ref={buttonRef} {...props}>
                    { children }
                </div>
            )
        ) : (
            <button onClick={() => setPoped!(!poped)} className="absolute top-0 left-0 w-0 h-0" id={id} />
        )
    )
}

const PopupRemoteTrigger: React.FC<PopupRemoteTriggerProps> = ({id='', triggerId='', bypassButton=false, children=undefined, ...props}) => {
    const clickTrigger = () => {
        const trigger: HTMLElement = document.getElementById(triggerId)!;
        trigger!.click();
    }
    
    return (
        !bypassButton ? (
            <button className="w-full h-full flex flex-row" onClick={clickTrigger} id={id} {...props}>
                {
                    children
                }
            </button>
        ) : (
            <div className="w-full h-full flex flex-row" onClick={clickTrigger} id={id} {...props}>
                { children }
            </div>
        )
    )
}

const PopupContent: React.FC<PopupContentProps> = ({children=undefined, className=undefined, ...props}) => {
    const {poped, setPoped} = useContext(PopedContext);
    const popupRef = useContext(PopupRefContext)

    return (
        poped ? (
            <div className="absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-25">
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 ${className}`} ref={popupRef}>
                    {
                        children
                    }
                </div>
            </div>
        ) : ''
    )
}

const PopupHeader: React.FC<PopupHeaderProps> = ({children=undefined, className=undefined}) => {
    return (
        <div className={`flex flex-row w-full h-auto ${className}`}>
            { children }
        </div>
    )
}

const PopupExitButton: React.FC<any> = ({...props}) => {
    const {poped, setPoped} = useContext(PopedContext);

    return (
        props.children ? (
            <button onClick={() => setPoped!(false)}>
                {
                    props.children
                }
            </button>
        ) : (
            <button
                onClick={() => setPoped!(false)}
                className="right-0 absolute m-2 mr-4 w-[35px] h-[35px] border-2 border-subtext rounded-xl hover:border-text hover:rounded-2xl group transition-all duration-300"
            >
                <span className="material-icons-outlined text-2xl text-subtext group-hover:text-text transition-all duration-300">
                    close
                </span>
            </button>
        )
    )
}

export {
    Popup,
    PopupTrigger,
    PopupRemoteTrigger,
    PopupContent,
    PopupHeader,
    PopupExitButton
}