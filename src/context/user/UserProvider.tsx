"use client"
import { FC, useReducer } from 'react'; 
import { UserContext, userReducer } from '..'
import { User } from '@/interfaces';

interface UserProviderProps {
    children: React.ReactNode;
}

export interface UserState {
    user: User;
}

const USER_INITIAL_STATE: UserState = {
    user:{
        login:'octocat',
        avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4',
        name: "The Octocat",
	    company: "@github",
	    location: "San Francisco",
	    blog: "https://github.blog",
        bio: '',
	    twitter_username: '',
	    public_repos: 8,
        followers: 9549,
	    following: 9,
	    created_at: "2011-01-25T18:44:36Z",
    }
}


export const UserProvider:FC<UserProviderProps> = ({ children }) => {
    const [ state, dispatch ] = useReducer(userReducer,USER_INITIAL_STATE); 

    const setUser = async ( name: string ) => {

        const response = await fetch(`/api`,{
            method: 'POST',
            body: JSON.stringify({name}),
        });
        const data:User = await response.json();
        dispatch({ type: '[User] SET_USER', payload:data}); 
    }

    return (
        <UserContext.Provider value={{...state, setUser}}>
            {children}
        </UserContext.Provider>
    )
}