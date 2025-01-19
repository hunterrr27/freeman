import { NextResponse } from "next/server";
import { createClient } from "contentful-management";

export async function POST(req: Request) {
    const { title, body } = await req.json();

    const client = createClient({
        accessToken: process.env.CONTENTFUL_MANAGEMENT_API_KEY || "",
    });

    try {
        const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
        if (!spaceId) {
            throw new Error("Contentful space ID is not defined");
        }
        const space = await client.getSpace(spaceId);
        const environment = await space.getEnvironment("master");
        const entry = await environment.createEntry("post", {
            fields: {
                title: {
                    "en-US": title,
                },
                body: {
                    "en-US": body,
                },
            },
        });

        return NextResponse.json({message: "Post created", data: entry});
    }   catch (error) {
        return NextResponse.json({message: "Failed to create post", error}, {status: 500});
    }
}