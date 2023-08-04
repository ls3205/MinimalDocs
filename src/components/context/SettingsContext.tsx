'use client'

import React, { createContext, useContext, useState, useEffect } from "react"

type SettingsProviderProps = {
    children?: React.ReactNode
}

type SettingsObjectType = {
    "autosave": boolean
}


type SettingsContextType = {
    settings: boolean;
    setSettings: React.Dispatch<React.SetStateAction<boolean>>
}

const SettingsContext = createContext<SettingsContextType>({settings: true, setSettings: (() => {}) as React.Dispatch<React.SetStateAction<boolean>>});

export const useSettings = () => {
    return useContext(SettingsContext);
}

export const SettingsProvider: React.FC<SettingsProviderProps> = ({children, ...props}) => {
    const [settings, setSettings] = useState<boolean>(true);

    useEffect(() => {
        const savedSettings = window.localStorage.getItem("settings") === "true" ? true : false;
        if (savedSettings !== undefined) {
            console.log('e');
            console.log(savedSettings);
            setSettings(savedSettings);
            console.log(settings);
        } else {
            console.log('b');
            setSettings(true);
        }
    }, [])

    useEffect(() => {
        if ((settings !== undefined) && (settings !== (window.localStorage.getItem('settings') === "true" ? true : false))) {
            window.localStorage.setItem("settings", String(settings));
        }
    }, [settings])

    return (
        // @ts-ignore
        <SettingsContext.Provider value={{ settings, setSettings }}>
            {
                children
            }
        </SettingsContext.Provider>
    )
}