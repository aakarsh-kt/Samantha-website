import React from "react";

export default function IntroPainting() {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <img
            src="/images/image.png"
            alt="Samantha painting"
            className="rounded-2xl shadow-xl w-full object-cover transform transition-transform duration-700 hover:scale-[1.02]"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-semibold">Inside The Studio</h2>
          <p className="mt-4 text-gray-700">
            Samantha Ellis is a landscape artist based in Northamptonshire who maps skies, star charts and weather data into oil paintings that hold stories.
          </p>
          <p className="mt-4 text-gray-700">
            Each piece is a moment of history painted into the sky. Scroll to see available originals and commissions.
          </p>
        </div>
      </div>
    </div>
  );
}
