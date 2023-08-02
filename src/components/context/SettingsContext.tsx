'use client'

import React, { createContext, useContext, useState, useEffect } from "react"

type SettingsProviderProps = {
    children?: React.ReactNode
}

type SettingsObjectType = {
    "autosave": boolean
}

type SettingsContextType = {
    settings: SettingsObjectType;
    setSettings: React.Dispatch<React.SetStateAction<SettingsObjectType>>
}

const SettingsContext = createContext<SettingsContextType>({settings: {"autosave": true}, setSettings: (() => {}) as React.Dispatch<React.SetStateAction<SettingsObjectType>>});

export const useSettings = () => {
    return useContext(SettingsContext);
}

export const SettingsProvider: React.FC<SettingsProviderProps> = ({children, ...props}) => {
    const [settings, setSettings] = useState<SettingsObjectType>({"autosave": true});

    useEffect(() => {
        const savedSettings = window.localStorage.getItem('settings');
        if (savedSettings) {
            setSettings(JSON.parse(savedSettings));
        } else {
            const defaultsJSON = {
                "autosave": true
            }
            setSettings(defaultsJSON);
            window.localStorage.setItem('settings', JSON.stringify(defaultsJSON));
        }
    }, [])

    useEffect(() => {
        settings && window.localStorage.setItem('settings', JSON.stringify(settings))
    }, [settings])

    return (
        <SettingsContext.Provider value={{settings, setSettings}}>
            {
                children
            }
        </SettingsContext.Provider>
    )
}