import { getAuthSession } from "@/lib/auth";
import React from "react";

import { UpdateDocButton } from "@minimaldocs/ui";

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
import EditorTextArea from "@/components/EditorTextArea";
import { redirect } from "next/navigation";

interface pageProps {
    params: {
        id: string;
    };
}

const page: React.FC<pageProps> = async ({ params }) => {
    const { id } = params;
    const session = await getAuthSession();

    return (
        // <div className="app w-screen h-screen bg-bg text-text min-w-[300px] transition-all duration-300">
        session ? (
            <>
                <DesktopPrimaryDropdown />
                <div className="absolute right-[25%] bottom-[92%]">
                    <WordCountPopup>
                        <button className="editor-button">
                            <span className="material-icons-outlined">
                                subject
                            </span>
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
                <EditorTextArea id={id} />
                <div className="absolute top-[92%] left-[25%]">
                    <FileUploadButton className="editor-button" />
                    <FileDownloadButton className="editor-button" />
                    <UpdateDocButton className="editor-button" id={ id } />
                </div>
                <div className="absolute top-[92%] right-[25%]">
                    <CopyTextButton className="editor-button" />
                    <ClearTextButton className="editor-button" />
                </div>

                <Footer />
            </>
        ) : (
            redirect('/sign-in')
        )
    );
};

export default page;
