'use client'

import React from "react";

import {
    useSettings,
    // updateSettings
} from "@minimaldocs/context"

import {
    ToggleButton
} from "./ToggleButton"

export const SettingsMenu: React.FC = () => {
    const {settings, setSettings} = useSettings();

    return (
        <ul>
            <li className="flex flex-row">
                <span>AutoSave</span>
                <ToggleButton 
                    className="absolute right-2 transition-all duration-300 border-[2px] border-zinc-800"
                    active={settings.autosave}
                    onToggle={() => setSettings({"autosave": !settings.autosave})}
                />
            </li>
        </ul>
    )
}