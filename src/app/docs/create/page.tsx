import DesktopAccountDropdown from "@/components/DesktopAccountDropdown";
import DesktopPrimaryDropdown from "@/components/DesktopPrimaryDropdown";
import { getAuthSession } from "@/lib/auth";
import { ChevronLeft, HomeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import Footer from "../Footer";
import CreateDocForm from "@/components/CreateDocForm";
import { redirect } from "next/navigation";

interface pageProps {}

const page: React.FC<pageProps> = async ({}) => {
    const session = await getAuthSession();

    return session ? (
        <>
            <DesktopPrimaryDropdown />
            <Link
                href="/"
                className="absolute w-auto h-[40px] align-middle justify-center right-[67%] top-1/2 -translate-y-1/2 bg-subtext rounded-lg text-bg hover:bg-text hover:text-subtext active:bg-highlight active:text-highlight transition-all duration-300 active:transition-none sm:hidden"
            >
                <button className="w-full h-full flex flex-row">
                    <ChevronLeft className="h-full mx-1" />
                    <HomeIcon className="h-full mx-2" />
                </button>
            </Link>
            <div className="sm:hidden">
                <DesktopAccountDropdown />
            </div>
            <CreateDocForm />
            <Footer />
        </>
    ) : (
        redirect('/sign-in')
    );
};

export default page;
