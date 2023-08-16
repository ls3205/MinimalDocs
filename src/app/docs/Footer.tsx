import MobileAccountDropdown from "@/components/MobileAccountDropdown";
import MobilePrimaryDropdown from "@/components/MobilePrimaryDropdown";
import { HomeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
    return (
        <footer className="hidden absolute border-t-[1px] border-highlight bottom-0 w-full h-[8dvh] bg-menu sm:inline-block">
            <ul className="flex flex-row w-full h-full">
                <li className="w-[33.333%] group">
                    <MobilePrimaryDropdown />
                </li>
                <li className="w-[33.333%] align-middle justify-center">
                    <MobileAccountDropdown />
                </li>
                <li className="w-[33.333%]">
                    <button className="footer-button">
                        <Link href="/" className="w-full h-full">
                            <HomeIcon className="w-full" />
                        </Link>
                    </button>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
