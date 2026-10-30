import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock3, Headset, MessageCircle, ShieldCheck, Truck } from "lucide-react";
import { brand } from "../data/content";
import { bookingUrl } from "./shared";
import { submitBooking } from "../lib/checkout";

const payment = () => {
  try { return JSON.parse(sessionStorage.getItem("truckSathiPayment") || "null"); } catch { return null; }
};

function DetailsForm({ onSubmitted }) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    setBusy(true);
    setError("");
    const form = new FormData(event.currentTarget);
    try {
      await submitBooking(Object.fromEntries(form.entries()), payment());
      onSubmitted();
    } catch (err) {
      setError(err.message || "We couldn't save your details. Please try again.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-7 space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold text-navy">Full name<input name="name" autoComplete="name" required maxLength={100} className="mt-1.5 block w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-brand focus:ring-4 focus:ring-blue-100" placeholder="Your name" /></label>
        <label className="text-sm font-semibold text-navy">Mobile number<input name="phone" type="tel" autoComplete="tel" inputMode="tel" pattern="[0-9+() -]{8,18}" required className="mt-1.5 block w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-brand focus:ring-4 focus:ring-blue-100" placeholder="10-digit phone number" /></label>
      </div>
      <label className="block text-sm font-semibold text-navy">Email address <span className="font-normal text-slate-400">(optional)</span><input name="email" type="email" autoComplete="email" maxLength={150} className="mt-1.5 block w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-brand focus:ring-4 focus:ring-blue-100" placeholder="you@example.com" /></label>
      <label className="block text-sm font-semibold text-navy">Delivery address<textarea name="address" autoComplete="street-address" required maxLength={500} rows={3} className="mt-1.5 block w-full resize-y rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-brand focus:ring-4 focus:ring-blue-100" placeholder="House / street, area, city, state and PIN code" /></label>
      {error && <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
      <button disabled={busy} className="button-shine flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-5 py-4 font-bold text-white transition hover:bg-brand-dark disabled:cursor-wait disabled:opacity-70">{busy ? "Saving your details…" : "Continue to confirmation"} {!busy && <ArrowRight size={18} />}</button>
      <p className="text-center text-xs leading-5 text-slate-500">Your details help our team arrange delivery and setup for your GPS device.</p>
    </form>
  );
}

function ThankYou() {
  const whatsapp = bookingUrl("I have paid ₹199 for my GPS Vehicle Tracker. Please help with my order.");
  return (
    <div className="text-center">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-emerald-50 text-emerald-600 shadow-inner"><CheckCircle2 size={42} strokeWidth={1.8} /></div>
      <p className="mt-6 text-xs font-bold uppercase tracking-[.2em] text-brand">Payment received</p>
      <h1 className="mt-2 font-serif text-3xl font-bold text-navy sm:text-4xl">You’re on your way to safer journeys.</h1>
      <p className="mx-auto mt-4 max-w-lg leading-7 text-slate-600">Thank you for choosing Truck Sathi. Your booking details have reached our team. We’ll contact you shortly to confirm delivery and help you get started.</p>
      <div className="mt-8 grid gap-4 text-left sm:grid-cols-2">
        <a href={whatsapp} target="_blank" rel="noreferrer" className="group rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5 transition hover:-translate-y-1 hover:bg-emerald-50 hover:shadow-lg hover:shadow-emerald-900/5"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-sm"><MessageCircle size={22} /></span><span className="mt-4 block font-bold text-navy">Connect on WhatsApp</span><span className="mt-1 block text-sm leading-5 text-slate-600">Message our team now for a quick update on your booking.</span><span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-emerald-700">Chat with us <ArrowRight size={15} /></span></a>
        <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-5"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-brand shadow-sm"><Clock3 size={22} /></span><span className="mt-4 block font-bold text-navy">Prefer to wait?</span><span className="mt-1 block text-sm leading-5 text-slate-600">That’s all you need to do. A Truck Sathi team member will reach out using the details you shared.</span><span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand"><Headset size={15} /> Our team will be in touch</span></div>
      </div>
      <a href="/" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-brand"><ArrowLeft size={16} /> Back to Truck Sathi</a>
    </div>
  );
}

export default function Checkout() {
  const params = new URLSearchParams(window.location.search);
  const completed = params.get("payment") === "success" && Boolean(payment());
  const [submitted, setSubmitted] = useState(false);
  const setup = params.get("setup") === "payment";

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-sky-50 px-4 py-8 sm:px-6 sm:py-12">
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-sky-100/60 blur-3xl" />
      <a href="/" className="relative mx-auto flex w-fit items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-brand"><ArrowLeft size={16} /> Back to Truck Sathi</a>
      <section className="relative mx-auto mt-8 max-w-3xl overflow-hidden rounded-[2rem] border border-white bg-white/90 p-5 shadow-2xl shadow-blue-900/10 backdrop-blur sm:mt-10 sm:p-9 md:p-12">
        <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-sky-300 via-brand to-blue-700" />
        {setup ? (
          <div className="mx-auto max-w-xl">
            <div className="flex items-center gap-3 rounded-2xl bg-blue-50 p-4"><span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-brand shadow-sm"><Truck size={25} /></span><div><p className="font-bold text-navy">GPS Vehicle Tracker</p><p className="mt-0.5 text-sm text-slate-500">One device · Secure online booking</p></div><p className="ml-auto text-xl font-extrabold text-navy">₹199</p></div>
            <p className="mt-7 text-xs font-bold uppercase tracking-[.18em] text-brand">{setup ? "Checkout setup" : "Step 1 of 2 · Secure payment"}</p>
            <h1 className="mt-2 font-serif text-3xl font-bold text-navy sm:text-4xl">Book your GPS device</h1>
            <p className="mt-3 leading-6 text-slate-600">Pay ₹199 to reserve your device. After payment, share your delivery details so our team can arrange the next steps.</p>
            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950"><p className="font-bold">Online payment is not configured yet.</p><p className="mt-1">Add the Razorpay public key and Google Sheets web app URL to your deployment environment. No charge has been made. Contact us on WhatsApp if you’d like help completing the booking.</p><a href={bookingUrl("I want to book a GPS Vehicle Tracker for ₹199.")} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 font-bold text-emerald-700"><MessageCircle size={17} /> Contact Truck Sathi <ArrowRight size={16} /></a></div>
          </div>
        ) : !completed ? (
          <div className="mx-auto max-w-xl"><p className="text-xs font-bold uppercase tracking-[.18em] text-brand">Step 1 of 2 · Secure payment</p><h1 className="mt-2 font-serif text-3xl font-bold text-navy sm:text-4xl">Book your GPS device</h1><p className="mt-3 leading-6 text-slate-600">Pay ₹199 to reserve your device. After payment, share your delivery details so our team can arrange the next steps.</p><div className="mt-6 flex items-center gap-3 rounded-xl border border-emerald-100 bg-emerald-50/70 p-3 text-sm text-emerald-900"><ShieldCheck size={20} className="shrink-0 text-emerald-600" /><span>Secure payment powered by Razorpay. Your contact and address details come after payment.</span></div><p className="mt-7 text-sm text-slate-500">Select any booking button on the site to open checkout.</p></div>
        ) : submitted ? <ThankYou /> : <div className="mx-auto max-w-xl"><p className="text-xs font-bold uppercase tracking-[.18em] text-brand">Step 2 of 2 · Delivery details</p><h1 className="mt-2 font-serif text-3xl font-bold text-navy sm:text-4xl">Where should we send it?</h1><p className="mt-3 leading-6 text-slate-600">Payment confirmed. Add your details and our team will take it from there.</p><div className="mt-6 flex items-center gap-3 rounded-xl border border-emerald-100 bg-emerald-50/70 p-3 text-sm text-emerald-900"><CheckCircle2 size={20} className="shrink-0 text-emerald-600" /><span>₹199 payment received · ID {payment()?.id || "confirmed"}</span></div><DetailsForm onSubmitted={() => setSubmitted(true)} /></div>}
      </section>
      <p className="relative mt-6 text-center text-xs text-slate-400">{brand.name} · Here for every turn of your journey</p>
    </main>
  );
}
