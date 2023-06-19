"use client"
import { UiContext } from '@/context'; 
import { MoonIcon, SunIcon } from "../icons";
import { useContext } from 'react';

export const ToggleTheme = () => {

    const { setTheme, theme } = useContext(UiContext); 

    const handleToggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

  return (
    <div className="flex items-center gap-2 cursor-pointer" onClick={handleToggleTheme}>
      <h2 className={`${theme == 'light' ? '' : 'text-white'} font-semibold`}>{theme}</h2>
      {
            theme === 'light' ? <MoonIcon /> : <SunIcon />
      }
    </div>
  );
};
