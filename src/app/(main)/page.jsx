// pages/index.js
import Head from "next/head";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Video from "@/components/Video";
export default function Home() {
  return (
    <div className="min-h-dvh w-full mx-auto max-w-screen-md">
      <Hero />
    </div>
  );
}
