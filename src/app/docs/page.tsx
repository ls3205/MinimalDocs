import DesktopAccountDropdown from "@/components/DesktopAccountDropdown";
import DesktopPrimaryDropdown from "@/components/DesktopPrimaryDropdown";
import DocSelectionList from "@/components/DocSelectionList";
import Footer from "@/components/Footer";
import { getAuthSession } from "@/lib/auth";
import { ChevronLeft, HomeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface pageProps {}

const page: React.FC<pageProps> = async ({}) => {
    const session = await getAuthSession();

    return session ? (
        <>
            <DesktopPrimaryDropdown />
            <Link
                href="/"
                className="absolute w-auto h-[40px] align-middle justify-center left-[25%] bottom-[92%] bg-subtext rounded-lg text-bg hover:bg-text hover:text-subtext active:bg-highlight active:text-highlight transition-all duration-300 active:transition-none sm:hidden"
            >
                <button className="w-full h-full flex flex-row">
                    <ChevronLeft className="h-full mx-1"/>
                    <HomeIcon className="h-full mx-2" />
                </button>
            </Link>
            <div className="absolute w-1/2 h-3/4 top-[12.5%] left-1/2 -translate-x-1/2 bg-menu border-text border-[1px] rounded-lg">
                <DocSelectionList />
            </div>
            <DesktopAccountDropdown />
            <Footer />
        </>
    ) : (
        <div>sign in bro</div>
    );
};

export default page;
