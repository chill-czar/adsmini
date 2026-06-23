"use client";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-surface-container-lowest text-ink w-full sticky top-0 z-50 border-b-ink-4">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-gutter mx-auto bg-grid-pattern">
        <Link
          href="/"
          className="text-headline-md font-headline-md font-black tracking-tighter text-ink uppercase bg-tangerine px-4 py-2 border-ink-4 brutalist-shadow"
          onClick={closeMobileMenu}
        >
          ADS MINI
        </Link>
        <div className="hidden md:flex gap-8 items-center bg-surface-container-lowest border-ink-4 px-8 py-4 brutalist-shadow">
          <Link href="/work" className="text-label-mono font-label-mono uppercase font-black hover:text-tangerine hover:scale-110 transition-all duration-300">WORK</Link>
          <Link href="/services" className="text-label-mono font-label-mono uppercase font-black hover:text-tangerine hover:scale-110 transition-all duration-300">SERVICES</Link>
          <Link href="/about" className="text-label-mono font-label-mono uppercase font-black hover:text-tangerine hover:scale-110 transition-all duration-300">AGENCY</Link>
          <Link href="#" className="text-label-mono font-label-mono uppercase font-black hover:text-tangerine hover:scale-110 transition-all duration-300">LABS</Link>
        </div>
        <Link
          href="/contact"
          className="hidden md:inline-block border-ink-4 bg-surface-container-lowest px-8 py-4 text-headline-md font-headline-md font-black uppercase brutalist-shadow hover:bg-tangerine transition-colors duration-300"
        >
          GET IN TOUCH
        </Link>
        <button
          className="md:hidden border-ink-4 bg-surface-container-lowest p-2 brutalist-shadow flex items-center justify-center"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="material-symbols-outlined text-headline-lg font-black">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-surface-container-lowest border-t-ink-4 bg-grid-pattern">
          <div className="flex flex-col gap-4 px-margin-mobile py-8">
            <Link
              href="/work"
              className="text-label-mono font-label-mono uppercase font-black text-ink py-4 px-6 border-ink-4 brutalist-shadow hover:bg-tangerine transition-colors duration-300"
              onClick={closeMobileMenu}
            >
              WORK
            </Link>
            <Link
              href="/services"
              className="text-label-mono font-label-mono uppercase font-black text-ink py-4 px-6 border-ink-4 brutalist-shadow hover:bg-tangerine transition-colors duration-300"
              onClick={closeMobileMenu}
            >
              SERVICES
            </Link>
            <Link
              href="/about"
              className="text-label-mono font-label-mono uppercase font-black text-ink py-4 px-6 border-ink-4 brutalist-shadow hover:bg-tangerine transition-colors duration-300"
              onClick={closeMobileMenu}
            >
              AGENCY
            </Link>
            <Link
              href="#"
              className="text-label-mono font-label-mono uppercase font-black text-ink py-4 px-6 border-ink-4 brutalist-shadow hover:bg-tangerine transition-colors duration-300"
              onClick={closeMobileMenu}
            >
              LABS
            </Link>
            <Link
              href="/contact"
              className="text-label-mono font-label-mono uppercase font-black text-ink py-4 px-6 bg-tangerine border-ink-4 brutalist-shadow hover:bg-ink hover:text-surface-container-lowest transition-colors duration-300 text-center"
              onClick={closeMobileMenu}
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
