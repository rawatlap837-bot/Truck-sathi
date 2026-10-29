import { AlertCircle } from "lucide-react";
import { problems } from "../data/content";
import { Section, SectionHeading, Img } from "./shared";

export default function Problems() {
  return (
    <Section className="bg-soft">
      <div className="mx-auto grid max-w-5xl items-center gap-8 text-center md:grid-cols-2 md:gap-10 md:text-left">
        <div>
          <SectionHeading eyebrow={problems.eyebrow} title={problems.title} text={problems.text} />
          <ul className="mx-auto mt-7 max-w-2xl space-y-3 text-left">
            {problems.items.map((text) => (
              <li key={text} className="flex items-start gap-3 rounded-xl border border-white/80 bg-white/70 p-3 text-sm leading-6 shadow-sm shadow-slate-900/5">
                <AlertCircle className="mt-0.5 shrink-0 text-brand" size={20} />{text}
              </li>
            ))}
          </ul>
        </div>
        <Img src={problems.image} alt="Truck on highway with live tracking" fallback="🚛" className="mx-auto aspect-[4/3] w-full max-w-xl rounded-2xl object-cover" />
      </div>
    </Section>
  );
}
