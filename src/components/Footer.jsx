import { MapPin } from "lucide-react";
import { brand, footer, navLinks } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-5 py-8 text-slate-300 sm:px-6 sm:py-10">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <a href="#home" className="inline-block" aria-label={`${brand.name} home`}>
            <img src="/images/truck%20sathi%20icon.png" alt={`${brand.name} logo`} width="64" height="64" className="h-16 w-16 object-contain" />
          </a>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">GPS Tracking Support For Bikes, Cars, Trucks, And Fleets.</p>
          <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-slate-400"><MapPin size={14} className="shrink-0 text-sky-300" />{footer.location}</p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-3 text-sm md:max-w-sm md:justify-end">
            {navLinks.map((link) => (
              <li key={link.href}><a href={link.href} className="transition hover:text-white focus-visible:outline-2 focus-visible:outline-sky-300">{link.label}</a></li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mx-auto mt-7 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-white/10 pt-4 text-center text-xs text-slate-500 sm:flex-row sm:text-left">
        <p>{footer.copyright.replace(/\d{4}/, new Date().getFullYear())}</p>
        <a href="#home" className="transition hover:text-white">Back to top ↑</a>
      </div>
    </footer>
  );
}
