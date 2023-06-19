import { User } from "@/interfaces";
import { FC } from "react";
import { CompanyIcon, LocationIcon, TwitterIcon, WebsiteIcon } from "../icons";

interface Props {
  user: User;
  theme: string; 
}

export const UserData: FC<Props> = ({ user, theme }) => {
  return (
    <>
      <div className="flex mt-5 justify-between px-5">
        <div className="flex items-center text-sm">
          <LocationIcon />
          <span className={`text-gray ml-2 ${theme == 'light' ? 'text-gray' : 'text-white' }`}>
            {user.location || "Not Available"}
          </span>
        </div>
        <div className="flex items-center text-sm mr-6">
          <TwitterIcon />
          <span className={`text-gray ml-2 ${theme == 'light' ? 'text-gray' : 'text-white' }`}>
            {user.twitter_username || "Not Available"}
          </span>
        </div>
      </div>
      <div className="flex justify-between px-5 mt-5 text-sm">
        <div className="flex items-center">
          <WebsiteIcon />
          <a href={user.blog || "#"} className={`text-gray ml-2 ${theme == 'light' ? 'text-gray' : 'text-white' }`}>
            {user.blog || "Not Available"}
          </a>
        </div>
        <div className="flex items-center text-sm mr-6">
          <CompanyIcon />
          <span className={`text-gray ml-2 ${theme == 'light' ? 'text-gray' : 'text-white' }`}>
            {user.company || "Not Available"}
          </span>
        </div>
      </div>
    </>
  );
};
