"use client"
import { User } from '@/interfaces';
import { createContext } from 'react'; 

interface UserContextProps {
    user: User; 
    setUser: (name: string) => void;
}

export const UserContext = createContext({} as UserContextProps);