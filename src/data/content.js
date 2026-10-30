/**
 * ALL TEXT, PRICES, LINKS AND IMAGES LIVE HERE.
 * Edit this file to change the page. No need to touch the components.
 * Images: put files in /public/images and use paths like "/images/hero.png".
 */
import {
  MapPin, ShieldCheck, Route, Bell, Power, Video, BadgeCheck, Headphones, Radar,
} from "lucide-react";

export const brand = {
  name: "Truck Sathi",
  tagline: "Har Mod Pe Aapke Saath",
  logo: "/images/truck%20sathi.png", // optional, text logo is used if missing
  whatsapp: "910000000000", // country code + number, no + sign
  bookingMessage: "Hi, I want to book a GPS device.",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#vehicles" },
  { label: "Features", href: "#features" },
  { label: "Why Us", href: "#why" },
  { label: "Pricing", href: "#pricing" },
  { label: "Support", href: "#support" },
];

export const hero = {
  badge: "GPS Vehicle Tracking Solutions",
  title: "Track Your Vehicle",
  highlight: "Stay in Control",
  text: "Live location tracking, better security and complete control, for your bike, car, truck or fleet.",
  image: "/images/heroimage.png",
  cta: "Book Your GPS Device Today",
  trust: "Secure  •  Reliable  •  Trusted Across India",
  highlights: [
    { icon: MapPin, label: "Live Tracking" },
    { icon: ShieldCheck, label: "Vehicle Security" },
    { icon: Route, label: "Route History" },
    { icon: Bell, label: "Smart Alerts" },
  ],
};

/**
 * Vehicle cards.
 * type  = which animated SVG vehicle with spinning wheels to show
 *         (bike, car, auto, pickup, truck, bus)
 * image = optional photo path. If you add one, it replaces the SVG vehicle.
 */
export const vehicles = {
  eyebrow: "GPS tracking devices for all vehicles",
  title: "Find the Right Solution for Your Vehicle",
  text: "From personal vehicles to heavy commercial fleets, we have a GPS tracking device for every type of vehicle.",
  items: [
    { name: "Bikes & Scooters", type: "bike", emoji: "🏍️", image: "" },
    { name: "Cars & SUVs", type: "car", emoji: "🚗", image: "" },
    { name: "Taxis & Auto-Rickshaws", type: "auto", emoji: "🛺", image: "" },
    { name: "Pickup & Mini Trucks", type: "pickup", emoji: "🛻", image: "" },
    { name: "Trucks & Heavy Vehicles", type: "truck", emoji: "🚚", image: "" },
    { name: "Buses, Dumpers & Others", type: "bus", emoji: "🚌", image: "" },
  ],
};

export const problems = {
  eyebrow: "The problems we solve",
  title: "Your Vehicle. Your Peace of Mind.",
  text: "We solve the real challenges vehicle owners face every day.",
  image: "/images/section%20image2.png",
  items: [
    "Difficulty knowing the current location of a vehicle.",
    "Lack of visibility into vehicle movement.",
    "Need to review past routes and trip history.",
    "Concerns about vehicle security and unauthorized movement.",
    "Need to monitor multiple vehicles from a mobile phone.",
    "Need for alerts when supported tracking conditions are triggered.",
  ],
};

export const features = {
  eyebrow: "Why choose Truck Sathi GPS?",
  title: "Advanced Features. Real Protection.",
  text: "Powerful GPS tracking solutions with features designed to keep your vehicles safe and help you stay informed. Features may vary by device model.",
  items: [
    { icon: MapPin, title: "Live Location Tracking", note: "Mobile App" },
    { icon: Route, title: "Route History", note: "Supported Devices" },
    { icon: Radar, title: "Geo-Fencing Alerts", note: "Supported Models" },
    { icon: Power, title: "Remote Engine Cut-off", note: "Selected Models" },
    { icon: Video, title: "Free Live Video-Call Installation Assistance", note: "" },
    { icon: BadgeCheck, title: "Product Warranty", note: "Model Specific" },
    { icon: Headphones, title: "Customer Support", note: "Installation & Usage" },
  ],
  trust: {
    title: "Trusted Technology for a Safer Tomorrow",
    points: ["Reliable Hardware", "Accurate Tracking", "Long Battery Life", "Industry Leading Support"],
  },
};

export const products = {
  eyebrow: "Our GPS product",
  title: "One GPS Tracker. Just ₹3,299.",
  text: "Get a GPS vehicle tracker for just ₹3,299.",
  items: [
    { name: "GPS Vehicle Tracker", price: 3299, image: "/images/product%20image.webp", points: ["Live location tracking", "Mobile app support", "Compact & waterproof"] },
  ],
};

export const testimonials = {
  eyebrow: "Real people. Real journeys.",
  title: "What Our Customers Say",
  items: [
    { name: "Ramesh Patel", role: "Truck Owner", photo: "", quote: "Easy to install, accurate tracking and great customer support. Highly recommended!" },
    { name: "Neha Sharma", role: "Car Owner", photo: "", quote: "Now I can track my car anytime from my phone. Gives me complete peace of mind." },
    { name: "Vikram Singh", role: "Fleet Owner", photo: "", quote: "Perfect for my fleet. Route history and live tracking help us manage vehicles better." },
  ],
};

export const finalCta = {
  title: "Secure Your Vehicle Today",
  text: "Book your GPS device now and get started with hassle-free tracking, security and peace of mind.",
  cta: "Book Now",
  highlights: [
    { icon: MapPin, label: "Live Tracking" },
    { icon: ShieldCheck, label: "Better Security" },
    { icon: Route, label: "Smarter Fleet Control" },
    { icon: Headphones, label: "24/7 Support" },
  ],
};

export const footer = {
  links: ["Home", "Products", "Features", "Why Us", "Pricing", "Support"],
  location: "Serving Gujarat & Across India",
  copyright: "© 2025 Truck Sathi Private Limited. All rights reserved.",
};
