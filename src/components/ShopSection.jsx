import React, { useState } from "react";

// sample data mapped from your document (id, title, price, size, year, status, image)
const PAINTINGS = [
  { id: 1, title: "I've Found It", year: 2022, price: "£769", size: "100 × 100 cm", status: "available", image: "/images/painting1.jpg" },
  { id: 2, title: "Find Me the Moon", year: 2022, price: "£875", size: "100 × 100 cm", status: "available", image: "/images/painting2.jpg" },
  { id: 3, title: "Bliss", year: 2019, price: "—", size: "50 × 50 cm", status: "sold", image: "/images/painting3.jpg" },
  { id: 4, title: "Kourtney", year: 2019, price: "—", size: "29.7 × 42 cm", status: "sold", image: "/images/painting4.jpg" },
  { id: 5, title: "European Women’s Championship", year: 2022, price: "£778", size: "115 × 115 cm", status: "available", image: "/images/painting5.jpg" },
];

export default function ShopSection({ onOpenCommission }) {
  const [showOnlyAvailable, setShowOnlyAvailable] = useState(false);

  // show available pop-up animation when toggled
  const displayed = showOnlyAvailable ? PAINTINGS.filter(p => p.status === "available") : PAINTINGS;

  return (
    <>
      <div className="flex items-center justify-between mb-6 gap-4">
        <div>
          <button onClick={() => setShowOnlyAvailable(false)} className={`px-4 py-2 rounded ${!showOnlyAvailable ? "bg-pink-500 text-white" : "bg-white border"}`}>All</button>
          <button onClick={() => setShowOnlyAvailable(true)} className={`ml-3 px-4 py-2 rounded ${showOnlyAvailable ? "bg-pink-500 text-white" : "bg-white border"}`}>Available</button>
        </div>

        <div>
          <button onClick={() => document.getElementById("gallery-preview")?.scrollIntoView({ behavior: "smooth" })} className="px-4 py-2 rounded bg-white border">View Full Gallery</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayed.map((p, idx) => (
          <article key={p.id} style={{ animationDelay: `${idx * 120}ms` }} className="bg-white rounded-2xl shadow-md overflow-hidden transform transition hover:-translate-y-1">
            <div className="relative h-64">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              {/* Sold overlay */}
              {p.status === "sold" && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <span className="bg-red-600 text-white px-4 py-2 rounded-full font-bold tracking-wide animate-pop-scale">SOLD</span>
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-500">{p.year} • {p.size}</p>
              <div className="mt-3 flex items-center justify-between">
                <div className="text-lg font-bold text-pink-600">{p.price}</div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-pink-500 text-white rounded" onClick={() => alert("Add to cart - demo")}>Add to Cart</button>
                  <button className="px-3 py-1 border rounded" onClick={() => alert("Buy now - demo")}>Buy Now</button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="px-6 py-3 bg-pink-500 text-white rounded-lg shadow" onClick={() => { setShowOnlyAvailable(true); document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" }); }}>
          Shop Now
        </button>
      </div>
    </>
  );
}
