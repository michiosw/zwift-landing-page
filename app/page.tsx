"use client";

import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import Footer from "@/components/Footer";
import DynamicBackground from "@/components/DynamicBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen selection:bg-blue-100/50">
      <DynamicBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white/60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-600/5 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-600/[0.025] via-transparent to-transparent" />

      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />
        <div className="flex-1">
          <MainContent />
        </div>
        <Footer />
      </div>
    </div>
  );
}
