'use client'

import React, { useState, useEffect, createContext, useContext } from "react";

import {
    createCSSSelector
} from "@scripts"

import { Themes } from "../themes/themes";

const ThemeContext = createContext({theme: '', setTheme: (newTheme) => {}});

const ThemeRollbackContext = createContext({themeRollback: '', setThemeRollback: (newTheme) => {}});

export const useTheme = () => {
    return useContext(ThemeContext);
}

export const useThemeRollback = () => {
    return useContext(ThemeRollbackContext);
}

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(undefined)
    const [themeRollback, setThemeRollback] = useState(undefined)

    useEffect(() => {
        Object.entries(Themes).map(([key, value]) => {
            var tempCSSString = "";
            Object.entries(value).map(([subkey, subvalue]) => {
                tempCSSString += `${subkey}: ${subvalue};`;
            });
            createCSSSelector(`.theme-${key}`, tempCSSString);
        });
    }, []);

    useEffect(() => {
        const storedTheme = window.localStorage.getItem("theme");
        if (storedTheme !== (undefined || null)) {
            setTheme(storedTheme);
            setThemeRollback(storedTheme);
        } else {
            window.localStorage.setItem("theme", "flashbang");
            setTheme("flashbang");
            setThemeRollback("flashbang");
        }
    }, []);

    useEffect(() => {
        theme && window.localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <ThemeRollbackContext.Provider value={{ themeRollback, setThemeRollback }}>
                {children}
            </ThemeRollbackContext.Provider>
        </ThemeContext.Provider>
    )
}
