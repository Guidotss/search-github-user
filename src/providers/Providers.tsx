"use client"
import React, { FC } from 'react'; 
import { UiProvider, UserProvider } from '@/context';

interface ProvidersProps {
    children: React.ReactNode;
}

export const Providers:FC<ProvidersProps> = ({ children }) => {
  return (
    <UiProvider> 
      <UserProvider>
        {children}
      </UserProvider>
    </UiProvider>
  )
}
