"use client"

import React from "react";

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator
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

import { DesktopSVG } from "./ui";
import { Info, Moon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "./context";

import SettingsDropdownSub from "./SettingsDropdownSub";

interface DesktopPrimaryDropdownProps {}

const DesktopPrimaryDropdown: React.FC<DesktopPrimaryDropdownProps> = ({...props}) => {
    const {theme, setTheme} = useTheme()

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
                    <DropdownMenuSeparator className="dropdown-separator" />
                    <SettingsDropdownSub />
                    <DropdownMenuSeparator className="dropdown-separator" />
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
