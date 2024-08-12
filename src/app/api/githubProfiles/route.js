import { NextResponse } from "next/server";

export async function GET() {
  const profileResponse = await fetch("https://api.github.com/users/eveeze", {
    cache: "force-cache",
  });
  const followersResponse = await fetch(
    "https://api.github.com/users/eveeze/followers",
    {
      cache: "force-cache",
    }
  );
  const followingResponse = await fetch(
    "https://api.github.com/users/eveeze/following",
    {
      cache: "force-cache",
    }
  );
  const contributionsResponse = await fetch(
    "https://github-contributions-api.jogruber.de/v4/eveeze",
    {
      cache: "force-cache",
    }
  );

  if (
    !profileResponse.ok ||
    !followersResponse.ok ||
    !followingResponse.ok ||
    !contributionsResponse.ok
  ) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }

  const profileData = await profileResponse.json();
  const followers = await followersResponse.json();
  const following = await followingResponse.json();
  const contributions = await contributionsResponse.json();

  return NextResponse.json({
    profile: profileData,
    followers,
    following,
    contributions,
  });
}
