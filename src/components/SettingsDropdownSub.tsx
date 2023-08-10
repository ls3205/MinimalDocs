'use client'

import React, { useEffect, useState } from "react";
import { DropdownMenuCheckboxItem, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger } from "./ui/DropdownMenu";
import { Save, Settings } from "lucide-react";
import { useSettings } from "./context";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";

interface SettingsDropdownSubProps {}

type Checked = DropdownMenuCheckboxItemProps["checked"]

const SettingsDropdownSub: React.FC<SettingsDropdownSubProps> = ({}) => {
    const {settings, setSettings} = useSettings()
    const [checked, setChecked] = useState<Checked>(Boolean(settings))

    useEffect(() => {
        setSettings(String(checked));
    }, [checked])

    useEffect(() => {
        if (settings === 'true') {
            setChecked(true)
        } else {
            setChecked(false)
        }
    }, [settings])

    return (
        <DropdownMenuSub>
            <DropdownMenuSubTrigger className={cn("dropdown-item", "focus:bg-highlight focus:text-text data-[state=open]:bg-highlight m-2 mt-2 mb-2 p-2")}>
                <Settings className="mr-2" />
                <span className="mr-1 text-[20px]">Settings</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="bg-menu text-text border-text">
                <DropdownMenuCheckboxItem
                    className="focus:bg-highlight focus:text-text"
                    checked={checked}
                    onCheckedChange={setChecked}
                >
                    <Save className="mr-2" />
                    <span className="text-[20px]">Autosave</span>
                </DropdownMenuCheckboxItem>
            </DropdownMenuSubContent>
        </DropdownMenuSub>
    );
};

export default SettingsDropdownSub;
