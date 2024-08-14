// components/Input.jsx
export default function Input({
  label,
  type = "text",
  id,
  name,
  placeholder,
  rows,
  ...rest
}) {
  const isTextarea = type === "textarea";

  return (
    <div className="space-y-1">
      <label htmlFor={id} className="block text-gray-200 text-sm font-semibold">
        {label}
      </label>
      {isTextarea ? (
        <textarea
          id={id}
          name={name}
          rows={rows || 4}
          className="w-full p-3 bg-[#1C1E22] text-[#bababa] placeholder-[#bababa] border border-[#1A1B1E] rounded-xl shadow-formNeumorphism focus:outline-none focus:ring-2 focus:ring-gray-700"
          placeholder={placeholder}
          {...rest}
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          className="w-full p-3 bg-[#1C1E22] text-[#bababa] placeholder-[#bababa] border border-[#1A1B1E] rounded-xl shadow-formNeumorphism focus:outline-none focus:ring-2 focus:ring-gray-700"
          placeholder={placeholder}
          {...rest}
        />
      )}
    </div>
  );
}
