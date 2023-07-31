'use client'

import React, { useState, useEffect, createContext, useContext } from "react";

const getLocalStorageTheme = () => {
    return window.localStorage.getItem('theme') ? window.localStorage.getItem('theme') : '';
}

const ThemeContext = createContext({theme: getLocalStorageTheme() , setTheme: (newTheme) => {}});

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
