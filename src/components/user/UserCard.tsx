"use client";
import { useContext } from "react";
import Image from "next/image";
import { UiContext, UserContext } from "@/context";
import { UserInfo } from "./UserInfo";
import { UserData } from "./UserData";

export const UserCard = () => {
  const { user } = useContext(UserContext);
  const { theme } = useContext(UiContext); 

  return (
    <div className={`w-full h-[419px] ${ theme == 'light' ? 'bg-white' : 'bg-deep_indigo' } rounded-2xl shadow-lg px-10 py-12`}>
      <div className="flex">
        <Image
          src={user.avatar_url}
          alt={user.name}
          width={100}
          height={100}
          className="rounded-full w-[100px] h-[100px]"
        />
        <div className="flex flex-col justify-between ml-10 w-full">
          <div className="flex">
            <div className="w-full">
              <h1 className={` ${theme == 'light' ? '' : 'text-white'} text-xl font-semibold tracking-widest`}>
                {user.name}
              </h1>
              <span className="text-blue tracking-wider">@{user.login}</span>
            </div>
            <span className={`text-gray ml-2 ${theme == 'light' ? 'text-gray' : 'text-white' } w-full text-end`}>
              Joined{" "}
              {new Date(user.created_at).toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
                day: "numeric",
              })}
            </span>
          </div>
          <article>
            <p className="text-gray mt-5">
              {user.bio || "This profile has no bio"}
            </p>
          </article>
          <UserInfo 
            user={user} 
            theme={theme}
          />
          <UserData 
            user={user} 
            theme={theme}
          />
        </div>
      </div>
    </div>
  );
};
