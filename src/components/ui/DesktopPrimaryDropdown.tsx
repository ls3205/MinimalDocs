"use client"

import React, { useState, useEffect } from "react";

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubTrigger,
    DropdownMenuSubContent,
    DropdownMenuCheckboxItem
} from "@components/ui/DropdownMenu";

import {
    Dialog,
    DialogTrigger,
    DialogHeader,
    DialogTitle,
    DialogContent,
} from "@components/ui/Dialog"

import {
    ThemeSelectorList
} from "@minimaldocs/ui"

import { DesktopSVG } from ".";
import { Info, Moon, Save, Settings } from "lucide-react";
import Link from "next/link";
import { useSettings, useTheme } from "../context";

import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

type Checked = DropdownMenuCheckboxItemProps["checked"]

interface DesktopPrimaryDropdownProps {}

const DesktopPrimaryDropdown: React.FC<DesktopPrimaryDropdownProps> = ({...props}) => {
    const {theme, setTheme} = useTheme()
    const {settings, setSettings} = useSettings()
    console.log(settings)
    // const [autosave, setAutosave] = useState<Checked>(() => {
    //     console.log(settings)
    //     if (settings !== undefined) {
    //         if (settings === true) {
    //             return true
    //         } else {
    //             return false
    //         }
    //     }
    // })
    const [autosave, setAutosave] = useState<Checked>(settings)
    console.log(autosave)

    useEffect(() => {
        // @ts-ignore
        setSettings(autosave);
    }, [autosave])

    useEffect(() => {
        setAutosave(settings)
    }, [settings])

    return (
        <Dialog>
            <DropdownMenu>
                <DropdownMenuTrigger className="absolute left-[7.5%] top-[7.5%] sm:hidden">
                    <DesktopSVG />
                </DropdownMenuTrigger>
                <DropdownMenuContent className={`theme-${theme} bg-menu text-text border-text sm:hidden`}>
                    <DialogTrigger asChild>
                        <DropdownMenuItem className="focus:bg-highlight focus:text-text m-2 mt-2 mb-2 p-2">
                            <Moon className="mr-2" />
                            <span className="mr-1 text-[20px]">
                                Theme
                            </span>
                            <span className="mr-1">
                                <div>
                                    <ul className="flex flex-row bg-bg rounded-lg">
                                        <li className="relative rounded-lg w-[20px] h-[20px] m-1 bg-text"></li>
                                        <li className="relative rounded-lg w-[20px] h-[20px] m-1 bg-subtext"></li>
                                        <li className="relative rounded-lg w-[20px] h-[20px] m-1 bg-menu"></li>
                                    </ul>
                                </div>
                            </span>
                        </DropdownMenuItem>
                    </DialogTrigger>
                    <DropdownMenuSeparator className="relative fill-text w-[90%] left-[5%]" />
                    <DropdownMenuSub >
                        <DropdownMenuSubTrigger className="focus:bg-highlight focus:text-text data-[state=open]:bg-highlight m-2 mt-2 mb-2 p-2">
                            <Settings className="mr-2" />
                            <span className="mr-1 text-[20px]">Settings</span>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuSubContent className="bg-menu text-text border-text">
                            <DropdownMenuCheckboxItem className="focus:bg-highlight focus:text-text" checked={autosave} onCheckedChange={setAutosave}>
                                <Save className="mr-2" />
                                <span className="text-[20px]">Autosave</span>
                            </DropdownMenuCheckboxItem>
                        </DropdownMenuSubContent>
                    </DropdownMenuSub>
                    <DropdownMenuSeparator className="relative fill-text w-[90%] left-[5%]" />
                    <DropdownMenuItem className="focus:bg-highlight focus:text-text m-2 mt-2 mb-2 p-2">
                        <Link className="flex flex-row align-middle w-full h-full" href="/about">
                            <Info className="mr-2" />
                            <span className="relative text-[20px] top-[2px]">About</span>
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <DialogContent className={`theme-${theme} w-[50%] max-w-[50%] max-h-[80%] sm:w-[90%] sm:max-w-full rounded-xl bg-menu border-2 border-text text-2xl text-text`}>
                <DialogHeader>
                    <DialogTitle className="text-left text-2xl text-text">Select Theme</DialogTitle>
                </DialogHeader>
                <ThemeSelectorList />
            </DialogContent>
        </Dialog>
    );
};

export default DesktopPrimaryDropdown;
