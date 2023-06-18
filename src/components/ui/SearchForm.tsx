"use client"

import { SearchIcon } from "../icons"

export const SearchForm = () => {
  return (
    <form>
        <div>
            <input className="w-full p-3 px-14 shadow-lg rounded-lg" type="text" placeholder="Search GitHub username..." />
            <div className="fixed top-24 mt-3 ml-4">
              <SearchIcon/>
            </div>
        </div>
        <button className="bg-blue p-2 rounded-lg px-4 fixed right-96 top-24 mr-1 mt-1">
            <span className="text-white">
              Search
            </span>
        </button>
    </form>
  )
}
