import { Quote, Star } from "lucide-react";
import { testimonials } from "../data/content";
import { Section, SectionHeading } from "./shared";

export default function Testimonials() {
  return (
    <Section className="bg-gradient-to-b from-white via-blue-50/40 to-white pb-6 sm:pb-8 md:pb-10">
      <SectionHeading eyebrow={testimonials.eyebrow} title={testimonials.title} />
      <div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-2 md:grid-cols-3">
        {testimonials.items.map((testimonial) => (
          <figure key={testimonial.name} className="group relative flex min-h-60 flex-col overflow-hidden rounded-3xl border border-slate-200/70 bg-white p-5 shadow-[0_12px_36px_rgba(15,42,92,0.06)] transition duration-300 hover:-translate-y-1 hover:border-brand/25 hover:shadow-[0_20px_44px_rgba(29,108,242,0.12)] sm:p-6">
            <div aria-hidden="true" className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-blue-50 transition-transform duration-500 group-hover:scale-125" />
            <div className="relative flex items-center justify-between">
              <div className="flex gap-0.5 text-amber-400" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, index) => <Star key={index} size={15} fill="currentColor" />)}
              </div>
              <Quote aria-hidden="true" size={27} className="text-brand/25" />
            </div>
            <blockquote className="relative mt-5 flex-1 text-[15px] font-medium leading-7 text-slate-700">“{testimonial.quote}”</blockquote>
            <figcaption className="relative mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
              {testimonial.photo
                ? <img src={testimonial.photo} alt={testimonial.name} className="h-12 w-12 rounded-full border-2 border-white object-cover shadow-md ring-1 ring-blue-100" />
                : <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-blue-50 to-sky-100 font-bold text-brand shadow-sm ring-1 ring-blue-100">{testimonial.name[0]}</span>}
              <div>
                <p className="text-sm font-semibold text-navy">{testimonial.name}</p>
                <p className="text-xs text-slate-500">{testimonial.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
