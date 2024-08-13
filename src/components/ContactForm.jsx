// components/ContactForm
export default function ContactForm() {
  return (
    <form className="space-y-6 mt-10">
      <div className="space-y-1">
        <label
          htmlFor="name"
          className="block text-gray-200 text-sm font-semibold"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full p-3 bg-[#1C1E22] text-[#bababa] placeholder-[#bababa] border border-[#1A1B1E] rounded-xl shadow-formNeumorphism focus:outline-none focus:ring-2 focus:ring-gray-700"
          placeholder="Your Name"
        />
      </div>

      <div className="space-y-1">
        <label
          htmlFor="email"
          className="block text-gray-200 text-sm font-semibold"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full p-3 bg-[#1C1E22] text-[#bababa] placeholder-[#bababa] border border-[#1A1B1E] rounded-xl shadow-formNeumorphism focus:outline-none focus:ring-2 focus:ring-gray-700"
          placeholder="Your Email Address"
        />
      </div>

      <div className="space-y-1">
        <label
          htmlFor="subject"
          className="block text-gray-200 text-sm font-semibold"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="w-full p-3 bg-[#1C1E22] text-[#bababa] placeholder-[#bababa] border border-[#1A1B1E] rounded-xl shadow-formNeumorphism focus:outline-none focus:ring-2 focus:ring-gray-700"
          placeholder="Subject"
        />
      </div>

      <div className="space-y-1">
        <label
          htmlFor="message"
          className="block text-gray-200 text-sm font-semibold"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="6"
          className="w-full p-3 bg-[#1C1E22] text-[#bababa] placeholder-[#bababa] border border-[#1A1B1E] rounded-xl shadow-formNeumorphism focus:outline-none focus:ring-2 focus:ring-gray-700"
          placeholder="Your Message"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full py-3 mt-4 bg-purple-600 text-white font-semibold rounded-xl shadow-md hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-gray-700"
      >
        Send Message
      </button>
    </form>
  );
}
