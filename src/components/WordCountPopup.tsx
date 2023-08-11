"use client"

import React from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/Dialog";
import { useTheme } from "./context";
import WordCountContent from "./WordCountContent";

interface WordCountPopupProps {
    children: React.ReactNode;
}

const WordCountPopup: React.FC<WordCountPopupProps> = ({ children }) => {
    const {theme, setTheme} = useTheme()

    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className={`theme-${theme} w-[500px] max-h-[80%] sm:w-[90%] sm:max-w-full rounded-xl bg-menu border-2 border-text text-text text-2xl`} >
                <DialogHeader>
                    <DialogTitle>
                        <h1 className="mr-4 text-[35px] text-text">
                            Word Count
                        </h1>
                    </DialogTitle>
                </DialogHeader>
                <WordCountContent />
            </DialogContent>
        </Dialog>
    );
};

export default WordCountPopup;
