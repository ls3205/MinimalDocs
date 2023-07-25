import { useEffect, useState, useRef } from "react";
import ThemeContext from "./components/ThemeContext";
import "./index.css";

import CustomTextArea from "./components/CustomTextArea/CustomTextArea";
import Dropdown from "./components/Dropdown/Dropdown";
import Popup from "./components/Popup/Popup";
import { LogoSVG, MainSVG, MobileSVG } from "./components/LogoSVG/LogoSVG";

import { createCSSSelector } from "./scripts/createCSSSelector";
import { copyText } from "./scripts/copyText";
import { clearText } from "./scripts/clearText";
import { downloadFile } from "./scripts/downloadFile"
import { uploadFile } from "./scripts/uploadFile";

import { Themes } from "./components/Themes/Themes";

function App() {
    const [theme, setTheme] = useState();
    const themeContextValue = { theme, setTheme };

	const [themeRollback, setThemeRollback] = useState();

    const [desktopDropdown, setDesktopDropdown] = useState(false);

    const [mobileMainDropdown, setMobileMainDropdown] = useState(false);
    const [mobileSaveDropdown, setMobileSaveDropdown] = useState(false);

    const [themePopup, setThemePopup] = useState(false);
    const [docInfoPopup, setDocInfoPopup] = useState(false);

    const desktopDropdownButtonRef = useRef(null);
    const mobileMainDropdownRef = useRef(null);
    const mobileFileSaveDropdownRef = useRef(null);

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
            window.localStorage.setItem("theme", "flashbang");
            setTheme("flashbang");
			setThemeRollback("flashbang")
        }
    }, []);

    useEffect(() => {
        theme && window.localStorage.setItem("theme", theme);
    }, [theme]);

    useEffect(() => {
        const textfield = document.getElementById("textfield");
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
        <ThemeContext.Provider value={themeContextValue}>
            <div
                className={[
                    `app w-screen h-screen bg-bg text-text min-w-[300px] transition-all duration-300`,
                    `theme-${theme}`,
                ]
                    .filter(Boolean)
                    .join(" ")}
            >
                <div className="absolute left-[7.5%] top-[7.5%] sm:hidden">
                    <button
                        onClick={() => setDesktopDropdown(!desktopDropdown)}
                        ref={desktopDropdownButtonRef}
                    >
                        {/* <LogoSVG 
                            className={`group sm:hidden cursor-pointer w-[100px] h-[100px] text-subtext border-2 ${desktopDropdown ? "border-accent rounded-2xl": "border-subtext rounded-xl"} transition-all duration-300 hover:rounded-2xl hover:border-text active:border-accent`} 
                            bg='bg'
                            primary='subtext'
                            hoverPrimary='text'
                            active='accent'
                            activeCheck={desktopDropdown}
                        /> */}
                        <MainSVG activeCheck={desktopDropdown} />
                    </button>
                    <Dropdown
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
                    </Dropdown>
                </div>
                <div className="absolute right-[25%] bottom-[92%]">
                    <button className="editor-button" onClick={() => setDocInfoPopup(!docInfoPopup)}>
                        <span className="material-icons-outlined">
                            subject
                        </span>
                        <span className="relative text-2xl m-1 -top-[5px]">
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
                    <button className="editor-button" onClick={() => {clearText(); setWordCount(0)}}>
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
                            onClick={() =>
                                setMobileMainDropdown(!mobileMainDropdown)
                            }
                            ref={mobileMainDropdownRef}
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
                            <Dropdown
                                trigger={mobileMainDropdown}
                                setTrigger={setMobileMainDropdown}
                                anchor="bottom-mobile"
                                buttonRef={mobileMainDropdownRef}
                            >
                                <ul className="p-3">
                                    <li className="flex cursor-pointer flex-row m-2 mt-2 mb-2 p-2 rounded-lg hover:bg-accent transition-all duration-300" onClick={() => setThemePopup(!themePopup)}>
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
                            </Dropdown>
                        </li>
                        <li className="w-[20%] align-middle justify-center">
                            <button
                                className="footer-button"
                                onClick={() =>
                                    setMobileSaveDropdown(!mobileSaveDropdown)
                                }
                                ref={mobileFileSaveDropdownRef}
                            >
                                <span className="relative material-icons-outlined text-[4vh]">
                                    save
                                </span>
                            </button>
                            <Dropdown
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
                            </Dropdown>
                        </li>
                        <li className="w-[20%] align-middle justify-center">
                            <button className="footer-button" onClick={() => setDocInfoPopup(!docInfoPopup)}>
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
                                onClick={() => {clearText(); setWordCount(0)}}
                            >
                                <span className="material-icons-outlined text-[4vh]">
                                    {" "}
                                    backspace{" "}
                                </span>
                            </button>
                        </li>
                    </ul>
                </footer>

                <Popup
                    trigger={themePopup}
                    setTrigger={setThemePopup}
                    width="full"
                >
                    <ul className="w-[inherit] h-full max-h-[inherit] sm:w-full">
                        <li className="flex flex-row border-b-2 border-accent">
                            <p className="text-2xl p-3">Select Theme</p>
                            <button
                                onClick={() => setThemePopup(false)}
                                className="right-0 absolute m-2 mr-4 w-[35px] h-[35px] border-2 border-subtext rounded-xl hover:border-text hover:rounded-2xl group transition-all duration-300"
                            >
                                <span className="material-icons-outlined text-2xl relative  text-subtext group-hover:text-text transition-all duration-300">
                                    close
                                </span>
                            </button>
                        </li>
                        <li className="mt-2">
                            <ul>
                                {Object.entries(Themes).map(([key, value]) => {
                                    return (
										<li className="flex flex-row group w-[calc(100%-1rem)] m-2 mt-0 mb-0 p-2 pt-3 pb-3 rounded-lg hover:bg-accent transition-all duration-300" onClick={() => {setTheme(key); setThemeRollback(key); setThemePopup(false)}} onMouseOver={() => setTheme(key)} onMouseLeave={() => setTheme(themeRollback)} key={key}>
											<span className="text-lg">{key}</span>
											<span className={`theme-${key} mr-5 right-0 absolute`}>
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
                        </li>
                    </ul>
                </Popup>

                <Popup
                    trigger={docInfoPopup}
                    setTrigger={setDocInfoPopup}
                    width='full'
                >
                    <ul className="w-[inherit] h-full max-h-[inherit] sm:w-full">
                        <li className="flex flex-row">
                            <h1 className="mr-4 text-[35px]">under construction... 🚧👷‍♂️</h1>
                            <button
                                onClick={() => setDocInfoPopup(false)}
                                className="right-0 absolute m-2 mr-4 w-[35px] h-[35px] border-2 border-subtext rounded-xl hover:border-text hover:rounded-2xl group transition-all duration-300"
                            >
                                <span className="material-icons-outlined text-2xl relative  text-subtext group-hover:text-text transition-all duration-300">
                                    close
                                </span>
                            </button>
                        </li>
                    </ul>
                </Popup>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
