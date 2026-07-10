import { NavLink } from "react-router-dom";
import taskforceLogo from "../assets/tf logo.webp";

const links = [
  { to: "/", label: "Home" },
  { to: "/browse-cycles", label: "Browse Cycles" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-[#94D2D3]/95 shadow-[0_1px_0_rgba(255,255,255,0.4)] backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={taskforceLogo}
            alt="Taskforce NIT Trichy"
            className="h-9 w-9 rounded-full object-contain"
          />
          <span className="leading-tight">
            <span className="block font-display text-[15px] font-semibold text-[#24424A] sm:text-lg">
              Taskforce RECycle
            </span>
            <span className="block font-mono text-[10px] uppercase tracking-[0.25em] text-[#5D7E82]">
              Marketplace
            </span>
          </span>
        </NavLink>

        <nav className="hidden items-center gap-3 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                isActive ? "home-nav-active" : "home-nav-link"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

      </div>
      <nav className="flex items-center justify-around gap-2 border-t border-white/40 px-3 py-2 md:hidden">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            className={({ isActive }) =>
              (isActive ? "home-nav-active" : "home-nav-link") + " text-xs"
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
