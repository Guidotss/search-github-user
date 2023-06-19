"use client"
import { createContext } from 'react';

interface UiContextProps {
    theme: string;
    setTheme: (theme: string) => void;
}

export const UiContext = createContext({} as UiContextProps);