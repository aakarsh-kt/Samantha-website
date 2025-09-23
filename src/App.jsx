import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import QuoteSection from "./components/QuoteSection";
import IntroPainting from "./components/IntroPainting";
import ShopSection from "./components/ShopSection";
import CommissionModal from "./components/CommissionModal";
import GalleryPreview from "./components/GalleryPreview";
import Footer from "./components/Footer";

export default function App() {
  // simple scroll Y to orchestrate stages
  const [scrollY, setScrollY] = useState(0);
  const [openCommission, setOpenCommission] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="font-body text-gray-900 antialiased">
      <Header />
      {/* Hero video fixed; fades when scrollY > 40 */}
      <div className={`fixed inset-0 z-0 transition-opacity duration-700 ${scrollY > 40 ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        <Hero />
      </div>

      {/* Page content stacks above the hero */}
      <div className="relative z-10">
        {/* Small spacer so content doesn't start behind fixed header */}
        <div className="h-[72px]" />

        {/* Quote section appears after a little scroll and fades in */}
        <section className={`min-h-screen flex items-center justify-center px-6 transition-opacity duration-700 ${scrollY > 30 && scrollY < 600 ? "opacity-100" : (scrollY <= 30 ? "opacity-0" : "opacity-0")}`}>
          <QuoteSection />
        </section>

        {/* After quote, Samantha painting image */}
        <section id="intro-painting" className="min-h-screen flex items-center justify-center bg-white">
          <IntroPainting />
        </section>

        {/* Shop / Paintings preview */}
        <section id="shop" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-semibold">Shop Original Paintings</h2>
              <p className="mt-3 text-gray-600">Once a painting is gone, it's gone forever. Don’t miss your chance to own a piece of the sky.</p>
            </div>

            <ShopSection onOpenCommission={() => setOpenCommission(true)} />
          </div>
        </section>

        {/* Gallery preview */}
        <section id="gallery-preview" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <GalleryPreview />
          </div>
        </section>

        {/* Commission poster section */}
        <section className="py-20 bg-gradient-to-b from-primary/10 to-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold">Your Sky, Your Story</h3>
                <p className="mt-3 text-gray-700">
                  Commission a one-of-a-kind painting of the stars and clouds from your special day.
                </p>
                <button
                  onClick={() => setOpenCommission(true)}
                  className="mt-6 inline-block bg-pink-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-pink-600 transition"
                >
                  Start a Commission
                </button>
              </div>
              <div className="flex-1">
                <img src="/images/commission-poster.jpg" alt="Commission poster" className="rounded-lg shadow-lg w-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      {/* Commission Modal */}
      <CommissionModal open={openCommission} onClose={() => setOpenCommission(false)} />
    </div>
  );
}
