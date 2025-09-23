import React, { useState } from "react";

export default function CommissionModal({ open, onClose }) {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", size: "40x40", date: "", features: [], canvas: "handmade", details: "",
  });
  if (!open) return null;

  const sizes = [
    { value: "20x20", label: '20 × 20 cm' },
    { value: "30x30", label: '30 × 30 cm' },
    { value: "40x40", label: '40 × 40 cm' },
    { value: "50x50", label: '50 × 50 cm' },
    { value: "60x60", label: '60 × 60 cm' },
    { value: "100x100", label: '100 × 100 cm' },
    { value: "120x120", label: '120 × 120 cm' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // POST to backend here or show a success toast — demo logs the form
    console.log("Commission form:", form);
    alert("Thanks — commission enquiry submitted (demo).");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white rounded-2xl w-full max-w-3xl mx-4 p-6 animate-modal-fade overflow-auto max-h-[90vh]">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">Commission Enquiry</h3>
          <button onClick={onClose} className="text-gray-500">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input required value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} className="mt-1 block w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input required value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} type="email" className="mt-1 block w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone (optional)</label>
              <input value={form.phone} onChange={(e)=>setForm({...form, phone:e.target.value})} className="mt-1 block w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium">Date (special day)</label>
              <input value={form.date} onChange={(e)=>setForm({...form, date:e.target.value})} type="date" className="mt-1 block w-full border px-3 py-2 rounded" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Choose size</label>
            <select value={form.size} onChange={(e)=>setForm({...form, size:e.target.value})} className="mt-1 block w-full border px-3 py-2 rounded">
              {sizes.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">What to feature</label>
            <div className="flex gap-4 mt-2 flex-wrap">
              {["Stars","Clouds","Landscape"].map(opt => (
                <label key={opt} className="inline-flex items-center gap-2">
                  <input type="checkbox" checked={form.features.includes(opt)} onChange={(e)=>{
                    const has = form.features.includes(opt);
                    setForm({...form, features: has ? form.features.filter(x=>x!==opt) : [...form.features,opt]});
                  }} />
                  <span className="text-sm">{opt}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Canvas type</label>
            <div className="mt-2 flex gap-4">
              {["handmade", "pre-stretched"].map(c => (
                <label key={c} className="inline-flex items-center gap-2">
                  <input type="radio" name="canvas" checked={form.canvas===c} onChange={()=>setForm({...form, canvas: c})} />
                  <span className="text-sm">{c === "handmade" ? "Handmade Canvas" : "Premium Pre-Stretched Canvas"}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Extra details</label>
            <textarea value={form.details} onChange={(e)=>setForm({...form, details:e.target.value})} className="mt-1 block w-full border px-3 py-2 rounded" rows="4" />
          </div>

          <div className="flex gap-4 justify-end">
            <button type="button" onClick={onClose} className="px-4 py-2 border rounded">Cancel</button>
            <button type="submit" className="px-6 py-2 bg-pink-500 text-white rounded">Send Enquiry</button>
          </div>
        </form>
      </div>
    </div>
  );
}
