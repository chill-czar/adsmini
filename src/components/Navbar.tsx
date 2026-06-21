import Link from "next/link";

export function Navbar() {
  return (
    <nav className="bg-surface-container-lowest text-ink w-full sticky top-0 z-50 border-b-ink-4">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-gutter mx-auto bg-grid-pattern">
        <Link 
          href="/"
          className="text-headline-md font-headline-md font-black tracking-tighter text-ink uppercase bg-tangerine px-4 py-2 border-ink-4 brutalist-shadow"
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
        <button className="md:hidden border-ink-4 bg-surface-container-lowest p-2 brutalist-shadow flex items-center justify-center">
          <span className="material-symbols-outlined text-headline-lg font-black">menu</span>
        </button>
      </div>
    </nav>
  );
}
