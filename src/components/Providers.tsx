"use client"

import {
    ThemeProvider,
    SettingsProvider,
    SavedProvider,
} from "@minimaldocs/context";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
const queryClient = new QueryClient();

import React from "react";
import { Toaster } from "./ui/Toaster";

interface ProvidersProps {
    children?: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <SettingsProvider>
                <ThemeProvider>
                    <SavedProvider>
                        {children}
                        <Toaster />
                    </SavedProvider>
                </ThemeProvider>
            </SettingsProvider>
        </QueryClientProvider>
    );
};

export default Providers;
