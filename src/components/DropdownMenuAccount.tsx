"use client";

import React, { useState } from "react";
import { User } from "next-auth";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/DropdownMenu";
import { Avatar, AvatarFallback } from "./ui/Avatar";
import Image from "next/image";
import { LogOutIcon, Plus, ScrollText, UserIcon, X } from "lucide-react";
import { useTheme } from "./context";
import { signOut } from "next-auth/react";
import Spinner from "./Spinner";
import Link from "next/link";

interface DropdownMenuAccountProps {
    user: Pick<User, "name" | "image" | "email">;
}

const DropdownMenuAccount: React.FC<DropdownMenuAccountProps> = ({ user }) => {
    const { theme } = useTheme();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="absolute left-[8%] bottom-[7.5%] border-subtext border-[2px] rounded-full p-[1px] hover:border-text active:border-highlight transition-all duration-300 active:transition-none sm:invisible">
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
            <DropdownMenuContent
                side="top"
                className={`theme-${theme} bg-menu text-text border-text sm:hidden`}
            >
                <div className="justify-center gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
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
                        {user.name && (
                            <p className="font-medium text-2xl">{user.name}</p>
                        )}
                        {user.email && <p className="">{user.email}</p>}
                    </div>
                </div>
                <DropdownMenuSeparator className="dropdown-separator" />
                <Link href='/docs/create'>
                    <DropdownMenuItem className="focus:bg-green-500 focus:text-white m-2 mt-2 mb-2 p-2 cursor-pointer">
                        <p className="text-sm mr-auto">Create New Doc</p>
                        <Plus />
                    </DropdownMenuItem>
                </Link>
                <Link href="/docs">
                    <DropdownMenuItem className="focus:bg-highlight focus:text-text m-2 mt-2 mb-2 p-2 cursor-pointer" onSelect={(e) => e.preventDefault()}>
                        <p className="text-sm mr-auto">Open/Manage Docs</p>
                        <ScrollText />
                    </DropdownMenuItem>
                </Link>
                <Link href="/">
                    <DropdownMenuItem className="focus:bg-red-500 focus:text-white m-2 mt-2 mb-2 p-2 cursor-pointer" onSelect={(e) => e.preventDefault()}>
                        <p className="text-sm mr-auto">Close Doc</p>
                        <X />
                    </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator className="dropdown-separator" />
                <DropdownMenuItem
                    className="focus:bg-red-500 focus:text-white m-2 mt-2 mb-2 p-2 cursor-pointer"
                    onSelect={(e) => {
                        e.preventDefault();
                        setIsLoading(true);
                        signOut({
                            callbackUrl: window.location.origin,
                        });
                    }}
                >
                    <p className="text-[20px] mr-auto">Sign Out</p>
                    {isLoading ? (
                        <Spinner width="w-6" height="w-6" />
                    ) : (
                        <LogOutIcon />
                    )}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default DropdownMenuAccount;
