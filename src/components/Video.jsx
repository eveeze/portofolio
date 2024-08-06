export default function Video({ className }) {
  return (
    <>
      <div className={`video-background ${className}`}>
        <video
          src="/video/bgvid.mp4"
          className={`video`}
          autoPlay
          muted
          loop
        ></video>
      </div>
    </>
  );
}
