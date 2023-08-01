"use client"

import React from "react";

import { CustomTextArea, DesktopSVG, MobileSVG } from "@components/ui";

import {
    clearText,
    copyText,
    downloadFile,
    uploadFile,
} from "@scripts";

import { Themes } from "@components/themes/themes";

import {
    useTheme,
    useThemeRollback,
} from "@components/context/ThemeContext";

import {
    Dropdown,
    DropdownTrigger,
    DropdownItems,
    DropdownItem,
    DropdownItemIcon,
    DropdownDivider
} from "@components/ui/Dropdown"

import {
    Popup,
    PopupTrigger,
    PopupRemoteTrigger,
    PopupContent,
    PopupHeader,
    PopupExitButton
} from "@components/ui/Popup"

export default function Home() {
    const { theme, setTheme } = useTheme();
    const { themeRollback, setThemeRollback } = useThemeRollback();

    return (
        <div
            className={[
                `app w-screen h-screen bg-bg text-text min-w-[300px] transition-all duration-300`,
                `${theme ? `theme-${theme}` : 'theme-black'}`,
            ]
                .filter(Boolean)
                .join(" ")}
        >
            <Dropdown className="absolute left-[7.5%] top-[7.5%] sm:hidden">
                <DropdownTrigger bypassButton={false}>
                    <DesktopSVG />
                </DropdownTrigger>
                <DropdownItems anchor='bm' className='bg-menu border-[1px] rounded-lg'>
                    <DropdownItem className='m-2 mt-2 mb-2 p-2 rounded-lg hover:bg-highlight transition-all duration-300'>
                        <PopupRemoteTrigger id='theme-popup-remote' triggerId='theme-popup'>
                            <DropdownItemIcon icon='dark_mode' />
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
                        </PopupRemoteTrigger>
                    </DropdownItem>
                    <DropdownDivider className='!bg-text relative w-[90%] left-[5%]'/>
                    <DropdownItem className='m-2 mt-2 mb-2 p-2 rounded-lg hover:bg-highlight transition-all duration-300'>
                        <DropdownItemIcon icon='info' />
                        <span className="text-[20px]">About</span>
                    </DropdownItem>
                </DropdownItems>
            </Dropdown>
            <div className="absolute right-[25%] bottom-[92%]">
                <PopupRemoteTrigger
                    className="editor-button"
                    id='doc-info-remote'
                    triggerId='doc-info'
                >
                    <span className="material-icons-outlined">subject</span>
                    <span className="relative text-2xl m-1 -top-[3px]" id="word-count-span">
                        0
                    </span>
                </PopupRemoteTrigger>
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
                    }}
                >
                    <span className="material-icons-outlined">
                        {" "}
                        backspace{" "}
                    </span>
                </button>
            </div>
            <footer className="hidden absolute border-t-[1px] border-highlight bottom-0 w-full h-[8vh] bg-menu sm:inline-block">
                <ul className="flex flex-row w-full h-full">
                    <li className="w-[20%]">
                        <Dropdown className="w-full h-full align-middle justify-center group hover:bg-text transition-all duration-300">
                            <DropdownTrigger bypassButton={true}>
                                <MobileSVG />
                            </DropdownTrigger>
                            <DropdownItems anchor="bottom-mobile" className='bg-menu border-[1px] rounded-lg'>
                                <DropdownItem className='m-2 mt-2 mb-2 p-2 rounded-lg hover:bg-highlight transition-all duration-300'>
                                    <PopupRemoteTrigger id='theme-popup-remote' triggerId='theme-popup'>
                                        <DropdownItemIcon icon='dark_mode' />
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
                                    </PopupRemoteTrigger>
                                </DropdownItem>
                                <DropdownDivider className='!bg-text relative w-[90%] left-[5%]'/>
                                <DropdownItem className='m-2 mt-2 mb-2 p-2 rounded-lg hover:bg-highlight transition-all duration-300'>
                                    <DropdownItemIcon icon='info' />
                                    <span className="text-[20px]">About</span>
                                </DropdownItem>
                            </DropdownItems>
                        </Dropdown>
                    </li>
                    <li className="w-[20%]">
                        <Dropdown className='w-full h-full align-middle justify-center group hover:bg-text transition-all duration-300'>
                            <DropdownTrigger className='footer-button'>
                                <span className="relative material-icons-outlined text-[4vh]">
                                    save
                                </span>
                            </DropdownTrigger>
                            <DropdownItems anchor="bottom-mobile" className='bg-menu border-[1px] rounded-lg'>
                                <DropdownItem className="flex flex-row cursor-pointer m-2 mt-2 mb-2 p-2 rounded-lg hover:bg-highlight transition-all duration-300">
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
                                </DropdownItem>
                                <DropdownDivider className='!bg-text relative w-[90%] left-[5%]' />
                                <DropdownItem className="flex flex-row cursor-pointer m-2 mt-2 mb-2 p-2 rounded-lg hover:bg-highlight transition-all duration-300">
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
                                </DropdownItem>
                            </DropdownItems>
                        </Dropdown>
                    </li>
                    <li className="w-[20%] align-middle justify-center">
                        <PopupRemoteTrigger
                            className="footer-button"
                            id='doc-info-mobile-remote'
                            triggerId='doc-info-mobile'
                        >
                            <span className="material-icons-outlined text-[4vh]">
                                subject
                            </span>
                        </PopupRemoteTrigger>
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
        
            <Popup id='theme-popup'>
                <PopupTrigger display={false} id='theme-popup' />
                <PopupContent className={`theme-${theme} w-[50%] max-w-[50%] max-h-[80%] sm:w-[90%] sm:max-w-full rounded-xl bg-menu border-2 border-text`}>
                    <PopupHeader>
                        <h1 className="mr-4 text-[35px] text-text">Select Theme</h1>
                        <PopupExitButton className='!absolute !right-0' />
                    </PopupHeader>
                    <DropdownDivider className='relative w-[95%] left-[2.5%] mt-2 mb-2 bg-text' />
                    <ul>
                        {Object.entries(Themes).map(([key, value]) => {
                            return (
		    					<li className="flex flex-row group w-[calc(100%-1rem)] m-2 mt-0 mb-0 p-2 pt-3 pb-3 rounded-lg hover:bg-highlight transition-all duration-300 active:transition-none active:bg-subtext" onClick={() => {setTheme(key); setThemeRollback(key)}} onMouseOver={() => {setTheme(key)}} onMouseLeave={() => setTheme(themeRollback)} key={key}>
		    						<span className="text-lg text-text">{key}</span>
		    						<span className={`theme-${key} mr-8 right-0 absolute`}>
                            			<div>
                                			<ul className="flex flex-row bg-bg rounded-lg">
                                    			<li className="relative rounded-lg w-[20px] h-[20px] m-1 bg-text"></li>
                                    			<li className="relative rounded-lg w-[20px] h-[20px] m-1 bg-subtext"></li>
                                    			<li className="relative rounded-lg w-[20px] h-[20px] m-1 bg-menu"></li>
                                			</ul>
                            			</div>
                            		</span>	
		    					</li>
		    				);
                        })}
                    </ul>
                </PopupContent>
            </Popup>

            <Popup id='doc-info'>
                <PopupTrigger display={false} id='doc-info' />
                <PopupContent className={`theme-${theme} w-[30%] max-w-[50%] max-h-[80%] sm:w-[90%] sm:max-w-full rounded-xl bg-menu border-2 border-text`}>
                    <PopupHeader>
                        <h1 className="mr-4 text-[35px] text-text">under construction... 🚧👷‍♂️</h1>
                        <PopupExitButton />
                    </PopupHeader>
                </PopupContent>
            </Popup>

            <Popup id='doc-info-mobile'>
                <PopupTrigger display={false} id='doc-info-mobile' />
                <PopupContent className={`theme-${theme} w-[30%] max-w-[50%] max-h-[80%] sm:w-[90%] sm:max-w-full rounded-xl bg-menu border-2 border-text`}>
                    <PopupHeader>
                        <h1 className="mr-4 text-[35px] text-text">under construction... 🚧👷‍♂️</h1>
                        <PopupExitButton />
                    </PopupHeader>
                </PopupContent>
            </Popup>
        </div>
    );
}
