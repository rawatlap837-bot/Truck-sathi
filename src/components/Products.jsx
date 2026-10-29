import { ArrowRight, Check } from "lucide-react";
import { products } from "../data/content";
import { Section, SectionHeading, Img, BookButton, bookingUrl } from "./shared";

const rupees = (n) => "₹" + n.toLocaleString("en-IN");

export default function Products() {
  return (
    <Section id="pricing" className="bg-soft">
      <SectionHeading eyebrow={products.eyebrow} title={products.title} text={products.text} />

      <div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {products.items.map((item) => (
          <article key={item.name} className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm shadow-slate-900/5 transition duration-200 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/10">
            <Img src={item.image} alt={item.name} fallback="📡" className="h-28 w-full rounded-lg object-contain" />
            <h3 className="mt-3 font-semibold text-navy">{item.name}</h3>
            <ul className="mt-2 flex-1 space-y-1 text-xs text-slate-600">
              {item.points.map((p) => (
                <li key={p} className="flex gap-1.5"><Check size={14} className="mt-0.5 shrink-0 text-brand" />{p}</li>
              ))}
            </ul>
            <p className="mt-4 text-2xl font-bold text-navy">
              {rupees(item.price)} <span className="text-sm font-normal text-slate-400 line-through">{rupees(item.oldPrice)}</span>
            </p>
            <BookButton extra={`Product: ${item.name}`} className="mt-3 !py-2 text-sm">
              Book Now <ArrowRight size={16} />
            </BookButton>
          </article>
        ))}

        {/* Bulk orders card */}
        <article className="flex flex-col justify-center rounded-2xl bg-gradient-to-br from-navy to-slate-900 p-6 text-center text-white shadow-lg sm:col-span-2 lg:col-span-3 xl:col-span-1">
          <h3 className="font-serif text-xl font-bold">{products.bulk.title}</h3>
          <p className="mt-2 text-sm text-blue-100">{products.bulk.text}</p>
          <a href={bookingUrl("Bulk order enquiry")} target="_blank" rel="noreferrer"
             className="button-shine mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold hover:bg-brand-dark">
            {products.bulk.cta} <ArrowRight size={16} />
          </a>
        </article>
      </div>
    </Section>
  );
}
