import React from "react";

export default function Hero() {
  return (
    <div className="w-full h-screen relative">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
        {/* fallback */}
      </video>

      <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-white text-4xl md:text-5xl font-semibold mb-4">Original Oil Paintings by Samantha Ellis</h1>
        <p className="text-white/90 max-w-2xl italic">“The sky remembers every act of courage, art helps us listen.” — Samantha Ellis</p>
      </div>
    </div>
  );
}
