import { NextResponse } from "next/server";
import { Octokit } from "@octokit/core"; 

const octokit = new Octokit({ auth: process.env.GITHUB_ACCESS_TOKEN });

export async function POST(req:Request) {
    const { name } = await req.json();
    
    
    if(!name){
        const { data } = await octokit.request("GET /users/{username}", {
            username: "octocat",
        });
        return NextResponse.json(data);
    }
    const { data } = await octokit.request("GET /users/{username}", {
        username: name,
    });
    console.log(name); 
    return NextResponse.json(data);
}