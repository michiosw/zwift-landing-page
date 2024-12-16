"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import {
  IconArrowRight,
  IconShieldLock,
  IconCreditCard,
  IconRocket,
} from "@tabler/icons-react";

const features = [
  {
    title: "Quick Swaps",
    description:
      "Convert crypto to fiat in minutes with our optimized P2P network.",
    icon: <IconRocket className="w-6 h-6 stroke-[1.5]" />,
  },
  {
    title: "Fiat Payments",
    description:
      "Multiple payment methods including PayPal and bank transfers.",
    icon: <IconCreditCard className="w-6 h-6 stroke-[1.5]" />,
  },
  {
    title: "Escrow System",
    description: "Automated protection for secure trading confidence.",
    icon: <IconShieldLock className="w-6 h-6 stroke-[1.5]" />,
  },
];

const stats = [
  { number: "5min", label: "Average Settlement" },
  { number: "USDC", label: "Stablecoin Exchange" },
  { number: "P2P", label: "Secure Network" },
];

export default function MainContent() {
  const { scrollYProgress } = useScroll();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className="relative bg-white">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6">
        <div className="absolute inset-0">
          {/* Modern gradient background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-50/40 via-white to-white" />

          {/* Animated gradient orbs */}
          <div className="absolute top-20 left-1/3 w-[800px] h-[800px] bg-blue-100/20 rounded-full blur-3xl animate-[pulse_8s_ease-in-out_infinite]" />
          <div className="absolute bottom-20 right-1/3 w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-3xl animate-[pulse_8s_ease-in-out_infinite_1s]" />

          {/* Subtle grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1.5px,transparent_1.5px),linear-gradient(to_right,rgba(59,130,246,0.02)_1.5px,transparent_1.5px)] bg-[size:48px_48px] opacity-30" />
        </div>

        <div className="relative z-10 max-w-screen-xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8 sm:space-y-14"
          >
            <div className="space-y-6 sm:space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex justify-center"
              >
                <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-blue-50/80 to-blue-100/50 text-blue-600 text-xs sm:text-sm font-medium tracking-wide uppercase backdrop-blur-sm border border-blue-100/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500/80" />
                  Next-Gen P2P Exchange
                </span>
              </motion.div>

              <h1 className="relative">
                <span className="block text-4xl sm:text-6xl md:text-7xl font-extralight tracking-tight text-slate-900">
                  Trade Crypto & Fiat
                </span>
              </h1>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-20">
                <div className="flex flex-col items-center">
                  <div className="text-base text-slate-600 font-normal">
                    Secure
                  </div>
                  <div className="text-xs text-slate-400 font-light">
                    Multi-Sig Escrow
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="text-base text-slate-600 font-normal">
                    Fast
                  </div>
                  <div className="text-xs text-slate-400 font-light">
                    5 Min Settlement
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="text-base text-slate-600 font-normal">
                    Reliable
                  </div>
                  <div className="text-xs text-slate-400 font-light">
                    24/7 Trading
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 px-4"
            >
              <a
                href="https://app.zwift.cash"
                className="w-full sm:w-auto group relative inline-flex justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-slate-900 text-[15px] font-medium rounded-xl transition-all duration-300 hover:bg-slate-50 shadow-[0_0_0_1px_rgba(15,23,42,0.1)] hover:shadow-[0_0_0_1px_rgba(59,130,246,0.4)] hover:translate-y-[-1px]"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Launch App
                  <IconArrowRight
                    className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                    strokeWidth={2}
                  />
                </span>
              </a>
              <a
                href="https://docs2.zwift.cash"
                className="w-full sm:w-auto group inline-flex justify-center items-center gap-2 px-6 py-3.5 text-slate-500 hover:text-blue-600 transition-colors duration-200 font-medium text-[15px]"
              >
                Documentation
                <IconArrowRight
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                  strokeWidth={2}
                />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        ref={ref}
        className="py-12 sm:py-24 relative overflow-hidden px-4 sm:px-6"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-50/40 via-white to-white" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1.5px,transparent_1.5px),linear-gradient(to_right,rgba(59,130,246,0.02)_1.5px,transparent_1.5px)] bg-[size:48px_48px] opacity-40" />
        </div>
        <div className="max-w-screen-xl mx-auto relative">
          <motion.div
            style={{
              transform: isInView ? "none" : "translateY(40px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1)",
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-16"
          >
            {stats.map((stat, index) => (
              <div key={index} className="relative group text-center">
                <div className="p-6 sm:p-8">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-3xl sm:text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500 mb-2 sm:mb-3"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-slate-600 font-medium text-xs sm:text-sm tracking-wide uppercase">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-32 relative overflow-hidden px-4 sm:px-6">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-50/40 via-white to-white" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1.5px,transparent_1.5px),linear-gradient(to_right,rgba(59,130,246,0.02)_1.5px,transparent_1.5px)] bg-[size:48px_48px] opacity-40" />
        </div>

        <div className="max-w-screen-xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-20"
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-light">
              Exchange with Confidence
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative p-6 sm:p-8 rounded-xl bg-white/80 backdrop-blur-sm border border-slate-100/80 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 hover:translate-y-[-2px]">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white mb-4 sm:mb-6 shadow-lg shadow-blue-500/20">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-medium mb-2 sm:mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-32 relative overflow-hidden px-4 sm:px-6">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-50/40 via-white to-white" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1.5px,transparent_1.5px),linear-gradient(to_right,rgba(59,130,246,0.02)_1.5px,transparent_1.5px)] bg-[size:48px_48px] opacity-40" />
        </div>

        <div className="max-w-screen-xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-extralight text-slate-900 leading-tight">
              Ready to Start Trading?
            </h2>
            <motion.div className="pt-4">
              <a
                href="https://app.zwift.cash"
                className="w-full sm:w-auto group relative inline-flex justify-center px-6 sm:px-8 py-4 bg-white text-slate-900 text-base font-medium rounded-xl transition-all duration-300 hover:bg-slate-50 shadow-[0_0_0_1px_rgba(15,23,42,0.1)] hover:shadow-[0_0_0_1px_rgba(59,130,246,0.4)] hover:translate-y-[-1px]"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Launch App
                  <IconArrowRight
                    className="w-5 h-5 transition-transform group-hover:translate-x-0.5"
                    strokeWidth={2}
                  />
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
