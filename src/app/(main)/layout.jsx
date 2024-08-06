// (main)/layout.jsx
import Navbar from "@/components/Navbar";
import Video from "@/components/Video";
import Head from "next/head";
export const metadata = {
  title: "titozaki",
  description: "Web Portofolio Tito Zaki Saputro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`text-gray-200`}>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0 , maximum-scale=1.0 , user-scalable=no"
        />
        {/* Open Graph */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://titozaki.vercel.app/`} />
        <meta
          property="og:image"
          content={`https://titozaki.vercel.app/images/pp.png`}
        />
      </Head>
      <body className="bg-black ">
        <Navbar />
        <Video />

        {children}
        <Video className={"top-full h-max md:h-[450px]"} />
      </body>
    </html>
  );
}
