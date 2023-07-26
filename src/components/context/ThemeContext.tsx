'use client'

import React, { useState, createContext, useContext } from "react";;

const ThemeContext = createContext({theme: 'mashu', setTheme: (newTheme) => {}});

const ThemeRollbackContext = createContext({themeRollback: 'mashu', setThemeRollback: (newTheme) => {}});

export function useTheme() {
    return useContext(ThemeContext);
}

export function useThemeRollback() {
    return useContext(ThemeRollbackContext);
}

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('')
    const themeContextValues = {theme, setTheme};
    const [themeRollback, setThemeRollback] = useState()
    const themeRollbackContextValues = {themeRollback, setThemeRollback}

    return (
        //@ts-ignore
        <ThemeContext.Provider value={themeContextValues}>
            {/*@ts-ignore*/}
            <ThemeRollbackContext.Provider value={themeRollbackContextValues}>
                {children}
            </ThemeRollbackContext.Provider>
        </ThemeContext.Provider>
    )
}
