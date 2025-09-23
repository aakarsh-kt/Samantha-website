import React from "react";

export default function QuoteSection() {
  return (
    <div className="px-6">
      <blockquote className="font-serif text-3xl md:text-5xl text-center text-gray-900 italic leading-tight max-w-3xl mx-auto drop-shadow-lg animate-fade-in-up">
        “The sky remembers every act of courage, art helps us listen.”
      </blockquote>
      <p className="text-center text-sm text-gray-500 mt-6">— Samantha Ellis</p>
    </div>
  );
}
