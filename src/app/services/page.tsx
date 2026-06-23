import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="bg-paper text-ink min-h-screen overflow-x-hidden selection:bg-tangerine selection:text-ink">
      <main>
        {/* Hero Section */}
        <header className="relative px-margin-mobile md:px-margin-desktop py-20 md:py-section-gap min-h-[70vh] md:min-h-[90vh] flex items-center bg-paper overflow-hidden border-b-2 border-ink">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter relative z-10 w-full">
            <div className="md:col-span-9 md:col-start-2">
              <h1 className="text-display-xl-mobile md:text-display-xl font-display-xl-mobile md:font-display-xl text-ink uppercase mb-6 md:mb-8 relative z-20 mix-blend-difference">
                Digital Marketing That <span className="text-tangerine relative inline-block">Moves<Image unoptimized width={1000} height={1000} alt="Drawn doodles emphasizing the word moves" className="absolute -top-6 md:-top-10 -right-6 md:-right-10 w-16 md:w-32 h-16 md:h-32 opacity-80 wobble-animation -z-10 object-contain" src="https://lh3.googleusercontent.com/aida/AP1WRLv17SRjP-UvZlcE2B7wxIUxj_ZUzRoj6K9y85M06NTDzlHSlC78JWFt_RaeIn5axL61bmzsleL7Ca2AG7GZGV7JJG4FYEARR4kVsHmpK5easCgUHh6VbKlN7gwLVX7kP2oAfAtbaugB-1-c5feyTMtgZFSOXb7vofYEWUakCnIFVQ61Fk0bEglrCGpiJVvBiHi7QHxhEvOHR3MC5ZWfWJb7rUK8oJ4RxwlHwFkYWVcirzv-niVd_jBdFU0" /></span> the Needle
              </h1>
              <p className="text-headline-lg-mobile md:text-headline-md font-headline-lg-mobile md:font-headline-md text-ink max-w-4xl relative z-20">
                We design and execute performance-focused digital marketing strategies. No fluff. Just measurable growth.
              </p>
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute right-0 bottom-0 w-1/3 h-full bg-tangerine border-l-2 border-ink z-0 hidden md:block transform translate-x-1/2 -skew-x-12"></div>
          <Image unoptimized width={1000} height={1000}             alt="Playful hand-drawn mascot character holding a megaphone"
            className="absolute right-10 bottom-20 w-64 h-64 object-contain float-animation z-10 hidden md:block"
            src="https://lh3.googleusercontent.com/aida/AP1WRLv23ksB56h_ljfULkaavUo6ijM9ZUxdbusQJsmQ_LVOxgvcoZ0wb4ijI3NczXv2iyQAbLGzpFGMSLMOT9DI5oqLKf4ZdCCfUIfla9VUmTntDUTXdfdkIvY4HuuCJwAQMfnwKEcoa9gZQgs9gnRSzcsaLThtThSSO-J5HyWO6EMx246xLz4SroenIZoUoVeu1tQ8V72BhW_Df1Q4JDm14pX84_P-mi6zhoOS2yBf1Sb11krQYdtOIG5bnwM"
          />
        </header>

        {/* Service Posters */}
        <section className="py-20 md:py-section-gap px-margin-mobile md:px-margin-desktop relative">
          <svg className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none" preserveAspectRatio="none">
            <path className="dashed-path" d="M 100,0 C 200,500 800,500 900,1000" fill="transparent" opacity="0.3" stroke="#FA9948" strokeWidth="4"></path>
          </svg>

          {/* Search & Visibility */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center mb-20 md:mb-[200px]">
            <div className="md:col-span-5 md:col-start-1 relative">
              <div className="absolute inset-0 bg-tangerine transform -translate-x-2 md:-translate-x-4 translate-y-2 md:translate-y-4 border-2 border-ink"></div>
              <div className="bg-paper border-2 border-ink p-6 md:p-12 relative z-10 h-full flex flex-col justify-center transition-transform hover:-translate-y-2 hover:translate-x-2 duration-300">
                <span className="text-label-mono font-label-mono uppercase tracking-widest text-tangerine mb-4 block">01 / The Foundation</span>
                <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-ink mb-4 md:mb-6 uppercase">Search &amp; Visibility</h2>
                <ul className="text-body-md md:text-body-lg font-body-md md:font-body-lg space-y-3 md:space-y-4">
                  <li className="flex items-start gap-3 md:gap-4">
                    <span className="material-symbols-outlined text-tangerine mt-1 text-[20px] md:text-[24px]">arrow_forward</span>
                    <div>
                      <strong>SEO</strong> - Technical, On-Page, Off-Page
                    </div>
                  </li>
                  <li className="flex items-start gap-3 md:gap-4">
                    <span className="material-symbols-outlined text-tangerine mt-1 text-[20px] md:text-[24px]">arrow_forward</span>
                    <div>
                      <strong>CRO</strong> - Conversion Rate Optimization
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:col-span-5 md:col-start-7 mt-8 md:mt-0">
              <Image unoptimized width={1000} height={1000}                 className="w-full h-auto border-2 border-ink aspect-[4/5] object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"
                alt="Search visibility illustration"
              />
            </div>
          </div>

          {/* SEO Stack Detailed Table */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-20 md:mb-[200px]">
            <div className="md:col-span-10 md:col-start-2 border-t-4 border-ink pt-8 md:pt-12">
              <h3 className="text-headline-md font-headline-md text-ink uppercase mb-8 md:mb-12 flex items-center gap-4 md:gap-6">
                SEO Stack
                <Image unoptimized width={1000} height={1000} alt="Arrow doodle pointing to the right" className="w-12 md:w-16 h-12 md:h-16 object-contain inline-block transform -rotate-12" src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg" />
              </h3>
              <div className="flex flex-col border-2 border-ink bg-paper">
                {/* Header Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 border-b-2 border-ink bg-ink text-surface-container-lowest p-4 md:p-6 text-label-mono font-label-mono uppercase">
                  <div className="hidden md:block">Technical</div>
                  <div className="hidden md:block">On-Page</div>
                  <div className="hidden md:block">Off-Page</div>
                  <div className="md:hidden font-bold">SEO Components</div>
                </div>
                {/* Content Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-2 divide-ink">
                  <div className="p-6 md:p-8 hover:bg-tangerine transition-colors duration-300">
                    <h4 className="md:hidden font-bold uppercase mb-3 text-body-md">Technical</h4>
                    <ul className="space-y-3 md:space-y-4 text-body-md font-body-md">
                      <li>Site Architecture</li>
                      <li>Core Web Vitals</li>
                      <li>Indexability</li>
                      <li>Schema Markup</li>
                    </ul>
                  </div>
                  <div className="p-6 md:p-8 hover:bg-tangerine transition-colors duration-300">
                    <h4 className="md:hidden font-bold uppercase mb-3 text-body-md">On-Page</h4>
                    <ul className="space-y-3 md:space-y-4 text-body-md font-body-md">
                      <li>Keyword Strategy</li>
                      <li>Content Optimization</li>
                      <li>Internal Linking</li>
                      <li>Metadata</li>
                    </ul>
                  </div>
                  <div className="p-6 md:p-8 hover:bg-tangerine transition-colors duration-300">
                    <h4 className="md:hidden font-bold uppercase mb-3 text-body-md">Off-Page</h4>
                    <ul className="space-y-3 md:space-y-4 text-body-md font-body-md">
                      <li>Link Building</li>
                      <li>Digital PR</li>
                      <li>Brand Mentions</li>
                      <li>Local SEO</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Paid Media & Social Media Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-ink mb-20 md:mb-[200px] overflow-hidden group">
            {/* Paid Media */}
            <div className="bg-paper p-8 md:p-12 lg:p-24 border-b-2 md:border-b-0 md:border-r-2 border-ink relative overflow-hidden transition-colors duration-500 hover:bg-ink hover:text-surface-container-lowest">
              <span className="text-label-mono font-label-mono uppercase tracking-widest text-tangerine mb-4 block group-hover:text-tangerine">02 / Acceleration</span>
              <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg mb-6 md:mb-8 uppercase">Paid Media</h2>
              <p className="text-body-md md:text-body-lg font-body-md md:font-body-lg mb-6 md:mb-8 opacity-80">SEM &amp; PPC campaigns designed for maximum ROAS. We don't just buy clicks; we buy customers.</p>
              <button className="bg-transparent border-2 border-current text-current font-label-mono text-label-mono uppercase py-3 md:py-4 px-6 md:px-8 hover:bg-tangerine hover:text-ink hover:border-tangerine transition-all duration-300 flex items-center gap-2">
                View Case Studies <span className="material-symbols-outlined">north_east</span>
              </button>
              <Image unoptimized width={1000} height={1000}                 alt="Scribble doodle"
                className="absolute -right-10 -bottom-10 w-32 md:w-48 h-32 md:h-48 opacity-20 wobble-animation object-contain"
                src="https://lh3.googleusercontent.com/aida/AP1WRLv17SRjP-UvZlcE2B7wxIUxj_ZUzRoj6K9y85M06NTDzlHSlC78JWFt_RaeIn5axL61bmzsleL7Ca2AG7GZGV7JJG4FYEARR4kVsHmpK5easCgUHh6VbKlN7gwLVX7kP2oAfAtbaugB-1-c5feyTMtgZFSOXb7vofYEWUakCnIFVQ61Fk0bEglrCGpiJVvBiHi7QHxhEvOHR3MC5ZWfWJb7rUK8oJ4RxwlHwFkYWVcirzv-niVd_jBdFU0"
              />
            </div>
            {/* Social Media */}
            <div className="bg-tangerine p-8 md:p-12 lg:p-24 relative overflow-hidden transition-colors duration-500 hover:bg-ink hover:text-surface-container-lowest">
              <span className="text-label-mono font-label-mono uppercase tracking-widest text-ink mb-4 block group-hover:text-tangerine">03 / Community</span>
              <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-ink mb-6 md:mb-8 uppercase group-hover:text-surface-container-lowest">Social Media</h2>
              <p className="text-body-md md:text-body-lg font-body-md md:font-body-lg text-ink mb-6 md:mb-8 opacity-80 group-hover:text-surface-container-lowest">SMM that builds brands and drives engagement. Platform-native strategies that resonate.</p>
              <button className="bg-ink border-2 border-ink text-surface-container-lowest font-label-mono text-label-mono uppercase py-3 md:py-4 px-6 md:px-8 hover:bg-transparent hover:text-ink hover:border-ink transition-all duration-300 group-hover:border-surface-container-lowest group-hover:text-surface-container-lowest group-hover:hover:bg-tangerine group-hover:hover:text-ink group-hover:hover:border-tangerine flex items-center gap-2">
                Explore SMM <span className="material-symbols-outlined">north_east</span>
              </button>
            </div>
          </div>

          {/* Performance & Content Asymmetric */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start mb-20 md:mb-[200px]">
            <div className="md:col-span-4 md:col-start-2">
              <div className="sticky top-32">
                <h2 className="text-display-xl-mobile md:text-headline-lg font-display-xl-mobile md:font-headline-lg text-ink uppercase mb-6 md:mb-8 leading-none">The Rest of the Arsenal</h2>
                <p className="text-body-md md:text-body-lg font-body-md md:font-body-lg text-ink max-w-sm mb-8 md:mb-12">Comprehensive capabilities to support every stage of the funnel.</p>
              </div>
            </div>
            <div className="md:col-span-6 md:col-start-7 space-y-6 md:space-y-gutter">
              <div className="border-t-2 border-ink pt-6 md:pt-8 hover:pl-4 md:hover:pl-8 transition-all duration-300 cursor-pointer group">
                <div className="flex justify-between items-end mb-3 md:mb-4">
                  <h3 className="text-headline-md font-headline-md text-ink uppercase group-hover:text-tangerine transition-colors text-[24px] md:text-[32px]">Performance Mktg</h3>
                  <span className="text-label-mono font-label-mono text-ink">04</span>
                </div>
                <p className="text-body-md font-body-md text-ink max-w-md">Data-driven, full-funnel optimization.</p>
              </div>
              <div className="border-t-2 border-ink pt-6 md:pt-8 hover:pl-4 md:hover:pl-8 transition-all duration-300 cursor-pointer group">
                <div className="flex justify-between items-end mb-3 md:mb-4">
                  <h3 className="text-headline-md font-headline-md text-ink uppercase group-hover:text-tangerine transition-colors text-[24px] md:text-[32px]">Content &amp; Brand</h3>
                  <span className="text-label-mono font-label-mono text-ink">05</span>
                </div>
                <p className="text-body-md font-body-md text-ink max-w-md">Content Marketing &amp; Personal Branding that establishes authority.</p>
              </div>
              <div className="border-t-2 border-ink pt-6 md:pt-8 hover:pl-4 md:hover:pl-8 transition-all duration-300 cursor-pointer group">
                <div className="flex justify-between items-end mb-3 md:mb-4">
                  <h3 className="text-headline-md font-headline-md text-ink uppercase group-hover:text-tangerine transition-colors text-[24px] md:text-[32px]">AI &amp; Modern Mktg</h3>
                  <span className="text-label-mono font-label-mono text-ink">06</span>
                </div>
                <p className="text-body-md font-body-md text-ink max-w-md">Leveraging next-gen tools for efficiency and scale.</p>
              </div>
              <div className="border-t-2 border-ink pt-6 md:pt-8 hover:pl-4 md:hover:pl-8 transition-all duration-300 cursor-pointer group">
                <div className="flex justify-between items-end mb-3 md:mb-4">
                  <h3 className="text-headline-md font-headline-md text-ink uppercase group-hover:text-tangerine transition-colors text-[24px] md:text-[32px]">Analytics &amp; Tech</h3>
                  <span className="text-label-mono font-label-mono text-ink">07</span>
                </div>
                <p className="text-body-md font-body-md text-ink max-w-md">Analytics, Tracking, Web &amp; Technology infrastructure.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How We Work Section */}
        <section className="bg-ink text-surface-container-lowest py-20 md:py-section-gap px-margin-mobile md:px-margin-desktop border-y-2 border-tangerine relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter relative z-10">
            <div className="md:col-span-12 mb-12 md:mb-24 text-center">
              <h2 className="text-display-xl-mobile md:text-headline-lg font-display-xl-mobile md:font-headline-lg uppercase mb-4 text-tangerine">How We Work</h2>
              <p className="text-body-md md:text-body-lg font-body-md md:font-body-lg max-w-2xl mx-auto">A relentless 5-step process designed to uncover opportunities and exploit them.</p>
            </div>
            <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8">
              <div className="border-t-2 border-surface-container-lowest pt-6 md:pt-8 relative">
                <span className="text-display-xl font-display-xl text-surface-container-lowest opacity-10 absolute -top-12 md:-top-16 -left-2 md:-left-4 pointer-events-none text-[60px] md:text-[120px]">1</span>
                <h4 className="text-body-md md:text-body-lg font-body-md md:font-body-lg font-bold mb-3 md:mb-4 uppercase">Discovery</h4>
                <p className="text-caption font-caption opacity-80">Deep dive into your business, market, and current assets.</p>
              </div>
              <div className="border-t-2 border-surface-container-lowest pt-6 md:pt-8 relative mt-8 md:mt-12">
                <span className="text-display-xl font-display-xl text-surface-container-lowest opacity-10 absolute -top-12 md:-top-16 -left-2 md:-left-4 pointer-events-none text-[60px] md:text-[120px]">2</span>
                <h4 className="text-body-md md:text-body-lg font-body-md md:font-body-lg font-bold mb-3 md:mb-4 uppercase">Strategy</h4>
                <p className="text-caption font-caption opacity-80">Architecting the custom plan. No templates allowed.</p>
              </div>
              <div className="border-t-2 border-surface-container-lowest pt-6 md:pt-8 relative mt-8 md:mt-12">
                <span className="text-display-xl font-display-xl text-surface-container-lowest opacity-10 absolute -top-12 md:-top-16 -left-2 md:-left-4 pointer-events-none text-[60px] md:text-[120px]">3</span>
                <h4 className="text-body-md md:text-body-lg font-body-md md:font-body-lg font-bold mb-3 md:mb-4 uppercase">Execution</h4>
                <p className="text-caption font-caption opacity-80">Flawless deployment across all selected channels.</p>
              </div>
              <div className="border-t-2 border-surface-container-lowest pt-6 md:pt-8 relative mt-8 md:mt-12">
                <span className="text-display-xl font-display-xl text-surface-container-lowest opacity-10 absolute -top-12 md:-top-16 -left-2 md:-left-4 pointer-events-none text-[60px] md:text-[120px]">4</span>
                <h4 className="text-body-md md:text-body-lg font-body-md md:font-body-lg font-bold mb-3 md:mb-4 uppercase">Optimization</h4>
                <p className="text-caption font-caption opacity-80">Continuous A/B testing and data analysis.</p>
              </div>
              <div className="border-t-2 border-surface-container-lowest pt-6 md:pt-8 relative mt-8 md:mt-12">
                <span className="text-display-xl font-display-xl text-tangerine opacity-20 absolute -top-12 md:-top-16 -left-2 md:-left-4 pointer-events-none text-[60px] md:text-[120px]">5</span>
                <h4 className="text-body-md md:text-body-lg font-body-md md:font-body-lg font-bold mb-3 md:mb-4 uppercase text-tangerine">Scale</h4>
                <p className="text-caption font-caption opacity-80">Pouring fuel on the strategies that deliver the best ROI.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-[200px] px-margin-mobile md:px-margin-desktop bg-tangerine text-ink text-center relative overflow-hidden border-b-4 border-ink">
          <div className="relative z-10 max-w-5xl mx-auto">
            <h2 className="text-display-xl-mobile md:text-headline-lg font-display-xl-mobile md:font-headline-lg uppercase mb-8 md:mb-12">
              Let's Build a Digital Strategy That Works for Your Business
            </h2>
            <Link href="/contact" className="bg-ink text-surface-container-lowest hover:bg-transparent hover:text-ink transition-colors duration-300 text-body-lg md:text-headline-md font-body-lg md:font-headline-md uppercase py-4 md:py-6 px-8 md:px-12 border-4 border-ink hover:scale-95 transform inline-flex items-center gap-3 md:gap-4">
              Request a Free Audit
              <span className="material-symbols-outlined text-[28px] md:text-[40px]">arrow_forward</span>
            </Link>
          </div>
          <Image unoptimized width={1000} height={1000}             alt="Hand drawn character pointing up"
            className="absolute bottom-0 left-10 w-[200px] md:w-[400px] h-auto object-contain opacity-50 -z-0 float-animation pointer-events-none"
            src="https://lh3.googleusercontent.com/aida/AP1WRLv23ksB56h_ljfULkaavUo6ijM9ZUxdbusQJsmQ_LVOxgvcoZ0wb4ijI3NczXv2iyQAbLGzpFGMSLMOT9DI5oqLKf4ZdCCfUIfla9VUmTntDUTXdfdkIvY4HuuCJwAQMfnwKEcoa9gZQgs9gnRSzcsaLThtThSSO-J5HyWO6EMx246xLz4SroenIZoUoVeu1tQ8V72BhW_Df1Q4JDm14pX84_P-mi6zhoOS2yBf1Sb11krQYdtOIG5bnwM"
          />
        </section>
      </main>
    </div>
  );
}
