export default function BlockQuote() {
  return (
    <div className="bg-[#1C1E22] p-6 rounded-lg shadow-neumorphism max-w-xl mx-auto">
      <blockquote className="text-gray-300 italic text-lg font-medium">
        &ldquo;In your actions, don&apos;t procrastinate. In your conversations,
        don&apos;t confuse. In your thoughts, don&apos;t wander. In your soul,
        don&apos;t be passive or aggressive. In your life, don&apos;t be all
        about business.&rdquo;
      </blockquote>
      <cite className="block text-right text-gray-500 mt-4">
        &mdash; Marcus Aurelius
      </cite>
    </div>
  );
}
