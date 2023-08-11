import React, { useState } from "react";
import { getAuthSession } from "@/lib/auth";
import DropdownMenuAccount from "./DropdownMenuAccount";
import Link from "next/link";
import SignInButton from "./SignInButton";

interface DesktopAccountDropdownProps {}

const DesktopAccountDropdown: React.FC<
    DesktopAccountDropdownProps
> = async ({}) => {
    const session = await getAuthSession();

    return session ? (
        <DropdownMenuAccount user={session.user} />
    ) : (
        <SignInButton />
    );
};

export default DesktopAccountDropdown;
