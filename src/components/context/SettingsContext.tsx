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
        const savedSettings = window.localStorage.getItem('settings');
        if (savedSettings) {
            setSettings(Boolean(savedSettings));
        } else {
            setSettings(true);
        }
    }, [])

    useEffect(() => {
        settings && window.localStorage.setItem('settings', String(settings))
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