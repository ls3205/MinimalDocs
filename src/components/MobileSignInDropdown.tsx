"use client";

import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/DropdownMenu";
import { LogInIcon, UserIcon } from "lucide-react";
import { useTheme } from "./context";
import Link from "next/link";

interface MobileSignInDropdownProps {}

const MobileSignInDropdown: React.FC<MobileSignInDropdownProps> = ({}) => {
    const { theme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="rounded-none footer-button">
                    <UserIcon className="w-full h-1/2" />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                side="top"
                className={`theme-${theme} bg-menu text-text border-text hidden sm:block`}
            >
                <DropdownMenuItem className="focus:bg-highlight focus:text-text m-2 mt-2 mb-2 p-2">
                    <Link href='/sign-in' className="flex flex-row">
                        <p className="mr-5">Sign In</p> <LogInIcon />
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default MobileSignInDropdown;
