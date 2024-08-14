// components/Button.jsx
export default function Button({ children }) {
  return (
    <button
      type="submit"
      className="w-full py-3 mt-4 bg-[#1C1E22] text-[#bababa] font-semibold rounded-3xl
                 shadow-[8px_8px_16px_#141618,-8px_-8px_16px_#24262A]
                 hover:shadow-[inset_8px_8px_16px_#141618,inset_-8px_-8px_16px_#24262A]
                 focus:outline-none"
    >
      {children}
    </button>
  );
}
