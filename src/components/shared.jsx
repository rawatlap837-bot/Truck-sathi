import { brand } from "../data/content";

// WhatsApp booking link used by every "Book Now" button
export const bookingUrl = (extra = "") =>
  `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(brand.bookingMessage + " " + extra)}`;

// Wrapper that gives every section the same width and spacing
export function Section({ id, className = "", children }) {
  return (
    <section id={id} data-fade-in className={`px-4 py-12 sm:px-5 sm:py-14 md:py-20 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, text, center = true }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : ""}>
      <p className="text-xs font-semibold uppercase tracking-wider text-brand">{eyebrow}</p>
      <h2 className="mt-2 font-serif text-2xl font-bold leading-tight text-navy sm:text-3xl md:text-4xl">{title}</h2>
      {text && <p className="mt-3 text-slate-600">{text}</p>}
    </div>
  );
}

// Shows an image if the path works, otherwise an emoji or a soft placeholder
export function Img({ src, alt, fallback = "📷", className = "" }) {
  if (!src) {
    return <div className={`flex items-center justify-center bg-soft text-5xl ${className}`}>{fallback}</div>;
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={className}
      onError={(e) => { e.currentTarget.style.visibility = "hidden"; }}
    />
  );
}

export function BookButton({ children, className = "", extra = "" }) {
  return (
    <a
      href={bookingUrl(extra)}
      target="_blank"
      rel="noreferrer"
      className={`button-shine inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${className}`}
    >
      {children}
    </a>
  );
}
