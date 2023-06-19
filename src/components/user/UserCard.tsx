"use client";
import { UserContext } from "@/context";
import Image from "next/image";
import { useContext } from "react";
import { CompanyIcon, LocationIcon, TwitterIcon, WebsiteIcon } from "../icons";

export const UserCard = () => {
  const { user } = useContext(UserContext);
  
  return (
    <div className="w-full h-[350px] bg-white rounded-2xl shadow-lg px-10 py-6">
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
              <h1 className="text-xl font-semibold tracking-widest">
                {user.name}
              </h1>
              <span className="text-blue tracking-wider">@{user.login}</span>
            </div>
            <span className="text-gray w-full text-end">
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
          <div className="flex justify-around mt-5 text-center bg-ghost_white p-3 rounded-lg">
            <div className="flex flex-col">
              <h1 className="text-gray text-sm font-semibold">Repos</h1>
              <span className="text-dark_navy font-semibold text-xl">
                {user.public_repos}
              </span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-gray text-sm font-semibold">Followers</h1>
              <span className="text-dark_navy font-semibold text-xl">
                {user.followers}
              </span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-gray text-sm font-semibold">Following</h1>
              <span className="text-dark_navy font-semibold text-xl">
                {user.following}
              </span>
            </div>
          </div>
          <div className="flex mt-5 justify-between px-5">
            <div className="flex items-center text-sm">
                <LocationIcon/>
              <span className="text-gray ml-2">{user.location || "Not Available"}</span>
            </div>
            <div className="flex items-center text-sm">
              <TwitterIcon/>
              <span className="text-gray ml-2">{user.twitter_username || "Not Available"}</span>
            </div>
          </div>
          <div className="flex justify-between px-5 mt-5 text-sm">
            <div className="flex items-center">
              <WebsiteIcon/>
              <a href={user.blog || '#'} className="text-gray ml-2">{user.blog || "Not Available"}</a>
            </div>
            <div className="flex items-center text-sm">
              <CompanyIcon/>
              <span className="text-gray ml-2">{user.company || "Not Available"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
