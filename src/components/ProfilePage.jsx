// components/ProfilePage.jsx

"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import GitHubCalendar from "react-github-calendar";
import { MdArrowForward } from "react-icons/md"; // Import the arrow icon from react-icons

export default function ProfilePage() {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/githubProfiles");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setProfileData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const { profile, followers, following } = profileData;

  return (
    <div className="bg-transparent text-white min-h-screen p-8 mt-32 max-w-screen-lg mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {profile && (
          <div className="bento-item border-2 border-gray-200  bg-opacity-40 p-4 rounded-lg text-[#bababa] md:col-span-2 row-span-2">
            <div className="text-center">
              <Image
                src={profile.avatar_url}
                alt={profile.name}
                width={100}
                height={100}
                className="rounded-full w-32 h-32 mx-auto"
              />
            </div>
            <Link
              href={"https://www.linkedin.com/in/tito-zaki-saputro-6a854a229/"}
            >
              <h2 className="text-center text-xl mt-4 font-bold text-gray-200">
                {profile.name}
              </h2>
            </Link>
            <p className="text-center">{profile.bio}</p>
            <div className="text-center mt-4">
              <Link href={profile.html_url} className="text-white underline">
                View GitHub Profile
              </Link>
            </div>
          </div>
        )}

        {followers?.length > 0 && (
          <div className="bento-item border-2 border-gray-200  bg-opacity-40 p-4 rounded-lg text-gray-300 font-bold overflow-hidden">
            <h3 className="text-lg font-bold mb-2 text-center">Followers</h3>
            <div className="flex items-center space-x-2 overflow-x-auto">
              {followers.slice(0, 5).map((follower) => (
                <Link
                  key={follower.id}
                  href={follower.html_url}
                  className="flex-shrink-0"
                >
                  <Image
                    src={follower.avatar_url}
                    alt={follower.login}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </Link>
              ))}
              {followers.length > 5 && (
                <Link href="https://github.com/eveeze" className="text-white">
                  <MdArrowForward className="w-6 h-6" />
                </Link>
              )}
            </div>
          </div>
        )}

        {following?.length > 0 && (
          <div className="bento-item border-2 border-gray-200  bg-opacity-40 p-4 rounded-lg text-[#bababa] overflow-hidden">
            <h3 className="text-lg font-bold mb-2 text-center">Following</h3>
            <div className="flex items-center space-x-2 overflow-x-auto">
              {following.slice(0, 5).map((user) => (
                <Link
                  key={user.id}
                  href={user.html_url}
                  className="flex-shrink-0"
                >
                  <Image
                    src={user.avatar_url}
                    alt={user.login}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </Link>
              ))}
              {following.length > 5 && (
                <Link href="https://github.com/eveeze" className="text-white">
                  <MdArrowForward className="w-6 h-6" />
                </Link>
              )}
            </div>
          </div>
        )}

        <div className="bento-item border-2 border-gray-200  bg-opacity-40 p-4 rounded-lg text-[#bababa] md:col-span-3 w-full justify-center items-center">
          <h3 className="text-lg font-bold mb-2 text-center">
            GitHub Activity
          </h3>
          <div className="flex justify-center items-center">
            <GitHubCalendar username="eveeze" />
          </div>
        </div>
      </div>
    </div>
  );
}
