import React from "react";
import MobilePrimaryDropdown from "./MobilePrimaryDropdown";
import MobileFileActionDropdown from "./MobileFileActionDropdown";
import WordCountPopup from "./WordCountPopup";
import { CopyTextButton } from "./CopyTextButton";
import { ClearTextButton } from "./ClearTextButton";
import { AlignLeft } from "lucide-react";
import MobileAccountDropdown from "./MobileAccountDropdown";
import MobileCopyDeleteDropdown from "./MobileCopyDeleteDropdown";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
    return (
        <footer className="hidden absolute border-t-[1px] border-highlight bottom-0 w-full h-[8dvh] bg-menu sm:inline-block">
            <ul className="flex flex-row w-full h-full">
                <li className="w-[20%] group">
                    <MobilePrimaryDropdown />
                </li>
                <li className="w-[20%] align-middle justify-center">
                    <MobileFileActionDropdown />
                </li>
                <li className="w-[20%] align-middle justify-center">
                    <MobileAccountDropdown />
                </li>
                <li className="w-[20%] align-middle justify-center">
                    <WordCountPopup>
                        <button className="footer-button">
                            <AlignLeft className="w-full h-1/2" />
                        </button>
                    </WordCountPopup>
                </li>
                {/* <li className="w-[16.667%] align-middle justify-center">
                    <CopyTextButton
                        className="footer-button"
                        iconClass="w-full h-1/2"
                    />
                </li>
                <li className="w-[16.667%] align-middle justify-center">
                    <ClearTextButton
                        className="footer-button"
                        iconClass="w-full h-1/2"
                    />
                </li> */}
                <li className="w-[20%] align-middle justify-center">
                    <MobileCopyDeleteDropdown />
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
