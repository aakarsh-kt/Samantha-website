import React, { useState } from "react";

const PAINTINGS = [
  { id: 1, title: "I've Found It", year: 2022, price: "£769", size: "100 × 100 cm", status: "available", image: "/images/Picture1.jpg" },
  { id: 2, title: "Bliss", year: 2019, price: "—", size: "50 × 50 cm", status: "sold", image: "/images/Picture2.jpg" },
  { id: 3, title: "Kourtney", year: 2019, price: "—", size: "29.7 × 42 cm", status: "sold", image: "/images/Picture3.jpg" },
  { id: 4, title: "For Dad", year: 2021, price: "—", size: "50 × 50 cm", status: "sold", image: "/images/Picture4.jpg" },
  { id: 5, title: "European Women’s Championship", year: 2022, price: "£778", size: "115 × 115 cm", status: "available", image: "/images/Picture5.jpg" },
  { id: 6, title: "I've Found It I", year: 2022, price: "—", size: "120 × 120 cm", status: "sold", image: "/images/Picture6.jpg" },
  { id: 7, title: "I’ll Look Up Forever", year: 2021, price: "£494", size: "40 × 40 cm", status: "available", image: "/images/Picture7.jpg" },
  { id: 8, title: "We Can Only Hope", year: 2019, price: "£366", size: "40 × 40 cm", status: "available", image: "/images/Picture8.jpg" },
  { id: 9, title: "Untitled II", year: 2019, price: "£469", size: "29.7 × 42 cm", status: "available", image: "/images/Picture9.jpg" },
  { id:10, title: "Beyond Words", year: 2019, price: "£619", size: "50 × 50 cm", status: "available", image: "/images/Picture10.jpg" },
  { id:11, title: "Candy Floss Clouds", year: 2019, price: "£149", size: "50 × 50 cm", status: "available", image: "/images/Picture11.jpg" },
  { id:12, title: "Find Me the Moon", year: 2022, price: "£875", size: "100 × 100 cm", status: "available", image: "/images/Picture12.jpg" },
  { id:13, title: "Find Me the Moon I", year: 2022, price: "—", size: "120 × 120 cm", status: "sold", image: "/images/Picture13.jpg" },
  { id:14, title: "Wellingborough", year: 2020, price: "—", size: "—", status: "sold", image: "/images/Picture14.jpg" },
  { id:15, title: "Hurricane Maria", year: 2020, price: "—", size: "50 × 50 cm", status: "sold", image: "/images/Picture15.jpg" },
  { id:16, title: "Hurricane Katrina", year: 2020, price: "—", size: "50 × 50 cm", status: "sold", image: "/images/Picture16.jpg" },
  { id:17, title: "Storm André", year: 2020, price: "£725", size: "50 × 50 cm", status: "available", image: "/images/Picture17.jpg" },
  { id:18, title: "Mount Lamington", year: 2020, price: "£725", size: "50 × 50 cm", status: "available", image: "/images/Picture18.jpg" },
  { id:19, title: "Mount Sinabung", year: 2018, price: "£800", size: "50 × 50 cm", status: "available", image: "/images/Picture19.jpg" },
  { id:20, title: "Mount St. Helens", year: 2020, price: "£749", size: "50 × 50 cm", status: "available", image: "/images/Picture20.jpg" },
  { id:21, title: "The Great Smog of 1952", year: 2020, price: "£649", size: "50 × 50 cm", status: "available", image: "/images/Picture21.jpg" },
  { id:22, title: "Australian Fires", year: 2020, price: "£769", size: "50 × 50 cm", status: "available", image: "/images/Picture22.jpg" },
  { id:23, title: "I Can’t Lift My Head", year: 2021, price: "£459", size: "40 × 40 cm", status: "available", image: "/images/Picture23.jpg" },
  { id:24, title: "Contrasting Waves", year: 2017, price: "£219", size: "42 × 61.5 cm", status: "available", image: "/images/Picture24.jpg" },
  { id:25, title: "Untitled", year: 2019, price: "£120", size: "50 × 70 cm", status: "available", image: "/images/Picture25.jpg" },
  { id:26, title: "Untitled I", year: 2019, price: "£120", size: "50 × 70 cm", status: "available", image: "/images/Picture26.jpg" },
  { id:27, title: "Charles Darwin (24 Nov 1859)", year: 2022, price: "£1,115", size: "120 × 120 cm", status: "available", image: "/images/Picture27.jpg" },
  { id:28, title: "Emily Davison (4 Jun 1913)", year: 2022, price: "£900", size: "120 × 120 cm", status: "available", image: "/images/Picture28.jpg" },
  { id:29, title: "Emmett Till (21 Aug 1955)", year: 2022, price: "£789", size: "120 × 120 cm", status: "available", image: "/images/Picture29.jpg" },
  { id:30, title: "Yuri Gagarin (12 Apr 1961)", year: 2022, price: "£899", size: "120 × 120 cm", status: "available", image: "/images/Picture30.jpg" },
  { id:31, title: "Stonewall Riots (27 Jun 1969)", year: 2022, price: "£959", size: "120 × 120 cm", status: "available", image: "/images/Picture31.jpg" },
  { id:32, title: "Sarah Everard (12 Mar 2021)", year: 2022, price: "£1,049", size: "120 × 120 cm", status: "available", image: "/images/Picture32.jpg" },
];



