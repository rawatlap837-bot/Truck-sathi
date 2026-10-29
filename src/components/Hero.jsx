import { ArrowRight, ShieldCheck, MapPin, Radio } from "lucide-react";
import { hero } from "../data/content";
import { BookButton, Img } from "./shared";

export default function Hero() {
  return (
    <section id="home" data-fade-in className="relative isolate overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50 px-4 pb-8 pt-7 sm:px-5 sm:pb-14 sm:pt-12 md:pb-20 md:pt-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-28 -top-36 h-96 w-96 rounded-full bg-sky-200/35 blur-3xl" />
        <div className="absolute -right-24 top-10 h-[30rem] w-[30rem] rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.16] [background-image:radial-gradient(#1d6cf2_0.7px,transparent_0.7px)] [background-size:24px_24px]" />
        <div className="absolute -left-20 top-[38%] h-64 w-64 rounded-full border border-blue-300/25" />
        <div className="absolute -left-12 top-[42%] h-48 w-48 rounded-full border border-blue-300/20" />
        <div className="absolute right-[8%] top-16 hidden h-3 w-3 rounded-full bg-brand/40 shadow-[0_0_26px_8px_rgba(29,108,242,0.16)] sm:block" />
        <svg className="absolute right-0 top-0 hidden h-full w-[55%] opacity-[0.13] md:block" viewBox="0 0 700 600" fill="none" preserveAspectRatio="none">
          <path d="M740 35C605 65 610 150 493 173S331 214 394 286s-50 106-164 110S90 466 164 592" stroke="#1d6cf2" strokeWidth="2" strokeDasharray="7 10" />
          <path d="M740 60C641 111 663 170 563 205S434 244 473 304" stroke="#1d6cf2" strokeWidth="1.5" />
          <circle cx="394" cy="286" r="7" fill="#1d6cf2" />
          <circle cx="164" cy="592" r="7" fill="#1d6cf2" />
        </svg>
      </div>
      <div className="mx-auto grid w-full max-w-6xl min-w-0 items-center gap-3 text-center sm:gap-7 md:grid-cols-2 md:gap-8 md:text-left">
        <div className="relative z-10">
          <span className="inline-flex items-center rounded-full border border-white/80 bg-white/65 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand shadow-[0_6px_24px_rgba(29,108,242,0.12)] backdrop-blur-xl sm:text-[11px]">
            <span aria-hidden="true" className="mr-2 h-1.5 w-1.5 rounded-full bg-brand shadow-[0_0_10px_rgba(29,108,242,0.8)]" />
            {hero.badge}
          </span>
          <h1 className="mx-auto mt-3 max-w-xl font-serif text-[2.35rem] font-bold leading-[1.04] tracking-[-0.04em] text-navy sm:mt-5 sm:text-[3.5rem] md:mx-0 md:text-7xl">
            {hero.title}<span className="mt-1 block font-semibold italic text-brand">{hero.highlight}</span>
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-[15px] leading-6 text-slate-600 sm:mt-5 sm:text-lg md:mx-0">
            Live location tracking, <strong className="font-bold text-navy">better security</strong> and <strong className="font-bold text-brand">complete control</strong> for your <strong className="font-bold text-navy">bike, car, truck or fleet</strong>.
          </p>
          <ul className="mx-auto mt-4 grid max-w-md grid-cols-2 gap-x-3 gap-y-3 sm:mt-7 sm:grid-cols-4 sm:gap-x-4 md:mx-0">
            {hero.highlights.map(({ icon: Icon, label }) => (
              <li key={label} className="group flex flex-col items-center gap-1.5 text-center text-xs font-semibold text-navy sm:text-sm">
                <span className="hero-icon-motion flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-100 bg-white/90 text-brand shadow-sm shadow-blue-900/10 transition duration-200 group-hover:-translate-y-1 group-hover:border-brand/30 group-hover:bg-brand group-hover:text-white group-hover:shadow-md group-hover:shadow-brand/20 sm:h-12 sm:w-12">
                  <Icon size={22} strokeWidth={2.2} />
                </span>
                {label}
              </li>
            ))}
          </ul>
          <BookButton className="mt-5 w-full !py-3 text-sm sm:mt-8 sm:w-auto sm:!py-3 sm:text-base">{hero.cta} <ArrowRight size={18} /></BookButton>
          <p className="mt-3 flex items-center justify-center gap-2 text-[11px] font-medium text-slate-600 md:justify-start sm:text-xs"><ShieldCheck size={16} className="shrink-0 text-brand" />{hero.trust}</p>
        </div>
        <div className="relative mx-auto flex w-full min-w-0 items-center justify-center md:mt-0">
          <div aria-hidden="true" className="absolute h-[72%] w-[78%] rounded-full bg-blue-300/40 blur-3xl" />
          <div className="relative isolate flex w-full items-center justify-center overflow-hidden rounded-[2rem] border border-white/80 bg-white/45 px-2 py-3 shadow-[0_20px_60px_rgba(29,108,242,0.14)] backdrop-blur-sm sm:rounded-[2.5rem] sm:px-4 sm:py-5">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-white/80 via-white/20 to-blue-100/50" />
            <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-12 -z-10 h-36 w-36 rounded-full bg-sky-200/60 blur-3xl" />
            <Img src={hero.image} alt="GPS tracking for all vehicles" fallback="🚚📍📱" className="relative z-10 mx-auto h-64 w-full max-w-3xl min-w-0 object-contain drop-shadow-[0_16px_18px_rgba(15,42,92,0.16)] sm:h-80 md:h-[34rem]" />
          </div>
          <div className="absolute bottom-5 left-2 z-20 hidden items-center gap-2 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 text-sm font-semibold text-navy shadow-lg shadow-blue-900/10 backdrop-blur sm:flex md:bottom-10 md:left-0">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-brand"><MapPin size={18} /></span>
            <span>Live location <span className="block text-xs font-normal text-slate-500">Know where your vehicle is</span></span>
          </div>
          <div className="absolute right-1 top-8 z-20 hidden items-center gap-2 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 text-sm font-semibold text-navy shadow-lg shadow-blue-900/10 backdrop-blur lg:flex">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-brand"><Radio size={18} /></span>
            <span>Smart alerts <span className="block text-xs font-normal text-slate-500">Stay informed on the move</span></span>
          </div>
        </div>
      </div>
    </section>
  );
}
