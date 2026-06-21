import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest text-ink w-full relative border-t-ink-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter px-margin-mobile md:px-margin-desktop py-section-gap w-full overflow-hidden bg-grid-pattern">
        <div className="md:col-span-12 mb-16 text-center">
          <h2 className="text-[150px] md:text-[300px] font-black text-tangerine uppercase leading-none drop-shadow-[12px_12px_0_rgba(0,0,0,1)]">ADS MINI</h2>
        </div>
        <div className="md:col-span-12 flex flex-wrap justify-center gap-x-12 gap-y-8 bg-ink border-ink-4 p-12 brutalist-shadow text-surface-container-lowest">
          <Link href="#" className="text-[32px] font-black hover:text-tangerine hover:scale-110 transition-all duration-300 uppercase">STRATEGY</Link>
          <Link href="#" className="text-[32px] font-black hover:text-tangerine hover:scale-110 transition-all duration-300 uppercase">CREATIVE</Link>
          <Link href="#" className="text-[32px] font-black hover:text-tangerine hover:scale-110 transition-all duration-300 uppercase">MEDIA</Link>
          <Link href="/services/recruitment" className="text-[32px] font-black hover:text-tangerine hover:scale-110 transition-all duration-300 uppercase">RECRUITMENT</Link>
          <Link href="#" className="text-[32px] font-black hover:text-tangerine hover:scale-110 transition-all duration-300 uppercase">INSTAGRAM</Link>
          <Link href="#" className="text-[32px] font-black hover:text-tangerine hover:scale-110 transition-all duration-300 uppercase">LINKEDIN</Link>
        </div>
        <div className="md:col-span-12 flex items-center justify-center mt-16 bg-tangerine border-ink-4 p-8 brutalist-shadow">
          <p className="text-headline-md font-headline-md font-black text-ink uppercase text-center">
            © 2024 ADS MINI. BUILT FOR THE BOLD.
          </p>
        </div>
      </div>
    </footer>
  );
}
