'use client'

import React, {useEffect, useState} from "react";

import {
    CustomTextArea,
    DesktopSVG,
    MobileSVG
} from "@components/ui"

import {
    clearText,
    copyText,
    createCSSSelector,
    downloadFile,
    uploadFile
} from "@scripts";

import { Themes } from "@components/themes/themes";

import {
    ThemeProvider,
    useTheme, 
    useThemeRollback, 
} from "@/components/context/ThemeContext";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

export default function Home() {
    const {theme, setTheme} = useTheme();
    const {themeRollback, setThemeRollback} = useThemeRollback();

    const [wordCount, setWordCount] = useState(0);

    useEffect(() => {
		Object.entries(Themes).map(([key, value]) => {
			var tempCSSString = '';
			Object.entries(value).map(([subkey, subvalue]) => {
				tempCSSString += `${subkey}: ${subvalue};`
			})
			createCSSSelector(`.theme-${key}`, tempCSSString)
		})
	}, [])

    useEffect(() => {
        const storedTheme = window.localStorage.getItem("theme");
        if (storedTheme !== (undefined || null)) {
            setTheme(storedTheme);
			setThemeRollback(storedTheme);
        } else {
            window.localStorage.setItem("theme", "mashu");
            setTheme("mashu");
			setThemeRollback("mashu")
        }
    }, []);

    useEffect(() => {
        theme && window.localStorage.setItem("theme", theme);
    }, [theme]);

    useEffect(() => {
        const textfield = document.getElementById("textfield") as HTMLTextAreaElement;
        const countWords = () => {
            let res = [];
            let str = textfield.value
                .replace(/[\t\n\r\.\?\!]/gm, " ")
                .split(" ");
            str.map((s) => {
                let trimStr = s.trim();
                if (trimStr.length > 0) {
                    res.push(trimStr);
                }
            });
            setWordCount(res.length);
        };
        textfield.addEventListener("input", countWords);
        return () => textfield.removeEventListener("input", countWords);
    }, []);

    return (
        //@ts-ignore
        <ThemeProvider>
            <div
                className={[
                    `app w-screen h-screen bg-bg text-text min-w-[300px] transition-all duration-300`,
                    `theme-${theme}`,
                ]
                    .filter(Boolean)
                    .join(" ")}
            >
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className="absolute left-[7.5%] top-[7.5%] sm:hidden">
                            <button>
                                <DesktopSVG activeCheck={null} />
                            </button>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className={`sm:hidden theme-${theme} bg-menu border-[1px] rounded-lg`}>
                        <DropdownMenuItem
                            className="flex cursor-pointer text-text hover:text-text flex-row m-2 mt-2 mb-2 p-2 rounded-lg hover:bg-accent transition-all duration-300"
                            // onClick={() => setThemePopup(!themePopup)}
                        >
                            <span className="material-icons-outlined mr-1 text-[20px] relative">
                                dark_mode
                            </span>
                            <span className="mr-1 text-[20px]">
                                {theme}
                            </span>
                            <span className="mr-1">
                                <div>
                                    <ul className="flex flex-row bg-bg rounded-lg">
                                        <li className="relative rounded-lg w-[20px] h-[20px] m-1 bg-text"></li>
                                        <li className="relative rounded-lg w-[20px] h-[20px] m-1 bg-subtext"></li>
                                        <li className="relative rounded-lg w-[20px] h-[20px] m-1 bg-menu"></li>
                                    </ul>
                                </div>
                            </span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator className="w-[90%] relative left-[5%]" />
                        <DropdownMenuItem className="flex flex-row text-text hover:text-text bg-menu cursor-pointer m-2 mt-2 mb-2 p-2 rounded-lg hover:bg-accent transition-all duration-300">
                            <span className="material-icons-outlined mr-1 text-[20px] relative">
                                info
                            </span>
                            <span className="text-[20px]">About</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <div className="absolute left-[7.5%] top-[7.5%] sm:hidden">
                    {/* <button
                        // onClick={() => setDesktopDropdown(!desktopDropdown)}
                        // ref={desktopDropdownButtonRef}
                    >
                        <DesktopSVG activeCheck={null} />
                    </button> */}
                    {/* <Dropdown
                        trigger={desktopDropdown}
                        setTrigger={setDesktopDropdown}
                        anchor="bm"
                        buttonRef={desktopDropdownButtonRef}
                    >
                        <ul className="p-3">
                            <li
                                className="flex cursor-pointer flex-row m-2 mt-2 mb-2 p-2 rounded-lg hover:bg-accent transition-all duration-300"
                                onClick={() => setThemePopup(!themePopup)}
                            >
                                <span className="material-icons-outlined mr-1 text-[20px] top-[5px] relative">
                                    dark_mode
                                </span>
                                <span className="mr-1 text-[20px]">
                                    {theme}
                                </span>
                                <span className="mr-1">
                                    <div>
                                        <ul className="flex flex-row bg-bg rounded-lg">
                                            <li className="relative rounded-lg w-[20px] h-[20px] m-1 bg-text"></li>
                                            <li className="relative rounded-lg w-[20px] h-[20px] m-1 bg-subtext"></li>
                                            <li className="relative rounded-lg w-[20px] h-[20px] m-1 bg-menu"></li>
                                        </ul>
                                    </div>
                                </span>
                            </li>
                            <li className="flex flex-row cursor-pointer m-2 mt-2 mb-2 p-2 rounded-lg hover:bg-accent transition-all duration-300">
                                <span className="material-icons-outlined mr-1 text-[20px] top-[5px] relative">
                                    info
                                </span>
                                <span className="text-[20px]">About</span>
                            </li>
                        </ul>
                    </Dropdown> */}
                </div>
                <div className="absolute right-[25%] bottom-[92%]">
                    <button
                        className="editor-button"
                        // onClick={() => setDocInfoPopup(!docInfoPopup)}
                    >
                        <span className="material-icons-outlined">subject</span>
                        <span className="relative text-2xl m-1 -top-[3px]">
                            {wordCount}
                        </span>
                    </button>
                </div>
                <CustomTextArea />
                <div className="absolute top-[92%] left-[25%]">
                    <button className="editor-button">
                        <label className="inline-block w-full h-full">
                            <span className="material-icons-outlined">
                                {" "}
                                file_upload{" "}
                            </span>
                            <input
                                type="file"
                                accept=".txt"
                                className="hidden"
                                id="upload"
                                onChange={uploadFile}
                            />
                        </label>
                    </button>
                    <button className="editor-button">
                        <span
                            className="material-icons-outlined"
                            onClick={downloadFile}
                        >
                            {" "}
                            file_download{" "}
                        </span>
                    </button>
                </div>
                <div className="absolute top-[92%] right-[25%]">
                    <button className="editor-button" onClick={copyText}>
                        <span className="material-icons-outlined">
                            {" "}
                            content_copy{" "}
                        </span>
                    </button>
                    <button
                        className="editor-button"
                        onClick={() => {
                            clearText();
                            setWordCount(0);
                        }}
                    >
                        <span className="material-icons-outlined">
                            {" "}
                            backspace{" "}
                        </span>
                    </button>
                </div>
                <footer className="hidden absolute border-t-[1px] border-accent bottom-0 w-full h-[8vh] bg-menu sm:inline-block">
                    <ul className="flex flex-row w-full h-full">
                        <li
                            className="w-[20%] align-middle justify-center group hover:bg-text transition-all duration-300"
                            // onClick={() =>
                            //     setMobileMainDropdown(!mobileMainDropdown)
                            // }
                            // ref={mobileMainDropdownRef}
                        >
                            {/* <button className="footer-button" > */}
                            {/* <LogoSVG 
                                className="hidden relative -translate-x-1/2 left-1/2 sm:block cursor-pointer h-full text-subtext transition-all duration-300"
                                bg='menu'
                                hoverBG='text'
                                primary='text'
                                hoverPrimary='accent'
                            /> */}
                            <MobileSVG />
                            {/* </button> */}
                            {/* <Dropdown
                                trigger={mobileMainDropdown}
                                setTrigger={setMobileMainDropdown}
                                anchor="bottom-mobile"
                                buttonRef={mobileMainDropdownRef}
                            >
                                <ul className="p-3">
                                    <li
                                        className="flex cursor-pointer flex-row m-2 mt-2 mb-2 p-2 rounded-lg hover:bg-accent transition-all duration-300"
                                        onClick={() =>
                                            setThemePopup(!themePopup)
                                        }
                                    >
                                        <span className="material-icons-outlined mr-1 text-[20px] top-[5px] relative">
                                            dark_mode
                                        </span>
                                        <span className="mr-1 text-[20px]">
                                            {theme}
                                        </span>
                                        <span className="mr-1">
                                            <div>
                                                <ul className="flex flex-row bg-bg rounded-lg">
                                                    <li className="relative rounded-lg w-[20px] h-[20px] m-1 bg-text"></li>
                                                    <li className="relative rounded-lg w-[20px] h-[20px] m-1 bg-subtext"></li>
                                                    <li className="relative rounded-lg w-[20px] h-[20px] m-1 bg-menu"></li>
                                                </ul>
                                            </div>
                                        </span>
                                    </li>
                                    <li className="flex flex-row cursor-pointer m-2 mt-2 mb-2 p-2 rounded-lg hover:bg-accent transition-all duration-300">
                                        <span className="material-icons-outlined mr-1 text-[20px] top-[5px] relative">
                                            info
                                        </span>
                                        <span className="text-[20px]">
                                            About
                                        </span>
                                    </li>
                                </ul>
                            </Dropdown> */}
                        </li>
                        <li className="w-[20%] align-middle justify-center">
                            <button
                                className="footer-button"
                                // onClick={() =>
                                //     setMobileSaveDropdown(!mobileSaveDropdown)
                                // }
                                // ref={mobileFileSaveDropdownRef}
                            >
                                <span className="relative material-icons-outlined text-[4vh]">
                                    save
                                </span>
                            </button>
                            {/* <Dropdown
                                trigger={mobileSaveDropdown}
                                setTrigger={setMobileSaveDropdown}
                                anchor="bottom-mobile"
                                buttonRef={mobileFileSaveDropdownRef}
                            >
                                <ul className="p-3">
                                    <li className="flex flex-row cursor-pointer m-2 mt-2 mb-2 p-2 rounded-lg hover:bg-accent transition-all duration-300">
                                        <label className="inline-block w-full h-full">
                                            <span className="material-icons-outlined mr-1 text-[20px] top-[5px] relative">
                                                {" "}
                                                file_upload{" "}
                                            </span>
                                            <input
                                                type="file"
                                                accept=".txt"
                                                className="hidden"
                                                id="upload"
                                                onChange={uploadFile}
                                            />
                                            <span className="text-[20px]">
                                                Upload
                                            </span>
                                        </label>
                                    </li>
                                    <li className="flex flex-row cursor-pointer m-2 mt-2 mb-2 p-2 rounded-lg hover:bg-accent transition-all duration-300">
                                        <span
                                            className="material-icons-outlined mr-1 text-[20px] top-[5px] relative"
                                            onClick={downloadFile}
                                        >
                                            {" "}
                                            file_download{" "}
                                        </span>
                                        <span className="text-[20px]">
                                            Download
                                        </span>
                                    </li>
                                </ul>
                            </Dropdown> */}
                        </li>
                        <li className="w-[20%] align-middle justify-center">
                            <button
                                className="footer-button"
                                // onClick={() => setDocInfoPopup(!docInfoPopup)}
                            >
                                <span className="material-icons-outlined text-[4vh]">
                                    subject
                                </span>
                            </button>
                        </li>
                        <li className="w-[20%] align-middle justify-center">
                            <button
                                className="footer-button"
                                onClick={copyText}
                            >
                                <span className="material-icons-outlined text-[4vh]">
                                    {" "}
                                    content_copy{" "}
                                </span>
                            </button>
                        </li>
                        <li className="w-[20%] align-middle justify-center">
                            <button
                                className="footer-button"
                                onClick={() => {
                                    clearText();
                                    setWordCount(0);
                                }}
                            >
                                <span className="material-icons-outlined text-[4vh]">
                                    {" "}
                                    backspace{" "}
                                </span>
                            </button>
                        </li>
                    </ul>
                </footer>
            </div>
        </ThemeProvider>
    );
}
