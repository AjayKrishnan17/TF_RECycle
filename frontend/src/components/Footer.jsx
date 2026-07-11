import { NavLink } from "react-router-dom";
import { MapPin, Phone, Mail, Linkedin, Instagram, Download } from "lucide-react";
import taskforceLogo from "../assets/tf logo.webp";

export default function Footer() {
  const handleDownloadBill = () => {
    window.print();
  };

  return (
    <footer className="border-t border-[#c9d8dc] bg-[#e8eff1] backdrop-blur-md">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={taskforceLogo}
              alt="Taskforce NIT Trichy"
              className="h-14 w-14 rounded-xl object-contain"
            />
            <div>
              <p className="font-display font-semibold text-[#20343a]">Taskforce RECycle</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#5d7e82]">
                Marketplace
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-[#4a5c60]">
            We breathe new life into old bicycles and rent them out to incoming
            first-years — a sustainable, affordable way to get moving on campus
            from day one.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="https://www.linkedin.com/company/taskforce-nittrichy/"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c9d8dc] text-[#5d7277] transition-colors hover:border-[#3a8f92] hover:text-[#3a8f92]"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://www.instagram.com/taskforce_nitt?igsh=MWR3anpxYnEzNDhpOA=="
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c9d8dc] text-[#5d7277] transition-colors hover:border-[#3a8f92] hover:text-[#3a8f92]"
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>

        <div>
          <p className="eyebrow text-[#3a8f92]">// Quick Links</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><NavLink to="/" className="home-nav-link">Home</NavLink></li>
            <li><NavLink to="/browse-cycles" className="home-nav-link">Browse Cycles</NavLink></li>
            <li><NavLink to="/about" className="home-nav-link">About Us</NavLink></li>
            <li><NavLink to="/contact" className="home-nav-link">Contact</NavLink></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-[#3a8f92]">// Contact Info</p>
          <ul className="mt-4 space-y-3 text-sm text-[#4a5c60]">
            <li className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-[#3a8f92]" />
              <span>RECycle Shed, Adj. of LOGOS Lecture Hall Complex, NIT Trichy</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="mt-0.5 shrink-0 text-[#3a8f92]" />
              <span>+91 96778 52057 (Aaqhil Ahmed)<br />
                  +91 63047 83693 (Bathula Chinmai)<br/>
                  +91 70139 37639 (Gowtham)<br/>
                  +91 81227 88487 (Parshana)</span>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="mt-0.5 shrink-0 text-[#3a8f92]" />
              <span>recycle.taskforce.nitt26@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 border-t border-[#c9d8dc] px-6 py-6 sm:flex-row sm:justify-between">
        <button onClick={handleDownloadBill} className="btn-primary text-sm">
          <Download size={16} /> Download Bill
        </button>
        <p className="text-xs text-[#5d7277]">
          2026 TaskForce RECycle Marketplace. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
