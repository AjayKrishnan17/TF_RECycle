import { Recycle, Sparkles, HeartHandshake } from "lucide-react";

const stats = [
  { label: "Cycles refurbished yearly", value: "100+" },
  { label: "Years of impact", value: "10+" },
  { label: "Trusted by hundreds yearly", value: "500+" },
];

const cards = [
  {
    icon: Recycle,
    title: "What We Do",
    body: "We refurbish pre-owned bicycles and offer student-friendly rentals for first-years, giving unused cycles a second life and reducing campus waste.",
  },
  {
    icon: Sparkles,
    title: "Our Mission",
    body: "To make mobility on campus eco-friendly, affordable, and accessible for every student while nurturing a culture of sustainability.",
  },
  {
    icon: HeartHandshake,
    title: "Impact",
    body: "With strong admin support and an enthusiastic student team, RECycle continues to scale responsibly and serve newcomers each year.",
  },
];

export default function About() {
  return (
    <section className="px-6 py-20 text-[#123238]">
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="text-4xl font-bold text-[#102025] sm:text-5xl">
          About <span className="text-[#3a8f92]">RECycle Marketplace</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#4a5c60] sm:text-lg">
          A student-led sustainability initiative by Taskforce NIT Trichy,
          making campus mobility affordable and eco-friendly.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-3 rounded-md border border-[#cfd8dc] bg-white px-5 py-3 shadow-[0_4px_10px_rgba(0,0,0,0.08)]"
            >
              <span className="font-mono text-lg font-semibold text-[#3a8f92]">
                {stat.value}
              </span>
              <span className="text-left text-sm text-[#4a5c60]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-5 text-left sm:grid-cols-3">
          {cards.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-md border border-[#cfd8dc] bg-white p-7 shadow-[0_4px_10px_rgba(0,0,0,0.08)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-md border border-[#b9d2d5] bg-[#edf6f7] text-[#2d6f73]">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-[#243337]">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#4a5c60]">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
