"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_0_0_rgba(15,23,42,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 py-3 sm:py-4 relative">
        <nav className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-900 text-xl sm:text-2xl md:text-2xl font-light tracking-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
              zwift
            </span>
            <span className="text-blue-500">.</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 sm:gap-8">
            <motion.a
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              href="https://docs2.zwift.cash"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] text-slate-500 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Documentation
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              href="https://app.zwift.cash"
              className="group relative inline-flex px-5 sm:px-6 py-2.5 bg-white text-slate-900 text-[15px] font-medium rounded-xl transition-all duration-300 hover:bg-slate-50 shadow-[0_0_0_1px_rgba(15,23,42,0.1)] hover:shadow-[0_0_0_1px_rgba(59,130,246,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Launch App
                <IconArrowRight
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                  strokeWidth={2}
                />
              </span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-10 p-3 -mr-3 touch-manipulation"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-center">
              <span
                className={`block h-0.5 w-5 bg-slate-900 transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-slate-900 transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-slate-900 transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </motion.button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute left-0 right-0 top-full bg-white/95 backdrop-blur-xl overflow-hidden shadow-lg"
            >
              <div className="px-4 py-8 space-y-6">
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  href="https://docs2.zwift.cash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-base text-slate-600 hover:text-blue-600 transition-colors duration-200 font-medium px-2 py-3"
                >
                  Documentation
                </motion.a>
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  href="https://app.zwift.cash"
                  className="block w-full text-center py-4 bg-white text-slate-900 text-base font-medium rounded-xl transition-all duration-300 hover:bg-slate-50 shadow-[0_0_0_1px_rgba(15,23,42,0.1)] hover:shadow-[0_0_0_1px_rgba(59,130,246,0.4)]"
                >
                  <span className="flex items-center justify-center gap-2">
                    Launch App
                    <IconArrowRight className="w-4 h-4" strokeWidth={2} />
                  </span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
