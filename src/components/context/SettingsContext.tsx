'use client'

import React, { createContext, useContext, useState, useEffect } from "react"

type SettingsProviderProps = {
    children?: React.ReactNode
}

type SettingsContextType = {
    settings: string;
    setSettings: React.Dispatch<React.SetStateAction<string>>
}

const SettingsContext = createContext<SettingsContextType>({settings: '', setSettings: (() => {}) as React.Dispatch<React.SetStateAction<string>>});

export const useSettings = () => {
    return useContext(SettingsContext);
}

export const SettingsProvider: React.FC<SettingsProviderProps> = ({children, ...props}) => {
    const [settings, setSettings] = useState<string>('');

    useEffect(() => {
        const storedSettings = window.localStorage.getItem("settings");
        if (storedSettings !== null) {
            setSettings(storedSettings);
        } else {
            window.localStorage.setItem('settings', 'true')
            setSettings("true");
        }
    }, [])

    useEffect(() => {
        settings && window.localStorage.setItem('settings', settings)
    }, [settings])

    return (
        <SettingsContext.Provider value={{ settings, setSettings }}>
            {
                children
            }
        </SettingsContext.Provider>
    )
}