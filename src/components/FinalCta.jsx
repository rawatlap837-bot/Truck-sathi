import { finalCta } from "../data/content";
import { BookButton } from "./shared";

export default function FinalCta() {
  return (
    <section id="support" data-fade-in className="bg-navy px-4 py-12 text-white sm:px-5">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
        <div className="max-w-md text-center lg:text-left">
          <h2 className="font-serif text-3xl font-bold">{finalCta.title}</h2>
          <p className="mt-2 text-sm text-blue-100">{finalCta.text}</p>
          <BookButton className="mt-5">{finalCta.cta}</BookButton>
        </div>
        <ul className="mx-auto grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4 lg:mx-0">
          {finalCta.highlights.map(({ icon: Icon, label }) => (
            <li key={label} className="text-center text-xs">
              <Icon className="mx-auto mb-2" size={26} />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
