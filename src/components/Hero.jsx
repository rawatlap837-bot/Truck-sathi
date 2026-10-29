import { ArrowRight, ShieldCheck, MapPin, Radio } from "lucide-react";
import { hero } from "../data/content";
import { BookButton, Img } from "./shared";

export default function Hero() {
  return (
    <section id="home" data-fade-in className="relative isolate overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50 px-4 pb-10 pt-10 sm:px-5 sm:pb-14 sm:pt-12 md:pb-20 md:pt-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-28 -top-36 h-96 w-96 rounded-full bg-sky-200/35 blur-3xl" />
        <div className="absolute -right-24 top-10 h-[30rem] w-[30rem] rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.16] [background-image:radial-gradient(#1d6cf2_0.7px,transparent_0.7px)] [background-size:24px_24px]" />
      </div>
      <div className="mx-auto grid w-full max-w-6xl min-w-0 items-center gap-5 text-center sm:gap-7 md:grid-cols-2 md:gap-8 md:text-left">
        <div className="relative z-10">
          <span className="inline-block rounded-full bg-brand px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white sm:text-[11px]">{hero.badge}</span>
          <h1 className="mx-auto mt-4 max-w-xl font-serif text-4xl font-bold leading-[1.08] tracking-tight text-navy sm:mt-5 sm:text-5xl md:mx-0 md:text-6xl">
            {hero.title}<span className="block text-brand">{hero.highlight}</span>
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-slate-600 sm:mt-5 sm:text-lg md:mx-0">{hero.text}</p>
          <ul className="mx-auto mt-6 grid max-w-md grid-cols-2 gap-x-3 gap-y-4 sm:mt-7 sm:grid-cols-4 sm:gap-x-4 md:mx-0">
            {hero.highlights.map(({ icon: Icon, label }) => (
              <li key={label} className="text-center text-xs font-medium"><Icon className="mx-auto mb-1 text-brand" size={26} />{label}</li>
            ))}
          </ul>
          <BookButton className="mt-7 w-full sm:mt-8 sm:w-auto">{hero.cta} <ArrowRight size={18} /></BookButton>
          <p className="mt-4 flex items-center justify-center gap-2 text-xs font-medium text-slate-600 md:justify-start"><ShieldCheck size={16} className="shrink-0 text-brand" />{hero.trust}</p>
        </div>
        <div className="relative mx-auto flex w-full min-w-0 items-center justify-center md:mt-0">
          <div aria-hidden="true" className="absolute h-[72%] w-[78%] rounded-full bg-blue-200/30 blur-3xl" />
          <Img src={hero.image} alt="GPS tracking for all vehicles" fallback="🚚📍📱" className="relative z-10 mx-auto h-56 w-full max-w-3xl min-w-0 object-contain drop-shadow-none sm:h-80 md:h-[34rem]" />
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
