'use client'

import React, { useState, useEffect, createContext, useContext } from "react";

const ThemeContext = createContext({theme: 'flashbang' , setTheme: (newTheme) => {}});

const ThemeRollbackContext = createContext({themeRollback: 'flashbang', setThemeRollback: (newTheme) => {}});

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
        if (storedTheme !== null) {
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
