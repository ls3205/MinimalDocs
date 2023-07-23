import React, { useEffect, useContext } from "react";
import ThemeContext from "../ThemeContext";

function CustomTextArea() {
    const { theme, setTheme } = useContext(ThemeContext);

    useEffect(() => {
        const textfield = document.getElementById('textfield');

        const handleIndent = (e) => {
            if (e.key === "Tab") {
                e.stopPropagation();
                e.preventDefault();

                textfield.setRangeText(
                    "\t",
                    textfield.selectionStart,
                    textfield.selectionEnd,
                    "end"
                );
            }
        };

        textfield.addEventListener("keydown", handleIndent);

        return () => {
            textfield.removeEventListener("keydown", handleIndent);
        };
    }, []);

    return (
        <div
            className={`flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4/5 w-1/2 border-[0.25px] border-accent rounded-md transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-accent sm:top-0 sm:left-0 sm:translate-x-0 sm:translate-y-0 sm:border-none sm:w-full sm:h-[95%] sm:shadow-none sm:hover:shadow-none`}
        >
            <ul className="flex flex-col w-full h-full">
                <li>
                    <textarea
                        className={`relative outline-none border-b-[1px] border-accent w-[95%] h-[50px] top-[2.5%] left-[2.5%] align-middle text-[30px] resize-none bg-bg text-text caret-subtext placeholder-subtext`}
                        id="titlefield"
                        placeholder={`  enter title...`}
                    />
                </li>
                <li className="w-full h-full">
                    <textarea
                        className={`relative border-none outline-none w-[95%] h-[99%] left-[2.5%] top-[1%] text-[20px] resize-none pr-2.5 bg-bg text-text caret-subtext placeholder-subtext`}
                        id="textfield"
                        placeholder="   start typing..."
                    />
                </li>
            </ul>
        </div>
    );
}

export default CustomTextArea;
