import DesktopAccountDropdown from "@/components/DesktopAccountDropdown";
import DesktopPrimaryDropdown from "@/components/DesktopPrimaryDropdown";
import { ChevronLeft, HomeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import Footer from "../docs/Footer";
import About from "./About";

interface pageProps {}

const page: React.FC<pageProps> = ({}) => {
    return (
        <>
            <DesktopPrimaryDropdown />
            <Link
                href="/"
                className="absolute w-auto h-[40px] align-middle justify-center left-[25%] bottom-[92%] bg-subtext rounded-lg text-bg hover:bg-text hover:text-subtext active:bg-highlight active:text-highlight transition-all duration-300 active:transition-none sm:hidden"
            >
                <button className="w-full h-full flex flex-row">
                    <ChevronLeft className="h-full mx-1" />
                    <HomeIcon className="h-full mx-2" />
                </button>
            </Link>
            <DesktopAccountDropdown />
            <h1 className="absolute text-subtext text-[3vw] font-bold left-[25%] top-[12.5%] border-b-2 border-subtext sm:top-[1.5%] sm:left-[2.5%] sm:text-[45px] animate-slide-in">
                About MinimalDocs
            </h1>
            <About />
            <Footer />
        </>
    );
};

export default page;
