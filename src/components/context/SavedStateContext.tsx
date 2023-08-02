'use client'

import React, { createContext, useContext, useState } from "react"

type SavedStateContextProps = {
    children?: React.ReactNode
}

type SavedState = {
    state: "saved" | "saving" | "not saved"
}

type SavedStateContextType = {
    saved: SavedState;
    setSaved: React.Dispatch<React.SetStateAction<SavedState>>;
}


const SavedStateContext = createContext<SavedStateContextType>({saved: {state: "saved"}, setSaved: (() => {}) as React.Dispatch<React.SetStateAction<SavedState>>});

export const useSaved = () => {
    return useContext(SavedStateContext);
}

export const SavedProvider: React.FC<SavedStateContextProps> = ({children, ...props}) => {
    const [saved, setSaved] = useState<SavedState>({state: "saved"});

    return (
        <SavedStateContext.Provider value={{saved, setSaved}}>
            {
                children
            }
        </SavedStateContext.Provider>
    )
}