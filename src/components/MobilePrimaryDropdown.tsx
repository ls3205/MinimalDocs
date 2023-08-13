"use client";

import React from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/Dialog";
import {
    DropdownMenu, DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator, DropdownMenuTrigger
} from "./ui/DropdownMenu";
import MobileSVG from "./MobileSVG";
import { Info, Moon } from "lucide-react";
import { ThemeSelectorList } from "./ThemeSelectorList";
import { useSettings, useTheme } from "./context";
import Link from "next/link";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

interface MobilePrimaryDropdownProps {}

type Checked = DropdownMenuCheckboxItemProps["checked"]

const MobilePrimaryDropdown: React.FC<MobilePrimaryDropdownProps> = ({}) => {
    const { theme, setTheme } = useTheme();
    const { settings, setSettings } = useSettings();

    return (
        <Dialog>
            <DropdownMenu>
                <DropdownMenuTrigger className="footer-button">
                    <MobileSVG />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    className={`theme-${theme} ml-2 mb-2 bg-menu border-text text-text hidden sm:block`}
                >
                    <DialogTrigger>
                        <DropdownMenuItem className="focus:bg-highlight focus:text-text m-2 mt-2 mb-2 p-2">
                            <Moon />
                            <span className="mr-1 text-[20px]">Theme</span>
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
                    {/* <DropdownMenuSeparator className="relative fill-text w-[90%] left-[5%]" /> */}
                    {/* <SettingsDropdownSub /> */}
                    <DropdownMenuSeparator className="relative fill-text w-[90%] left-[5%]" />
                    <DropdownMenuItem className="focus:bg-highlight focus:text-text m-2 mt-2 mb-2 p-2">
                        <Link
                            className="flex flex-row align-middle w-full h-full"
                            href="/about"
                        >
                            <Info className="mr-2" />
                            <span className="relative text-[20px] top-[2px]">
                                About
                            </span>
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <DialogContent
                className={`theme-${theme} w-[50%] max-w-[50%] max-h-[80%] sm:w-[90%] sm:max-w-full rounded-xl bg-menu border-2 border-text text-2xl text-text`}
            >
                <DialogHeader>
                    <DialogTitle className="text-left text-2xl text-text">
                        Select Theme
                    </DialogTitle>
                </DialogHeader>
                <ThemeSelectorList />
            </DialogContent>
        </Dialog>
    );
};

export default MobilePrimaryDropdown;
