import { ArrowUpRight, MapPin } from "lucide-react";
import { BookButton } from "./shared";

export default function StickyBookingBar() {
  return (
    <aside aria-label="Book a GPS device" className="fixed inset-x-0 bottom-0 z-[60] border-t border-white/10 bg-[#062f4d]/95 px-3 pb-[max(env(safe-area-inset-bottom),0.65rem)] pt-2.5 text-white shadow-[0_-12px_36px_rgba(2,20,36,0.24)] backdrop-blur-xl sm:px-5 sm:py-3">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2.5 sm:gap-6">
        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-300/10 text-sky-200 sm:h-11 sm:w-11">
            <MapPin size={18} className="sm:hidden" />
            <MapPin size={21} className="hidden sm:block" />
          </span>
          <div className="min-w-0">
            <p className="truncate text-[10px] font-semibold text-sky-200 sm:text-xs">Get started with Truck Sathi</p>
            <p className="truncate text-xs font-bold sm:mt-0.5 sm:text-sm">Reserve your GPS device</p>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          <div className="text-right leading-none">
            <span className="block text-[9px] font-semibold text-sky-100/75 sm:text-[10px]">Booking</span>
            <span className="mt-0.5 block text-lg font-extrabold tracking-tight sm:text-2xl">₹199</span>
          </div>
          <BookButton className="!rounded-xl !px-3 !py-2.5 text-xs !shadow-none sm:!px-5 sm:!py-3 sm:text-sm">
            Book now
            <ArrowUpRight size={15} />
          </BookButton>
        </div>
      </div>
    </aside>
  );
}
