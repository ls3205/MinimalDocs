"use client";

import React, { useState } from "react";

// import { Themes } from "@components/themes/themes";

import { useTheme, useThemeRollback } from "@components/context/ThemeContext";
import { usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Skeleton } from "./Skeleton";

export const ThemeSelectorList: React.FC = ({ ...props }) => {
    const { theme, setTheme } = useTheme();
    const { themeRollback, setThemeRollback } = useThemeRollback();

    const [Themes, SetThemes] = useState<object>({});

    const { isLoading, error, data } = useQuery({
        queryKey: ["Themes"],
        queryFn: async () => {
            const { data } = await axios.get(
                `${window.location.href}/api/themes`
            );
            return data;
        },
    });

    if (isLoading) {
        return (
            <ul>
                <li className="w-[calc(100%-1rem)] h-[52px] m-2 mt-0 mb-0 p-2 pt-3 pb-3 rounded-lg">
                    <Skeleton className="w-full h-full bg-muted/70" />
                </li>
                <li className="w-[calc(100%-1rem)] h-[52px] m-2 mt-0 mb-0 p-2 pt-3 pb-3 rounded-lg">
                    <Skeleton className="w-full h-full bg-muted/70" />
                </li>
                <li className="w-[calc(100%-1rem)] h-[52px] m-2 mt-0 mb-0 p-2 pt-3 pb-3 rounded-lg">
                    <Skeleton className="w-full h-full bg-muted/70" />
                </li>
                <li className="w-[calc(100%-1rem)] h-[52px] m-2 mt-0 mb-0 p-2 pt-3 pb-3 rounded-lg">
                    <Skeleton className="w-full h-full bg-muted/70" />
                </li>
                <li className="w-[calc(100%-1rem)] h-[52px] m-2 mt-0 mb-0 p-2 pt-3 pb-3 rounded-lg">
                    <Skeleton className="w-full h-full bg-muted/70" />
                </li>
                <li className="w-[calc(100%-1rem)] h-[52px] m-2 mt-0 mb-0 p-2 pt-3 pb-3 rounded-lg">
                    <Skeleton className="w-full h-full bg-muted/70" />
                </li>
                <li className="w-[calc(100%-1rem)] h-[52px] m-2 mt-0 mb-0 p-2 pt-3 pb-3 rounded-lg">
                    <Skeleton className="w-full h-full bg-muted/70" />
                </li>
            </ul>
        );
    }

    if (error) {
        return (
            <div className="relative left-1/2 -translate-x-1/2 w-[calc(100%-1rem)] h-fit m-2 mt-0 mb-0 p-2 pt-3 pb-3 rounded-lg">
                <p className="text-center text-red-500">
                    An Error Occurred While Retrieving Themes, Please Try Again
                </p>
            </div>
        );
    }

    return (
        <ul>
            {Object.entries(data).map(([key, value]) => {
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
                        <span
                            className={`theme-${key} mr-8 pr-2 right-0 absolute`}
                        >
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
