import {
    CustomTextArea
} from "@minimaldocs/ui";

import {
    ClearTextButton,
    FileDownloadButton,
    FileUploadButton,
    CopyTextButton,
} from "@minimaldocs/ui";

import DesktopPrimaryDropdown from "@/components/DesktopPrimaryDropdown";
import WordCountPopup from "@/components/WordCountPopup";
import Footer from "@/components/Footer";
import DesktopAccountDropdown from "@/components/DesktopAccountDropdown";
import { getAuthSession } from "@/lib/auth";
import SaveAsNewDoc from "@/components/SaveAsNewDoc";

export default async function Home() {
    const session = await getAuthSession()

    return (
        // <div className="app w-screen h-screen bg-bg text-text min-w-[300px] transition-all duration-300">
        <>
            <DesktopPrimaryDropdown />
            <div className="absolute right-[25%] bottom-[92%]">
                <WordCountPopup>
                    <button className="editor-button">
                        <span className="material-icons-outlined">subject</span>
                        <span
                            className="relative text-2xl m-1 -top-[3px]"
                            id="word-count-span"
                        >
                            0
                        </span>
                    </button>
                </WordCountPopup>
            </div>
            <DesktopAccountDropdown />
            <CustomTextArea />
            <div className="absolute top-[92%] left-[25%]">
                <FileUploadButton className="editor-button" />
                <FileDownloadButton className="editor-button" />
                {
                    session && <SaveAsNewDoc className="editor-button" />
                }
            </div>
            <div className="absolute top-[92%] right-[25%]">
                <CopyTextButton className="editor-button" />
                <ClearTextButton className="editor-button" />
            </div>

            <Footer />
        </>
        // </div>
    );
}
