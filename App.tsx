import React from "react";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import Features from "./sections/Features";
import InteractiveDemo from "./components/InteractiveDemo";
import Technology from "./sections/Technology";
import Developer from "./sections/Developer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#030303] text-gray-100 overflow-x-hidden relative">
      <div className="fixed inset-0 dot-grid pointer-events-none opacity-40" />
      <Hero />
      <Showcase />
      <Features />
      <InteractiveDemo />
      <Technology />
      <Developer />
    </div>
  );
}