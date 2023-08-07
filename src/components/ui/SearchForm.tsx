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
        <div className="flex justify-between items-center -mt-12 px-2">
          <div className="items-center">
            <SearchIcon />
          </div>
          <button className="bg-blue p-2 rounded-lg px-4  hover:bg-[#60ABFF] transition-colors">
            <span className="text-white">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
};
