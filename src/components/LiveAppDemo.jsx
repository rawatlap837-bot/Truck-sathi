import { useState } from "react";
import { ArrowUpRight, Check, Copy, KeyRound, Smartphone } from "lucide-react";
import { Section } from "./shared";

const playStoreUrl = "https://play.google.com/store/apps/details?id=com.trucksathi.myapp&hl=en_IN";

const screens = [
  {
    src: "https://trucksathi.co.in/wp-content/uploads/2026/10/truck-sathi-app-ui-1-scaled.jpg",
    alt: "Truck Sathi app dashboard and vehicle screen",
    title: "Your Dashboard",
    description: "See your vehicles and key updates at a glance.",
  },
  {
    src: "https://trucksathi.co.in/wp-content/uploads/2026/10/truck-sathi-app-ui-2-scaled.jpg",
    alt: "Truck Sathi app vehicle management screen",
    title: "Manage Vehicles",
    description: "Check vehicle status and access useful controls.",
  },
  {
    src: "https://trucksathi.co.in/wp-content/uploads/2026/10/truck-sathi-app-live-map-view.jpg",
    alt: "Live map view in the Truck Sathi app",
    title: "Live Map View",
    description: "Follow your vehicle location and route on the map.",
  },
];

export default function LiveAppDemo() {
  const [copiedValue, setCopiedValue] = useState("");

  const copyDemoValue = async (label, value) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedValue(label);
      window.setTimeout(() => setCopiedValue(""), 1800);
    } catch {
      setCopiedValue("");
    }
  };

  return (
    <Section id="app-demo" className="bg-gradient-to-br from-[#073b5c] via-[#06496d] to-[#062f4d] text-white">
      <div className="grid items-center gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-10 xl:gap-12">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200/20 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-sky-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.8)]" />
            Truck Sathi App
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Explore the app before you download
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-sky-100 sm:text-base sm:leading-7 lg:mx-0">
            Preview your dashboard, vehicle controls and live map. Download Truck Sathi to keep your fleet connected wherever you go.
          </p>
          <a
            href={playStoreUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#073b5c] shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-sky-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-6 sm:text-base"
          >
            <Smartphone size={19} />
            Download on Google Play
            <ArrowUpRight size={17} />
          </a>
          <p className="mt-3 text-xs text-sky-200">Available for Android</p>
        </div>

        <aside className="mx-auto w-full max-w-2xl rounded-2xl border-2 border-dashed border-sky-500 bg-white p-3 text-[#073b5c] shadow-xl sm:p-4 lg:col-span-2 lg:col-start-1 lg:row-start-2">
          <h3 className="mb-2 flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-sky-600 sm:text-sm">
            <KeyRound size={15} className="text-orange-600" /> Demo Login Details
          </h3>
          {[
            { label: "Register Number", value: "9157405800" },
            { label: "OTP", value: "654321" },
          ].map(({ label, value }) => (
            <div key={label} className="mb-2 flex items-center justify-between gap-3 rounded-lg bg-sky-100 px-3 py-2">
              <div>
                <p className="text-[11px] font-medium text-slate-500">{label}</p>
                <p className="text-base font-extrabold tracking-[0.12em] sm:text-lg">{value}</p>
              </div>
              <button
                type="button"
                onClick={() => copyDemoValue(label, value)}
                className="inline-flex min-w-[4.5rem] items-center justify-center gap-1 rounded-md bg-sky-500 px-2.5 py-2 text-xs font-bold text-white transition hover:bg-sky-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                aria-label={`Copy ${label}`}
              >
                {copiedValue === label ? <Check size={14} /> : <Copy size={13} />}
                {copiedValue === label ? "Copied" : "Copy"}
              </button>
            </div>
          ))}
          <p className="text-[11px] leading-4 text-slate-500">Ye sirf demo account hai — koi signup ya payment nahi lagega.</p>
        </aside>

        <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-4 [scrollbar-width:thin] sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-3 sm:overflow-visible sm:px-0 sm:pb-0 lg:gap-4">
          {screens.map((screen, index) => (
            <article key={screen.title} className="group w-[calc(100vw-2rem)] max-w-[30rem] shrink-0 snap-center overflow-hidden rounded-2xl border border-white/15 bg-white/[0.08] p-3 shadow-xl shadow-black/10 backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:border-sky-200/40 hover:bg-white/[0.12] sm:w-auto sm:max-w-none sm:shrink sm:snap-align-none sm:p-2.5">
              <div className="overflow-hidden rounded-xl bg-[#f4f7fb]">
                <img
                  src={screen.src}
                  alt={screen.alt}
                  loading="lazy"
                  className={`block h-auto max-h-[78vh] min-h-[36rem] w-full object-contain object-top transition duration-300 group-hover:scale-[1.02] sm:h-64 sm:min-h-0 sm:object-cover lg:h-[22rem] xl:h-[25rem] ${index === 2 ? "sm:object-center" : ""}`}
                />
              </div>
              <div className="px-1 pb-1 pt-3 text-center sm:px-0.5">
                <h3 className="text-sm font-bold text-white sm:text-base">{screen.title}</h3>
                <p className="mt-1 text-xs leading-5 text-sky-100/80">{screen.description}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="-mt-5 text-center text-xs font-medium text-sky-100/75 sm:hidden">Swipe to explore all app screens →</p>
      </div>
    </Section>
  );
}