export default function ShopSection() {
  const [showOnlyAvailable, setShowOnlyAvailable] = useState(false);
  const displayed = showOnlyAvailable ? PAINTINGS.filter(p => p.status === "available") : PAINTINGS;

  return (
    <section className="bg-white py-16 px-6">
      {/* Toggle Buttons */}
      <div className="flex items-center justify-between mb-12">
        <div>
          <button
            onClick={() => setShowOnlyAvailable(false)}
            className={`px-5 py-2 rounded-md mr-3 ${!showOnlyAvailable ? "bg-pink-500 text-white shadow" : "bg-gray-100 border"}`}
          >
            All
          </button>
          <button
            onClick={() => setShowOnlyAvailable(true)}
            className={`px-5 py-2 rounded-md ${showOnlyAvailable ? "bg-pink-500 text-white shadow" : "bg-gray-100 border"}`}
          >
            Available
          </button>
        </div>
        <button
          onClick={() => document.getElementById("gallery-preview")?.scrollIntoView({ behavior: "smooth" })}
          className="px-5 py-2 bg-gray-100 border rounded-md shadow-sm hover:bg-gray-200"
        >
          View Full Gallery
        </button>
      </div>

      {/* Paintings Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {displayed.map((p) => (
          <div key={p.id} className="flex flex-col items-center text-center">
            {/* Frame with right-side shadow only */}
             <div class="max-w-lg mx-auto bg-gray-600 p-1
             border-gray-700 border-[6px]
            shadow-[2px_4px_16px_rgba(0,0,0,0.5),0_1px_3px_rgba(0,0,0,0.15)]
            ">

  <div
  className="bg-white p-6 
             shadow-[-2px_-2px_24px_rgba(0,0,0,0.1),inset_6px_6px_10px_rgba(0,0,0,0.3)]"
>

    <img
      src={p.image}
      alt={p.title}
      className="w-full h-full object-contain"
    />
  </div>
</div>

            {/* Painting Info */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold">{p.title}</h4>
              <p className="text-gray-600">{p.year} • {p.size}</p>
              <p className="mt-1 text-pink-600 font-bold">{p.price}</p>
              {p.status === "sold" && (
                <span className="mt-2 inline-block text-sm text-red-600 font-bold">SOLD</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-16 text-center">
        <button
          onClick={() => { setShowOnlyAvailable(true); document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" }); }}
          className="px-8 py-3 bg-pink-600 text-white rounded-md shadow-lg hover:scale-105 transform transition"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
}