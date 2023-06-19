"use client"
import { FC, useEffect, useReducer } from 'react'; 
import cookies from 'js-cookie';
import { UiContext, uiReducer } from '.'



interface UiProviderProps {
    children: React.ReactNode;
}

export interface UiState {
    theme: string;
}


const UI_INITIAL_STATE: UiState = {
    theme: 'light',
}


export const UiProvider:FC<UiProviderProps> = ({ children }) => {
    const [ state, dispatch ] = useReducer(uiReducer,UI_INITIAL_STATE); 

    useEffect(() => {
        const theme = cookies.get('theme') || 'light';
        dispatch({ type: '[UI] - Set_Theme', payload:theme});
    },[]); 

    const setTheme = ( theme: string ) => {
        dispatch({ type: '[UI] - Set_Theme', payload:theme}); 
        cookies.set('theme',theme);
    }

    return (
        <UiContext.Provider value={{...state, setTheme}}>
            {children}
        </UiContext.Provider>
    )
}