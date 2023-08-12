"use client";

import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/DropdownMenu";
import { Workflow } from "lucide-react";
import { useTheme } from "./context";
import { CopyTextButton } from "./CopyTextButton";
import { ClearTextButton } from "./ClearTextButton";

interface MobileCopyDeleteDropdownProps {}

const MobileCopyDeleteDropdown: React.FC<
    MobileCopyDeleteDropdownProps
> = ({}) => {
    const { theme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="footer-button">
                <Workflow className="w-full h-1/2" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className={`theme-${theme} bg-menu text-text border-text hidden sm:block`}
            >
                <DropdownMenuItem className="focus:bg-highlight focus:text-text m-2 mt-2 mb-2 p-2" onSelect={(e) => {e.preventDefault();}}>
                    <CopyTextButton
                        className="w-full h-full"
                        iconClass="mr-1 text-[20px] relative"
                        title="Copy"
                    />
                </DropdownMenuItem>
                <DropdownMenuSeparator className="dropdown-separator" />
                <DropdownMenuItem className="focus:bg-highlight focus:text-text m-2 mt-2 mb-2 p-2" onSelect={(e) => e.preventDefault()}>
                    <ClearTextButton
                        className="w-full h-full"
                        iconClass="mr-1 text-[20px] relative"
                        title="Clear"
                    />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default MobileCopyDeleteDropdown;
