import { useEffect, useState } from "react";
import { Bike, RefreshCw } from "lucide-react";

export default function BrowseCycles() {
  const [cycles, setCycles] = useState([]);
  const [status, setStatus] = useState("loading");

  const loadCycles = async () => {
    setStatus("loading");

    try {
      const response = await fetch("/api/cycles?available=true");
      if (!response.ok) throw new Error("Unable to load cycles.");

      const data = await response.json();
      setCycles(Array.isArray(data) ? data : []);
      setStatus("ready");
    } catch {
      setStatus("error");
    }
  };

  useEffect(() => {
    loadCycles();
  }, []);

  return (
    <section className="px-6 py-20 text-[#123238]">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow text-[#3a8f92]">// Available now</p>
        <h1 className="mt-3 text-4xl font-bold text-[#102025] sm:text-5xl">
          Browse <span className="text-[#3a8f92]">Cycles</span>
        </h1>
        <p className="mt-4 max-w-2xl text-[#4a5c60]">
          Every listed cycle has been checked and refurbished by the RECycle team.
        </p>

        {status === "loading" && (
          <p className="mt-10 text-[#4a5c60]">Loading available cycles…</p>
        )}

        {status === "error" && (
          <div className="mt-10 rounded-md border border-[#cfd8dc] bg-white p-6 text-[#4a5c60] shadow-[0_4px_10px_rgba(0,0,0,0.08)]">
            <p>We could not load the collection right now.</p>
            <button type="button" onClick={loadCycles} className="btn-secondary mt-4 text-sm">
              <RefreshCw size={16} /> Try again
            </button>
          </div>
        )}

        {status === "ready" && cycles.length === 0 && (
          <div className="mt-10 rounded-md border border-[#cfd8dc] bg-white p-8 text-center text-[#4a5c60] shadow-[0_4px_10px_rgba(0,0,0,0.08)]">
            No cycles are currently available. Please check back soon.
          </div>
        )}

        {status === "ready" && cycles.length > 0 && (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cycles.map((cycle) => (
              <article key={cycle._id} className="overflow-hidden rounded-md border border-[#cfd8dc] bg-white p-6 shadow-[0_4px_10px_rgba(0,0,0,0.08)]">
                {cycle.imageUrl ? (
                  <img src={cycle.imageUrl} alt={cycle.name} className="mb-5 h-44 w-full rounded-xl object-cover" />
                ) : (
                  <div className="mb-5 flex h-44 items-center justify-center rounded-xl bg-[#edf6f7] text-[#3a8f92]">
                    <Bike size={42} aria-hidden="true" />
                  </div>
                )}
                <p className="font-mono text-xs uppercase tracking-widest text-[#3a8f92]">{cycle.condition}</p>
                <h2 className="mt-2 font-display text-xl font-semibold text-[#243337]">{cycle.name}</h2>
                <p className="mt-1 text-sm text-[#4a5c60]">{cycle.type}</p>
                <p className="mt-5 font-display text-2xl font-bold text-[#3a8f92]">
                  ₹{cycle.monthlyRate}<span className="text-sm font-normal text-[#4a5c60]"> /month</span>
                </p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
