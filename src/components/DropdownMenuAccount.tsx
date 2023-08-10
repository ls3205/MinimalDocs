'use client'

import React from "react";
import { User } from "next-auth";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/DropdownMenu";
import { Avatar, AvatarFallback } from "./ui/Avatar";
import Image from "next/image";
import { UserIcon } from "lucide-react";
import { useTheme } from "./context";

interface DropdownMenuAccountProps {
    user: Pick<User, "name" | "image" | "email">;
}

const DropdownMenuAccount: React.FC<DropdownMenuAccountProps> = ({ user }) => {
    const {theme} = useTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="absolute left-[8%] bottom-[7.5%] border-subtext border-[2px] rounded-full p-[1px] hover:border-text active:border-highlight transition-all duration-300 active:transition-none">
                <Avatar className="w-14 h-14">
                    {user.image ? (
                        <div className="relative aspect-square h-full w-full">
                            <Image
                                fill
                                src={user.image}
                                alt="Profile Picture"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                    ) : (
                        <AvatarFallback>
                            <UserIcon />
                        </AvatarFallback>
                    )}
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="top" className={`theme-${theme} bg-menu text-text border-text sm:hidden`}>
                <DropdownMenuItem className="focus:bg-highlight focus:text-text m-2 mt-2 mb-2 p-2">
                    <p>under construction... 🚧👷‍♂️</p>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default DropdownMenuAccount;
