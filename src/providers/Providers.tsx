"use client"
import React, { FC } from 'react'; 
import { UserProvider } from '@/context';

interface ProvidersProps {
    children: React.ReactNode;
}

export const Providers:FC<ProvidersProps> = ({ children }) => {
  return (
    <UserProvider>{children}</UserProvider>
  )
}
