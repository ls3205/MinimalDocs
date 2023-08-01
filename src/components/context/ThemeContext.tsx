'use client'

import React, { useState, useEffect, createContext, useContext } from "react";

type ThemeProviderProps = {
    children: React.ReactNode
}

const ThemeContext = createContext({theme: 'flashbang' , setTheme: (newTheme: string) => {}});

const ThemeRollbackContext = createContext({themeRollback: 'flashbang', setThemeRollback: (newTheme: string) => {}});

export const useTheme = () => {
    return useContext(ThemeContext);
}

export const useThemeRollback = () => {
    return useContext(ThemeRollbackContext);
}

export const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState('')
    const [themeRollback, setThemeRollback] = useState('')

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
