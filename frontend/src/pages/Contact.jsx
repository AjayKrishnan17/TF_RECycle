import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";

const hours = [
  { day: "Thu · 21/08", time: "10:00 AM – 5:00 PM" },
  { day: "Fri · 22/08", time: "10:00 AM – 5:00 PM" },
  { day: "Sat · 23/08", time: "10:00 AM – 5:00 PM" },
];

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  allotmentNumber: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "loading", message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Something went wrong.");

      setStatus({ state: "success", message: data.message });
      setForm(initialForm);
    } catch (err) {
      setStatus({ state: "error", message: err.message });
    }
  };

  return (
    <section className="px-6 py-20 text-[#123238]">
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="text-4xl font-bold text-[#102025] sm:text-5xl">
          Contact The <span className="text-[#3a8f92]">RECycle Team</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-[#4a5c60]">
          Have questions about our bicycles or need to contact the RECycle
          Helpline? We're here to help you.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-2">
        {/* Info panel */}
        <div className="rounded-md border border-[#cfd8dc] bg-white p-8 shadow-[0_4px_10px_rgba(0,0,0,0.08)]">
          <h2 className="font-display text-xl font-semibold text-[#243337]">
            Our Information
          </h2>
          <ul className="mt-6 space-y-5 text-sm">
            <li className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[#b9d2d5] bg-[#edf6f7] text-[#2d6f73]"><MapPin size={18} /></span>
              <div>
                <p className="font-semibold text-[#243337]">Visit Our Store</p>
                <p className="mt-1 text-[#4a5c60]">
                  RECycle Shed, Adj. of LOGOS Lecture Hall Complex<br />
                  National Institute of Technology, Tiruchirappalli
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[#b9d2d5] bg-[#edf6f7] text-[#2d6f73]"><Phone size={18} /></span>
              <div>
                <p className="font-semibold text-[#243337]">Call Us</p>
                <p className="mt-1 text-[#4a5c60]">
                  +91 96778 52057 (Aqhil Ahmed)<br />
                  +91 63047 83693 (Bathula Chinmai)<br/>
                  +91 70139 37639 (Gowtham)<br/>
                  +91 81227 88487 (Parshana)
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[#b9d2d5] bg-[#edf6f7] text-[#2d6f73]"><Mail size={18} /></span>
              <div>
                <p className="font-semibold text-[#243337]">Email Us</p>
                <p className="mt-1 text-[#4a5c60]">recycle.taskforce.nitt26@gmail.com</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[#b9d2d5] bg-[#edf6f7] text-[#2d6f73]"><Clock size={18} /></span>
              <div>
                <p className="font-semibold text-[#243337]">Store Hours</p>
                <ul className="mt-1 space-y-1 text-[#4a5c60]">
                  {hours.map((h) => (
                    <li key={h.day}>{h.day}: {h.time}</li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="rounded-md border border-[#cfd8dc] bg-white p-8 shadow-[0_4px_10px_rgba(0,0,0,0.08)]">
          <h2 className="font-display text-xl font-semibold text-[#243337]">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-[#4a5c60]">
                  Full Name *
                </label>
                <input
                  required
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="input-field"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-[#4a5c60]">
                  Email Address *
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="input-field"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-[#4a5c60]">
                  Phone Number *
                </label>
                <input
                  required
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="input-field"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-[#4a5c60]">
                  Provisional Allotment Number *
                </label>
                <input
                  required
                  name="allotmentNumber"
                  value={form.allotmentNumber}
                  onChange={handleChange}
                  placeholder="Your allotment number"
                  className="input-field"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-medium text-[#4a5c60]">
                Message *
              </label>
              <textarea
                required
                rows={4}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us how we can help you..."
                className="input-field resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status.state === "loading"}
              className="btn-primary w-full justify-center text-sm disabled:opacity-60"
            >
              {status.state === "loading" ? (
                "Sending…"
              ) : (
                <>Send Message <Send size={16} /></>
              )}
            </button>

            {status.state === "success" && (
              <p className="flex items-center gap-2 text-sm text-[#3a8f92]">
                <CheckCircle2 size={16} /> {status.message}
              </p>
            )}
            {status.state === "error" && (
              <p className="text-sm text-[#b5456d]">{status.message}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
