import { NavLink } from "react-router-dom";
import { ArrowRight, Bike, Compass, ChartNoAxesCombined, Leaf, Star } from "lucide-react";

const reasons = [
  {
    icon: Bike,
    title: "What We Do",
    body: "Sustainably refurbish used cycles and make them available at student-friendly prices.",
  },
  {
    icon: Compass,
    title: "Our Mission",
    body: "Make reliable campus mobility affordable, accessible, and kinder to the planet.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Impact",
    body: "Celebrating 10 years of reliable rides and a greener campus community.",
  },
];

export default function Home() {
  return (
    <section className="min-h-[calc(100vh-64px)] overflow-hidden bg-[#EDF3F5] px-4 pb-12 pt-8 text-[#123238] sm:px-6 sm:pt-10">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-4xl rounded-md border border-[#cfd8dc] bg-[#f7f9fa] px-4 pb-6 pt-10 shadow-[0_8px_20px_rgba(39,63,69,0.14)] sm:px-8 sm:pb-8 sm:pt-12">
          <div className="relative mx-auto -mt-16 mb-6 flex w-fit flex-col items-center rounded-2xl border border-[#dfe7ea] bg-white px-5 pb-3 pt-4 shadow-[0_10px_18px_rgba(0,0,0,0.12)]">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f4c64b]/90 text-[#8a6a00] shadow-sm">
              <Star size={18} fill="currentColor" />
            </div>
            <div className="mt-2 text-center leading-none">
              <div className="font-display text-sm font-semibold tracking-[0.18em] text-[#2d454b]">
                TASKFORCE
              </div>
              <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.22em] text-[#7f9499]">
                NIT Trichy
              </div>
            </div>
          </div>

          <h1 className="mx-auto max-w-3xl text-balance text-center text-[30px] font-extrabold leading-[1.05] tracking-tight text-[#101517] sm:text-[38px] md:text-[46px]">
            Start Your College Journey
            <br />
            with Refurbished Cycles,
            <br />
            Student-Friendly Rentals.
          </h1>

          <p className="mt-4 text-center text-[19px] font-medium text-[#2b3d42] sm:text-[22px]">
            Celebrating 10 Years
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <NavLink
              to="/browse-cycles"
              className="inline-flex items-center gap-2 rounded-md bg-[#3a8f92] px-5 py-2.5 text-sm font-medium text-white shadow-[0_4px_10px_rgba(37,95,97,0.3)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#347f82]"
            >
              Explore Collection
              <ArrowRight size={16} />
            </NavLink>
            <NavLink
              to="/contact"
              className="inline-flex items-center rounded-md border border-[#d6d6d6] bg-white px-5 py-2.5 text-sm font-medium text-[#27363a] shadow-[0_4px_8px_rgba(0,0,0,0.08)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Contact Us
            </NavLink>
          </div>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {reasons.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-md border border-[#d6dddf] bg-[#f7fafb] px-4 py-4 shadow-[0_4px_10px_rgba(0,0,0,0.08)]"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[#b9d2d5] bg-[#edf6f7] text-[#2d6f73]">
                  <Icon size={22} />
                </div>
                <div>
                  <h2 className="text-[18px] font-bold text-[#243337]">{title}</h2>
                  <p className="mt-1 text-[12px] leading-relaxed text-[#4a5c60]">{body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-5 flex max-w-4xl flex-wrap items-center justify-center gap-3 text-sm text-[#5d7277]">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#d6dddf] bg-white px-4 py-2 shadow-sm">
            <Leaf size={15} className="text-[#3a8f92]" />
            Student-friendly rentals
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#d6dddf] bg-white px-4 py-2 shadow-sm">
            <Bike size={15} className="text-[#3a8f92]" />
            Refurbished cycles
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#d6dddf] bg-white px-4 py-2 shadow-sm">
            <ChartNoAxesCombined size={15} className="text-[#3a8f92]" />
            10 years on campus
          </span>
        </div>
      </div>
    </section>
  );
}
