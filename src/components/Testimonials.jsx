import { ArrowRight, Star } from "lucide-react";
import { testimonials } from "../data/content";
import { BookButton, Section, SectionHeading } from "./shared";

export default function Testimonials() {
  return (
    <Section>
      <SectionHeading eyebrow={testimonials.eyebrow} title={testimonials.title} />
      <div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-2 md:grid-cols-3">
        {testimonials.items.map((testimonial) => (
          <figure key={testimonial.name} className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm shadow-slate-900/5">
            <blockquote className="text-sm leading-6 text-slate-600">“{testimonial.quote}”</blockquote>
            <figcaption className="mt-4 flex items-center gap-3">
              {testimonial.photo
                ? <img src={testimonial.photo} alt={testimonial.name} className="h-11 w-11 rounded-full object-cover" />
                : <span className="flex h-11 w-11 items-center justify-center rounded-full bg-soft font-bold text-brand">{testimonial.name[0]}</span>}
              <div>
                <p className="text-sm font-semibold text-navy">{testimonial.name}</p>
                <p className="text-xs text-slate-500">{testimonial.role}</p>
                <div className="mt-1 flex text-amber-400">
                  {[...Array(5)].map((_, index) => <Star key={index} size={13} fill="currentColor" />)}
                </div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-8 text-center">
        <BookButton>Book With Confidence <ArrowRight size={17} /></BookButton>
      </div>
    </Section>
  );
}
