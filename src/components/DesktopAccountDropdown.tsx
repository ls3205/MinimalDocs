import React from "react";
import { getAuthSession } from "@/lib/auth";
import DropdownMenuAccount from "./DropdownMenuAccount";
import Link from "next/link";

interface DesktopAccountDropdownProps {}

const DesktopAccountDropdown: React.FC<
    DesktopAccountDropdownProps
> = async ({}) => {
    const session = await getAuthSession();

    return (
        session ? (
            <DropdownMenuAccount user={session.user} />
        ) : (
            <button className="absolute left-[8%] bottom-[7.5%] border-subtext border-[2px] rounded-full p-2 text-subtext hover:border-text hover:text-text active:border-highlight active:text-highlight transition-all duration-300 active:transition-none">
                <Link className="w-full h-full" href='/sign-in'>Sign In</Link>
            </button>
        )
    );
};

export default DesktopAccountDropdown;
