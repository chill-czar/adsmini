import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest text-ink w-full relative border-t-ink-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter px-margin-mobile md:px-margin-desktop py-16 md:py-section-gap w-full overflow-hidden bg-grid-pattern">
        <div className="md:col-span-12 mb-8 md:mb-16 text-center">
          <h2 className="text-[64px] md:text-[300px] font-black text-tangerine uppercase leading-none drop-shadow-[6px_6px_0_rgba(0,0,0,1)] md:drop-shadow-[12px_12px_0_rgba(0,0,0,1)]">ADS MINI</h2>
        </div>
        <div className="md:col-span-12 flex flex-wrap justify-center gap-x-6 gap-y-4 md:gap-x-12 md:gap-y-8 bg-ink border-ink-4 p-6 md:p-12 brutalist-shadow text-surface-container-lowest">
          <Link href="#" className="text-[18px] md:text-[32px] font-black uppercase">STRATEGY</Link>
          <Link href="#" className="text-[18px] md:text-[32px] font-black uppercase">CREATIVE</Link>
          <Link href="#" className="text-[18px] md:text-[32px] font-black uppercase">MEDIA</Link>
          <Link href="/services/recruitment" className="text-[18px] md:text-[32px] font-black uppercase">RECRUITMENT</Link>
          <Link href="#" className="text-[18px] md:text-[32px] font-black uppercase">INSTAGRAM</Link>
          <Link href="#" className="text-[18px] md:text-[32px] font-black uppercase">LINKEDIN</Link>
        </div>
        <div className="md:col-span-12 flex items-center justify-center mt-8 md:mt-16 bg-tangerine border-ink-4 p-4 md:p-8 brutalist-shadow">
          <p className="text-body-md md:text-headline-md font-body-md md:font-headline-md font-black text-ink uppercase text-center">
            © 2024 ADS MINI. BUILT FOR THE BOLD.
          </p>
        </div>
      </div>
    </footer>
  );
}
