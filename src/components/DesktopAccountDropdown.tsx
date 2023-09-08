import React from "react";
import { getAuthSession } from "@/lib/auth";
import DropdownMenuAccount from "./DropdownMenuAccount";
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
