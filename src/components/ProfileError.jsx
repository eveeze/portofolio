// components/ProfileError.jsx
export default function ProfileError({ message }) {
  return (
    <div className="bg-darkBackground text-gray-200 min-h-screen p-8 mt-32 max-w-screen-md mx-auto flex items-center justify-center">
      <div className="bento-item bg-darkBackground p-6 rounded-3xl shadow-cardNeumorphism text-center">
        <h2 className="text-xl font-bold text-red-500 mb-4">Error</h2>
        <p className="text-md text-gray-300">{message}</p>
      </div>
    </div>
  );
}
