import { vehicles } from "../data/content";
import { Section, SectionHeading, Img } from "./shared";

export default function VehicleTypes() {
  return (
    <Section id="vehicles">
      <SectionHeading eyebrow={vehicles.eyebrow} title={vehicles.title} text={vehicles.text} />
      <ul className="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
        {vehicles.items.map((item) => (
          <li key={item.name} className="group rounded-2xl border border-slate-200/80 bg-white p-4 text-center shadow-sm shadow-slate-900/5 transition duration-200 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/10">
            <Img src={item.image} alt={item.name} fallback={item.emoji} className="h-20 w-full rounded-lg object-contain" />
            <p className="mt-3 text-xs font-semibold text-navy">{item.name}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
