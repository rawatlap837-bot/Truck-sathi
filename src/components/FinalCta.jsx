import { finalCta } from "../data/content";

export default function FinalCta() {
  return (
    <section id="support" data-fade-in className="bg-navy px-4 py-10 text-white sm:px-5 sm:py-12">
      <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-2 md:gap-10">
        <div className="mx-auto max-w-xl text-center md:mx-0 md:text-left">
          <h2 className="font-serif text-3xl font-bold leading-tight sm:text-4xl">{finalCta.title}</h2>
          <p className="mt-3 text-sm leading-6 text-blue-100 sm:text-base">{finalCta.text}</p>
        </div>
        <ul className="mx-auto grid w-full max-w-xl grid-cols-2 gap-x-5 gap-y-4 sm:grid-cols-4 md:mx-0">
          {finalCta.highlights.map(({ icon: Icon, label }) => (
            <li key={label} className="flex flex-col items-center gap-2 text-center text-xs font-medium text-blue-50 sm:text-sm">
              <Icon className="text-sky-200" size={24} />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
