import { User } from "@/interfaces";
import { FC } from "react";

interface Props {
  user: User; 
  theme: string; 
}

export const UserInfo:FC<Props> = ({ user, theme }) => {
  console.log(user); 
  return (
    <div className={`flex justify-between mt-6 text-center ${theme == 'light' ? 'bg-ghost_white' : 'bg-dark_navy'} p-5 px-10 rounded-lg`}>
      <div className="flex flex-col">
        <h1 className={` ${theme == 'light' ? 'text-gray' : 'text-white' } text-sm font-semibold`}>Repos</h1>
        <span className={`${theme == 'light' ? 'text-dark_navy' : 'text-white' } font-semibold text-xl`}>
          {user.public_repos}
        </span>
      </div>
      <div className="flex flex-col">
        <h1 className={` ${theme == 'light' ? 'text-gray' : 'text-white' } text-sm font-semibold`}>Followers</h1>
        <span className={`font-semibold text-xl ${theme == 'light' ? 'text-dark_navy' : 'text-white' }`}>
          {user.followers}
        </span>
      </div>
      <div className="flex flex-col">
        <h1 className={` ${theme == 'light' ? 'text-gray' : 'text-white' } text-sm font-semibold`}>Following</h1>
        <span className={`font-semibold text-xl ${theme == 'light' ? 'text-dark_navy' : 'text-white' }`}>
          {user.following}
        </span>
      </div>
    </div>
  );
};
