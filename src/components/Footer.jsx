import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} Samantha Ellis Art. All rights reserved.</p>
      </div>
    </footer>
  );
}
