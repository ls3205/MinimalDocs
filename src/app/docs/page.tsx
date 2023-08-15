import DocSelectionList from "@/components/DocSelectionList";
import { getAuthSession } from "@/lib/auth";
import React from "react";

interface pageProps {}

const page: React.FC<pageProps> = async ({}) => {
    const session = await getAuthSession();

    return session ? (
        <div className="absolute w-1/2 h-3/4 top-[12.5%] left-1/2 -translate-x-1/2 bg-menu border-text border-[1px] rounded-lg">
            <DocSelectionList />
        </div>
    ) : (
        <div>sign in bro</div>
    )
};

export default page;
