'use client'

import React, { useState, useEffect, createContext, useContext } from "react";

type ThemeProviderProps = {
    children?: React.ReactNode
}

type ThemeContextType = {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>
}

type ThemeRollbackContextType = {
    themeRollback: string;
    setThemeRollback: React.Dispatch<React.SetStateAction<string>>
}

const ThemeContext = createContext<ThemeContextType>({theme: '' , setTheme: (() => {}) as React.Dispatch<React.SetStateAction<string>>});

const ThemeRollbackContext = createContext<ThemeRollbackContextType>({themeRollback: '', setThemeRollback: (() => {}) as React.Dispatch<React.SetStateAction<string>>});

export const useTheme = (): ThemeContextType => {
    return useContext(ThemeContext);
}

export const useThemeRollback = () => {
    return useContext(ThemeRollbackContext);
}

export const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<string>('')
    const [themeRollback, setThemeRollback] = useState<string>('')

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
