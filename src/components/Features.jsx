import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { features } from "../data/content";
import { BookButton, Section } from "./shared";

export default function Features() {
  return (
    <Section id="features">
      <div id="why" className="scroll-mt-24" />
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-serif text-2xl font-bold leading-tight text-navy sm:text-3xl md:text-4xl">{features.title}</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
          Powerful <strong className="font-bold text-navy">GPS tracking</strong> designed to keep your vehicles <strong className="font-bold text-brand">safe and connected</strong>, and help you stay informed. <span className="font-medium">Features may vary by device model.</span>
        </p>
      </div>

      <div className="mx-auto mt-8 grid max-w-5xl gap-8 lg:grid-cols-[1fr_300px]">
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {features.items.map(({ icon: Icon, title, note }) => (
            <li key={title} className="group relative flex min-h-40 flex-col items-center gap-2.5 overflow-hidden rounded-2xl border border-slate-100 bg-white p-4 text-center shadow-sm shadow-slate-900/5 transition duration-200 hover:-translate-y-1 hover:border-brand/25 hover:shadow-lg hover:shadow-brand/10 sm:min-h-44 sm:items-start sm:p-5 sm:text-left">
              <span aria-hidden="true" className="absolute inset-x-5 top-0 h-1 rounded-b-full bg-gradient-to-r from-sky-200 via-brand/70 to-sky-200 opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-3 text-brand shadow-sm transition duration-200 group-hover:-translate-y-0.5 group-hover:bg-blue-50 group-hover:text-brand"><Icon size={23} /></span>
              <p className="text-sm font-bold leading-snug text-navy sm:text-base">{title}</p>
              {note && <p className="-mt-1 text-xs font-medium text-slate-500 sm:text-sm">({note})</p>}
            </li>
          ))}
        </ul>

        <aside className="relative overflow-hidden rounded-2xl border border-brand/20 bg-gradient-to-br from-white via-white to-soft p-5 text-center shadow-lg shadow-brand/5 sm:p-6">
          <div aria-hidden="true" className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-100/70 blur-2xl" />
          <ShieldCheck className="relative mx-auto text-brand" size={40} />
          <h3 className="relative mt-3 font-bold text-navy">{features.trust.title}</h3>
          <ul className="mt-4 space-y-2 text-left text-sm">
            {features.trust.points.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand" /> {p}
              </li>
            ))}
          </ul>
        </aside>
      </div>
      <div className="mt-8 text-center">
        <BookButton>Book Your GPS Device <ArrowRight size={17} /></BookButton>
      </div>
    </Section>
  );
}
