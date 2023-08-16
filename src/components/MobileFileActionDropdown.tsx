"use client";

import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/DropdownMenu";
import { Save } from "lucide-react";
import { FileUploadButton } from "./FileUploadButton";
import { FileDownloadButton } from "./FileDownloadButton";
// import { CacheTextButton } from "./UpdateDocButton";
import { useTheme } from "./context";

interface MobileFileActionDropdownProps {}

const MobileFileActionDropdown: React.FC<
    MobileFileActionDropdownProps
> = ({}) => {
    const {theme, setTheme} = useTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="footer-button">
                <Save className="w-full h-1/2" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className={`theme-${theme} ml-2 mb-2 bg-menu border-text text-text hidden sm:block`}>
                <DropdownMenuItem className="focus:bg-highlight focus:text-text m-2 mt-2 mb-2 p-2">
                    <FileUploadButton
                        className="w-full h-full"
                        iconClass="mr-1 text-[20px] top-[5px] relative"
                        title="Upload"
                    />
                </DropdownMenuItem>
                <DropdownMenuSeparator className="relative fill-text w-[90%] left-[5%]" />
                <DropdownMenuItem className="focus:bg-highlight focus:text-text m-2 mt-2 mb-2 p-2">
                    <FileDownloadButton
                        className="w-full h-full"
                        iconClass="mr-1 text-[20px] top-[5px] relative"
                        title="Download"
                    />
                </DropdownMenuItem>
                <DropdownMenuSeparator className="relative fill-text w-[90%] left-[5%]" />
                <DropdownMenuItem className="focus:bg-highlight focus:text-text m-2 mt-2 mb-2 p-2">
                    {/* <CacheTextButton
                        className="w-full h-full"
                        iconClass="mr-1 text-[20px] top-[5px] relative"
                        title="Save"
                    /> */}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default MobileFileActionDropdown;
