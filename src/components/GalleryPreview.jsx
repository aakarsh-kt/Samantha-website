import React from "react";

export default function GalleryPreview() {
  const thumbs = ["/images/Picture1.jpg", "/images/Picture2.jpg", "/images/Picture11.jpg"];
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-6">Gallery Preview</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
        {thumbs.map((t, i) => (
          <div key={i} className="rounded-lg overflow-hidden shadow-lg">
            <img src={t} alt={`thumb-${i}`} className="w-full h-64 object-cover" />
          </div>
        ))}
      </div>
      <div className="text-center">
        <a href="/gallery" className="inline-block px-6 py-3 bg-white border rounded shadow">View Full Gallery</a>
      </div>
    </div>
  );
}
