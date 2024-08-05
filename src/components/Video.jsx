export default function Video({ className }) {
  return (
    <>
      <video
        src="/video/bgvid.mp4"
        className={`w-full h-full absolute top-0 -z-10 object-fill left-0 ${className}`}
        autoPlay
        muted
        loop
      ></video>
    </>
  );
}
