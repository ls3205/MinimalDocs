import React from "react";

import {
    CustomTextArea,
    DesktopSVG,
    MobileSVG,
    ThemeSelectorList
} from "@minimaldocs/ui";

import {
    ClearTextButton,
    FileDownloadButton,
    FileUploadButton,
    CopyTextButton,
    CacheTextButton
} from "@minimaldocs/ui"

import {
    Dropdown,
    DropdownTrigger,
    DropdownItems,
    DropdownItem,
    DropdownItemIcon,
    DropdownDivider
} from "@minimaldocs/ui"

import {
    Popup,
    PopupTrigger,
    PopupRemoteTrigger,
    PopupContent,
    PopupHeader,
    PopupExitButton
} from "@minimaldocs/ui"

export default function Home() {

    return (
        <div className='app w-screen h-screen bg-bg text-text min-w-[300px] transition-all duration-300'>
            <Dropdown className="absolute left-[7.5%] top-[7.5%] sm:hidden">
                <DropdownTrigger bypassButton={false}>
                    <DesktopSVG />
                </DropdownTrigger>
                <DropdownItems anchor='bm' className='bg-menu border-[1px] rounded-lg'>
                    <DropdownItem className='m-2 mt-2 mb-2 p-2 rounded-lg hover:bg-highlight transition-all duration-300'>
                        <PopupRemoteTrigger id='theme-popup-remote' triggerId='theme-popup'>
                            <DropdownItemIcon icon='dark_mode' />
                            <span className="mr-1 text-[20px]">
                                Theme
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
                <FileUploadButton className="editor-button" />
                <FileDownloadButton className="editor-button" />
                <CacheTextButton className="editor-button" />
            </div>
            <div className="absolute top-[92%] right-[25%]">
                <CopyTextButton className="editor-button" />
                <ClearTextButton className="editor-button" />
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
                                            Theme
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
                                    <FileUploadButton className="w-full" iconClass="mr-1 text-[20px] top-[5px] relative" title="Upload" />
                                </DropdownItem>
                                <DropdownDivider className='!bg-text relative w-[90%] left-[5%]' />
                                <DropdownItem className="flex flex-row cursor-pointer m-2 mt-2 mb-2 p-2 rounded-lg hover:bg-highlight transition-all duration-300">
                                    <FileDownloadButton className="w-full" iconClass="mr-1 text-[20px] top-[5px] relative" title="Download" />
                                </DropdownItem>
                                <DropdownDivider className='!bg-text relative w-[90%] left-[5%]' />
                                <DropdownItem className="flex flex-row cursor-pointer m-2 mt-2 mb-2 p-2 rounded-lg hover:bg-highlight transition-all duration-300">
                                    <CacheTextButton className="w-full" iconClass="mr-1 text-[20px] top-[5px] relative" title="Save" />
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
                        <CopyTextButton className="footer-button" iconClass="text-[4vh]" />
                    </li>
                    <li className="w-[20%] align-middle justify-center">
                        <ClearTextButton className="footer-button" iconClass="text-[4vh]" />
                    </li>
                </ul>
            </footer>
        
            <Popup id='theme-popup'>
                <PopupTrigger display={false} id='theme-popup' />
                <PopupContent className={` w-[50%] max-w-[50%] max-h-[80%] sm:w-[90%] sm:max-w-full rounded-xl bg-menu border-2 border-text`}>
                    <PopupHeader>
                        <h1 className="mr-4 text-[35px] text-text">Select Theme</h1>
                        <PopupExitButton className='!absolute !right-0' />
                    </PopupHeader>
                    <DropdownDivider className='relative w-[95%] left-[2.5%] mt-2 mb-2 bg-text' />
                    <ThemeSelectorList />
                </PopupContent>
            </Popup>

            <Popup id='doc-info'>
                <PopupTrigger display={false} id='doc-info' />
                <PopupContent className={` w-[30%] max-w-[50%] max-h-[80%] sm:w-[90%] sm:max-w-full rounded-xl bg-menu border-2 border-text`}>
                    <PopupHeader>
                        <h1 className="mr-4 text-[35px] text-text">under construction... 🚧👷‍♂️</h1>
                        <PopupExitButton />
                    </PopupHeader>
                </PopupContent>
            </Popup>

            <Popup id='doc-info-mobile'>
                <PopupTrigger display={false} id='doc-info-mobile' />
                <PopupContent className={` w-[30%] max-w-[50%] max-h-[80%] sm:w-[90%] sm:max-w-full rounded-xl bg-menu border-2 border-text`}>
                    <PopupHeader>
                        <h1 className="mr-4 text-[35px] text-text">under construction... 🚧👷‍♂️</h1>
                        <PopupExitButton />
                    </PopupHeader>
                </PopupContent>
            </Popup>
        </div>
    );
}
