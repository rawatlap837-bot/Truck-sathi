import { MapPin } from "lucide-react";
import { footer } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-slate-950 px-5 py-6 text-xs text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 md:flex-row">
        <ul className="flex flex-wrap justify-center gap-5">
          {footer.links.map((link) => <li key={link}>{link}</li>)}
        </ul>
        <p>{footer.copyright}</p>
      </div>
      <p className="mx-auto mt-3 flex max-w-6xl items-center justify-center gap-1.5 text-center">
        <MapPin size={14} className="text-brand" /> {footer.location}
      </p>
    </footer>
  );
}
