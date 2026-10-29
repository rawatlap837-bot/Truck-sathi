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

export const vehicles = {
  eyebrow: "GPS tracking devices for all vehicles",
  title: "Find the Right Solution for Your Vehicle",
  text: "From personal vehicles to heavy commercial fleets, we have a GPS tracking device for every type of vehicle.",
  items: [
    { name: "Bikes & Scooters", emoji: "🏍️", image: "" },
    { name: "Cars & SUVs", emoji: "🚗", image: "" },
    { name: "Taxis & Auto-Rickshaws", emoji: "🛺", image: "" },
    { name: "Pickup & Mini Trucks", emoji: "🛻", image: "" },
    { name: "Trucks & Heavy Vehicles", emoji: "🚚", image: "" },
    { name: "Buses, Dumpers & Others", emoji: "🚌", image: "" },
  ],
};

export const problems = {
  eyebrow: "The problems we solve",
  title: "Your Vehicle. Your Peace of Mind.",
  text: "We solve the real challenges vehicle owners face every day.",
  image: "/images/problems.png",
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
  eyebrow: "Popular GPS devices",
  title: "Choose Your Device & Book Now",
  text: "Select the right GPS device for your vehicle and enjoy complete tracking and security.",
  items: [
    { name: "Bike GPS Tracker", price: 1999, oldPrice: 3499, image: "", points: ["Live location tracking", "Mobile app support", "Compact & waterproof"] },
    { name: "Car GPS Tracker", price: 2999, oldPrice: 5499, image: "", points: ["Live location tracking", "Route history", "Geo-fencing alerts"] },
    { name: "Truck GPS Tracker", price: 5999, oldPrice: 9999, image: "", points: ["Live location tracking", "Route history", "Remote engine cut-off (selected models)"] },
    { name: "Fleet GPS Tracker", price: 8999, oldPrice: 14999, image: "", points: ["Multi-vehicle monitoring", "Live tracking dashboard", "Business reports"] },
  ],
  bulk: {
    title: "Bulk Orders & Fleet Solutions",
    text: "Get special pricing for multiple vehicles and fleet management.",
    cta: "Contact Us",
  },
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
