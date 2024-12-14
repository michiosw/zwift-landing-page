"use client";

import { useState, useEffect } from "react";

const taglines = [
  "Instant Crypto to Fiat Swaps",
  "Secure Peer-to-Peer Trading",
  "Multiple Payment Methods",
  "Low Transaction Fees",
  "Global Coverage",
];

const features = [
  {
    title: "Quick Swaps",
    description: "Convert crypto to fiat in minutes through our P2P network.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        />
      </svg>
    ),
  },
  {
    title: "Fiat Payments",
    description: "Support for PayPal and other trusted payment methods.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
        />
      </svg>
    ),
  },
  {
    title: "Escrow System",
    description: "Every trade is secured through automated protection.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
];

export default function MainContent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-32 py-16">
      <section className="min-h-[60vh] flex items-center justify-center">
        <div className="max-w-4xl w-full">
          <div className="space-y-16 text-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-5xl md:text-6xl font-extralight text-slate-900 tracking-tight leading-[1.1]">
                  Your Bridge Between
                </h1>
                <h1 className="text-5xl md:text-6xl bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent font-light pb-1">
                  Crypto and Fiat
                </h1>
              </div>
              <p className="h-6 text-lg font-light text-slate-600 tracking-wide">
                {taglines[currentIndex]}
              </p>
              <div className="pt-8">
                <a
                  href="https://app.zwift.cash"
                  className="group relative inline-flex items-center gap-2 px-8 py-3 text-sm text-slate-900 transition-colors"
                >
                  <span className="relative z-10">Get Started</span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                  <div className="absolute inset-0 transform translate-y-1.5 translate-x-1.5 bg-blue-600/10 rounded-lg transition-transform group-hover:translate-y-0 group-hover:translate-x-0" />
                  <div className="absolute inset-0 border border-slate-900 rounded-lg" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div className="space-y-2">
                <p className="text-3xl font-extralight text-slate-900">Fast</p>
                <p className="text-sm font-light text-slate-600 tracking-wide">
                  5 Minute Settlement
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-extralight text-slate-900">
                  Secure
                </p>
                <p className="text-sm font-light text-slate-600 tracking-wide">
                  P2P Trading System
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-extralight text-slate-900">Low</p>
                <p className="text-sm font-light text-slate-600 tracking-wide">
                  Transaction Fees
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-light text-slate-900">
            Exchange with Confidence
          </h2>
          <p className="text-lg font-light text-slate-600 max-w-2xl mx-auto">
            Fast and secure peer-to-peer trading with trusted payment methods
            and automated protection.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/10 to-blue-800/10 rounded-xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
              <div className="relative space-y-6 bg-white/50 backdrop-blur-sm p-8 rounded-xl border border-slate-200">
                <div className="inline-block p-3 bg-blue-600/10 rounded-lg text-slate-900">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-light text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
