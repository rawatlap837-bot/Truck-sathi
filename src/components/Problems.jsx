import { AlertCircle, ArrowRight } from "lucide-react";
import { problems } from "../data/content";
import { Section, Img, BookButton } from "./shared";

export default function Problems() {
  const pointerHighlights = [
    "Current Location",
    "Vehicle Movement",
    "Past Routes And Trip History",
    "Vehicle Security And Unauthorized Movement",
    "Multiple Vehicles",
    "Alerts When Supported Tracking Conditions Are Triggered",
  ];

  return (
    <Section className="bg-soft">
      <div className="mx-auto grid max-w-6xl items-center gap-8 text-center md:grid-cols-2 md:gap-10 md:text-left">
        <div>
          <div className="mx-auto max-w-2xl text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand">{problems.eyebrow}</p>
            <h2 className="mt-2 font-serif text-2xl font-bold leading-tight text-navy sm:text-3xl md:text-4xl">{problems.title}</h2>
            <p className="mt-3 text-slate-600">
              We Solve The <strong className="font-bold text-navy">Real Challenges</strong> <strong className="font-bold text-brand">Vehicle Owners</strong> Face Every Day.
            </p>
          </div>
          <ul className="mx-auto mt-7 grid max-w-2xl gap-3 text-left">
            {problems.items.map((text, index) => (
              <li key={text} className="group relative flex min-h-20 items-center gap-3 overflow-hidden rounded-2xl border border-white/90 bg-white/85 p-3.5 text-sm font-medium leading-6 text-slate-700 shadow-sm shadow-slate-900/5 transition duration-200 hover:-translate-y-0.5 hover:border-brand/25 hover:shadow-md hover:shadow-brand/10 sm:p-4">
                <span aria-hidden="true" className="absolute inset-y-3 left-0 w-1 rounded-r-full bg-brand/30 transition-colors group-hover:bg-brand" />
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand transition-colors group-hover:bg-brand group-hover:text-white"><AlertCircle size={19} /></span>
                <span>
                  {(() => {
                    const highlight = pointerHighlights[index];
                    const start = text.toLowerCase().indexOf(highlight.toLowerCase());
                    if (start < 0) return text;
                    return <>{text.slice(0, start)}<strong className="font-bold text-navy">{text.slice(start, start + highlight.length)}</strong>{text.slice(start + highlight.length)}</>;
                  })()}
                </span>
                <span aria-hidden="true" className="absolute right-3 top-2 text-[10px] font-bold text-brand/35">0{index + 1}</span>
              </li>
            ))}
          </ul>
          <BookButton className="mt-6 w-full sm:w-auto">Get GPS Protection <ArrowRight size={17} /></BookButton>
        </div>
        <Img src={problems.image} alt="Truck Sathi GPS tracking for multiple vehicle types" fallback="🚛" className="mx-auto aspect-[16/9] w-full max-w-none rounded-2xl border-0 bg-transparent p-0 object-contain shadow-xl shadow-blue-900/10 md:sticky md:top-28 md:scale-110" />
      </div>
    </Section>
  );
}
