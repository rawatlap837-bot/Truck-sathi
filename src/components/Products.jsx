import { ArrowRight, Check } from "lucide-react";
import { products } from "../data/content";
import { Section, SectionHeading, BookButton } from "./shared";

const rupees = (n) => "₹" + n.toLocaleString("en-IN");

export default function Products() {
  return (
    <Section id="pricing" className="bg-soft">
      <SectionHeading eyebrow={products.eyebrow} title={products.title} text={products.text} />

      <div className="mx-auto mt-8 grid max-w-5xl place-items-center">
        {products.items.map((item) => (
          <article key={item.name} className="grid w-full max-w-sm overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm shadow-slate-900/5 transition duration-200 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/10 md:max-w-5xl md:grid-cols-2">
            <div className="flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-sky-100 p-3 sm:p-5">
              <img src="/images/product%20image.webp" alt="Truck Sathi GPS vehicle tracker product" className="aspect-square w-full rounded-xl bg-white object-contain md:h-full md:min-h-[30rem]" />
            </div>
            <div className="flex flex-col p-5 sm:p-7 md:justify-center md:p-10">
              <span className="w-fit rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand">Live GPS Tracking</span>
              <h3 className="mt-4 font-serif text-2xl font-bold text-navy sm:text-3xl">{item.name}</h3>
              <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">Track your vehicle with live location access and mobile app support in a compact, waterproof device.</p>
              <p className="mt-5 text-xs font-bold uppercase tracking-wider text-slate-500">Product Highlights</p>
              <ul className="mt-2 flex-1 space-y-2 text-sm text-slate-700">
                {item.points.map((p) => (
                  <li key={p} className="flex items-center gap-2"><span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-brand"><Check size={13} /></span>{p}</li>
                ))}
              </ul>
              <div className="mt-6 flex items-center justify-between gap-3 rounded-2xl border border-brand/15 bg-gradient-to-r from-blue-50 to-white px-4 py-3">
                <div><p className="text-xs font-bold uppercase tracking-wider text-brand">Price</p><p className="mt-0.5 text-4xl font-extrabold tracking-tight text-navy">{rupees(item.price)}</p></div>
                <span className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-brand shadow-sm">One GPS Device</span>
              </div>
              <BookButton extra={`Product: ${item.name}`} className="mt-4 !py-3 text-sm">
                Get This GPS Tracker <ArrowRight size={16} />
              </BookButton>
            </div>
          </article>
        ))}

      </div>
    </Section>
  );
}
