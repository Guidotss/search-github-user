"use client";
import { useContext, useState } from "react";
import { SearchIcon } from "../icons";
import { UserContext } from "@/context";

export const SearchForm = () => {
  const [name, setName] = useState<string>("");
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUser(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          className="w-full p-4 px-14 shadow-lg rounded-lg"
          type="text"
          placeholder="Search GitHub username..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="fixed top-24 mt-4 ml-4">
          <SearchIcon />
        </div>
      </div>
      <button className="bg-blue p-2 rounded-lg px-4 fixed right-80 top-24 mr-1 mt-2">
        <span className="text-white">Search</span>
      </button>
    </form>
  );
};
