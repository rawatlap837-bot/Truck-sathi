import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { brand, navLinks } from "../data/content";
import { BookButton } from "./shared";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 shadow-sm shadow-slate-900/5 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center gap-3 px-4 py-1 sm:px-5 sm:py-1.5">
        <a href="#home" className="shrink-0" aria-label={`${brand.name} home`}>
          <img src={brand.logo} alt={brand.name} className="h-[4.5rem] w-auto max-w-44 object-contain sm:h-20 sm:max-w-60 lg:h-24 lg:max-w-72" />
        </a>

        {/* Desktop menu */}
        <ul className="hidden flex-1 items-center justify-center gap-7 text-sm font-medium xl:flex xl:text-lg">
          {navLinks.map((link) => (
            <li key={link.href}>
          <a href={link.href} className="transition-colors hover:text-brand">{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          <BookButton className="whitespace-nowrap !px-3 !py-2 text-xs sm:!px-4 sm:text-sm xl:!px-6 xl:!py-3 xl:text-lg">
            Book Now <ArrowRight size={15} />
          </BookButton>
          <button className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-navy transition hover:bg-soft xl:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="grid gap-1 border-t border-slate-100 bg-white/95 px-4 py-3 shadow-lg shadow-slate-900/5 backdrop-blur-xl xl:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)} className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-soft hover:text-brand focus-visible:outline-2 focus-visible:outline-brand">
                {link.label}<ArrowRight size={15} className="text-brand/60" />
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
