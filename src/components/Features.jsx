import { CheckCircle2, ShieldCheck } from "lucide-react";
import { features } from "../data/content";
import { Section, SectionHeading } from "./shared";

export default function Features() {
  return (
    <Section id="features">
      <div id="why" className="scroll-mt-24" />
      <SectionHeading eyebrow={features.eyebrow} title={features.title} text={features.text} />

      <div className="mx-auto mt-8 grid max-w-5xl gap-8 lg:grid-cols-[1fr_300px]">
        <ul className="grid grid-cols-2 gap-3 sm:gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {features.items.map(({ icon: Icon, title, note }) => (
            <li key={title} className="flex flex-col items-center gap-2 rounded-2xl text-center sm:items-start sm:text-left border border-slate-100 bg-white p-4 shadow-sm shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-md">
              <span className="rounded-xl bg-soft p-3 text-brand"><Icon size={22} /></span>
              <p className="text-sm font-semibold text-navy">{title}</p>
              {note && <p className="-mt-1 text-xs text-slate-500">({note})</p>}
            </li>
          ))}
        </ul>

        <aside className="rounded-2xl border border-brand/20 bg-gradient-to-br from-white to-soft p-6 text-center shadow-lg shadow-brand/5">
          <ShieldCheck className="mx-auto text-brand" size={40} />
          <h3 className="mt-3 font-semibold text-navy">{features.trust.title}</h3>
          <ul className="mt-4 space-y-2 text-left text-sm">
            {features.trust.points.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand" /> {p}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  );
}
