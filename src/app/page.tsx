"use client"
import { SearchForm, ToggleTheme, UserCard } from '@/components';
import { UiContext } from '@/context';
import { useContext } from 'react';



export default function Home() {
  const { theme } = useContext(UiContext);
  return (
    <main className={`flex flex-col items-center justify-center px-40 py-10 h-screen ${theme == 'light' ? 'bg-ghost_white' : 'bg-dark_navy'}`}>
      <header className='flex flex-col justify-between sm:w-[730px] w-[500px] items-center'>
        <div className='flex justify-between w-full'>
          <h1 className={`text-xl font-bold text-center ${theme == 'light' ? '' : 'text-white'}`}>devfinder</h1>
          <ToggleTheme />
        </div>
        <div className='mt-7 sm:w-[730px] w-[600px]'>
          <SearchForm />
        </div>
      </header>
      <section className='mt-5 sm:w-[730px] w-[600px]'>
        <UserCard/>
      </section>
    </main>
  )
}
