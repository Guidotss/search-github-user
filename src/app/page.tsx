
import { MoonIcon, SearchForm, UserCard } from '@/components';



export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-80 py-10">
      <header className='flex flex-col justify-between w-full items-center'>
        <div className='flex justify-between w-full'>
          <h1 className='text-xl font-bold text-center'>devfinder</h1>
          <div className='flex items-center gap-2'>
            <h2>Dark</h2>
            <MoonIcon />
          </div>
        </div>
        <div className='mt-7 w-full'>
          <SearchForm />
        </div>
      </header>
      <section className='mt-5 w-full'>
        <UserCard/>
      </section>
    </main>
  )
}
