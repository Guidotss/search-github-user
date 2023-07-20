"use client";
import { useContext, useState } from "react";
import { SearchIcon } from "../icons";
import { UiContext, UserContext } from "@/context";

export const SearchForm = () => {
  const [name, setName] = useState<string>("");
  const { setUser } = useContext(UserContext);
  const { theme } = useContext(UiContext); 
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUser(name);

  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          className={`w-full p-4 px-14 shadow-lg rounded-lg ${theme == 'light' ? 'bg-white' : 'bg-deep_indigo text-white'}`}
          type="text"
          placeholder="Search GitHub username..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="fixed 2xl:-mt-10 mt-9 ml-4">
          <SearchIcon />
        </div>
      </div>
      <button className="bg-blue p-2 rounded-lg px-4 fixed right-80 top-24 2xl:top-52 2xl:right-[600px] 2xl:mt-[60px]  mr-1 mt-7 hover:bg-[#60ABFF] transition-colors">
        <span className="text-white">Search</span>
      </button>
    </form>
  );
};
