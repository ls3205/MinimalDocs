'use client'

import React from "react";

import { Themes } from "@components/themes/themes";

import { useTheme, useThemeRollback } from "@components/context/ThemeContext";

export const ThemeSelectorList: React.FC = ({ ...props }) => {
    const { theme, setTheme } = useTheme();
    const { themeRollback, setThemeRollback } = useThemeRollback();

    return (
        <ul>
            {Object.entries(Themes).map(([key, value]) => {
                return (
                    <li
                        className="flex flex-row group w-[calc(100%-1rem)] m-2 mt-0 mb-0 p-2 pt-3 pb-3 rounded-lg hover:bg-highlight transition-all duration-300 active:transition-none active:bg-subtext"
                        onClick={() => {
                            setTheme(key);
                            setThemeRollback(key);
                        }}
                        onMouseOver={() => {
                            setTheme(key);
                        }}
                        onMouseLeave={() => setTheme(themeRollback)}
                        key={key}
                    >
                        <span className="text-lg text-text">{key}</span>
                        <span className={`theme-${key} mr-8 pr-2 right-0 absolute`}>
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
    );
};
