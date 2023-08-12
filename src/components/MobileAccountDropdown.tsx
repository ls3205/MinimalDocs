import { getAuthSession } from "@/lib/auth";
import React from "react";
import MobileSignInDropdown from "./MobileSignInDropdown";
import MobileDropdownMenuAccount from "./MobileDropdownMenuAccount";

interface MobileAccountDropdownProps {}

const MobileAccountDropdown: React.FC<MobileAccountDropdownProps> = async ({}) => {
    const session = await getAuthSession();
    return (
        session ? (
            <MobileDropdownMenuAccount user={session.user} />
        ) : (
            <MobileSignInDropdown />
        )
    )
};

export default MobileAccountDropdown;
