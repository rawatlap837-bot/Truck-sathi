import { vehicles } from "../data/content";
import { Section, Img, BookButton } from "./shared";
import VehicleIcon from "./VehicleIcon";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function VehicleTypes() {
  return (
    <Section id="vehicles">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mt-2 font-serif text-2xl font-extrabold leading-tight text-navy sm:text-3xl md:text-4xl">{vehicles.title}</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm font-normal leading-6 text-slate-600 sm:text-base sm:leading-7">
          From <strong className="font-semibold text-navy">personal vehicles</strong> to <strong className="font-semibold text-brand">heavy commercial fleets</strong>, we have a <strong className="font-semibold text-navy">GPS tracking device</strong> for every type of vehicle.
        </p>
      </div>
      <ul className="mx-auto mt-8 grid w-full max-w-none grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:relative lg:left-16 lg:mx-[-4rem] lg:grid-cols-6 lg:gap-5">
        {vehicles.items.map((item) => (
          <li key={item.name} className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-3 text-center shadow-sm shadow-slate-900/5 transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/10 sm:p-4">
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-5 top-0 h-1 rounded-b-full bg-gradient-to-r from-sky-200 via-brand/70 to-sky-200 opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative flex h-36 items-center justify-center overflow-hidden rounded-xl border border-blue-50 bg-gradient-to-br from-blue-50 via-white to-sky-100 sm:h-40">
              <div aria-hidden="true" className="absolute h-20 w-20 rounded-full bg-white/80 blur-md" />
              {item.image ? (
                // Real photo: add your image path in content.js
                <Img src={item.image} alt={item.name} className="vehicle-motion relative z-10 h-full w-full object-contain transition-transform duration-300 group-hover:scale-110" />
              ) : (
                // No photo: animated SVG vehicle with spinning wheels
                <div className="relative z-10 w-full px-1 transition-transform duration-300 group-hover:scale-110">
                  <VehicleIcon type={item.type} label={item.name} />
                </div>
              )}
            </div>
            <div className="mt-3 flex min-h-10 items-center justify-center gap-1">
              <p className="text-sm font-bold leading-snug text-navy sm:text-base lg:whitespace-nowrap lg:text-[13px]">{item.name}</p>
              <ArrowUpRight size={15} aria-hidden="true" className="shrink-0 text-brand/70 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 lg:hidden" />
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-8 text-center">
        <BookButton>Find Your GPS Device <ArrowRight size={17} /></BookButton>
      </div>
    </Section>
  );
}
