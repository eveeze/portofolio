// components/ProfilePage.jsx

"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";
import { MdArrowForward } from "react-icons/md"; // Import the arrow icon from react-icons
import ProfileSkeleton from "./ProfileSkeleton";
import ProfileError from "./ProfileError";

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

  if (loading) return <ProfileSkeleton />;
  if (error) return <ProfileError message={error} />;

  const { profile, followers, following } = profileData;

  const slideInRight = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const slideInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-darkBackground text-gray-200 min-h-screen p-8 mt-32 max-w-screen-md mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {profile && (
          <motion.div
            className="bento-item bg-darkBackground p-6 rounded-3xl shadow-cardNeumorphism md:col-span-2 row-span-2 text-center"
            initial="hidden"
            animate="visible"
            variants={slideInRight}
          >
            <div className="neumorphism-img">
              <Image
                src={profile.avatar_url}
                alt={profile.name}
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
            <Link href="https://www.linkedin.com/in/tito-zaki-saputro-6a854a229/">
              <h2 className="text-xl mt-4 font-bold">{profile.name}</h2>
            </Link>
            <p className="mt-2 text-[#bababa]">{profile.bio}</p>
            <div className="mt-4">
              <Link
                href={profile.html_url}
                className="text-white group transition-all duration-300 ease-in-out"
              >
                <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  View GitHub Profile
                </span>
              </Link>
            </div>
          </motion.div>
        )}

        {followers && (
          <motion.div
            className="bento-item bg-darkBackground p-6 rounded-3xl shadow-cardNeumorphism text-center"
            initial="hidden"
            animate="visible"
            variants={slideInLeft}
          >
            <h3 className="text-lg font-bold mb-2 mt-5">Followers</h3>
            <p className="text-2xl">{followers.length}</p>
          </motion.div>
        )}

        {following && (
          <motion.div
            className="bento-item bg-darkBackground p-6 rounded-3xl shadow-cardNeumorphism text-center"
            initial="hidden"
            animate="visible"
            variants={slideInLeft}
          >
            <h3 className="text-lg font-bold mb-2 mt-5">Following</h3>
            <p className="text-2xl">{following.length}</p>
          </motion.div>
        )}

        <motion.div
          className="bento-item bg-darkBackground p-6 rounded-3xl shadow-cardNeumorphism md:col-span-3 text-center"
          initial="hidden"
          animate="visible"
          variants={slideInUp}
        >
          <h3 className="text-lg font-bold mb-4">GitHub Activity</h3>
          <div className="flex justify-center items-center">
            <GitHubCalendar username="eveeze" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
