import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero: Massive headline */}
      <header className="relative w-full min-h-screen border-b-ink-4 bg-surface-container-lowest flex flex-col pt-12 overflow-hidden bg-grid-pattern">
        {/* Mascot BG */}
        <Image unoptimized width={1000} height={1000}           alt=""
          className="mascot-bg w-full md:w-1/2 right-0 top-20 object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuARkPxU3NNyhCIbbFkQsl8Clz5WMhXlJhspaCAMvvyDnhbuvYNrahVigP-Wdfnp9-9a95jqSzxfGPqMYddJvXa6k5llx9Sjeu5M2OYYX0DcLtgMHwOytEeSDTd6OecBGMRHS-ubT2PLtIapn8xX5qaum7dGyi8rSGEOQJbDN_zOzzRtnDT7GyOVqeHLUstqrIZ-CdHdjePzuAs-AfuAI5rtZHNMTaudlZfDyfP1-sTrn9airL_f3YEMWfnqRcNVhSrYva9ze1gEMZU"
        />
        <div className="px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter flex-grow relative z-10 items-center">
          <div className="md:col-span-12 flex flex-col justify-center">
            <h1 className="text-[80px] leading-[80px] md:text-[180px] md:leading-[160px] font-black uppercase break-words relative z-20 mix-blend-difference text-surface-container-lowest drop-shadow-[8px_8px_0_rgba(250,153,72,1)]">
              WE BUILD <br />
              BRANDS.<br />
              <span className="text-tangerine drop-shadow-[8px_8px_0_rgba(0,0,0,1)] mix-blend-normal">WE BUILD TEAMS.</span>
            </h1>
            <div className="flex flex-col md:flex-row gap-8 items-start mt-12 w-full justify-between">
              <p className="text-headline-md font-headline-md max-w-2xl bg-surface-container-lowest border-ink-4 p-8 brutalist-shadow relative z-20">
                Ads Mini is a full-service digital marketing and recruitment agency. We help businesses grow their online presence and find the right talent — all under one roof.
              </p>
              <div className="flex flex-col gap-6 relative z-20 w-full md:w-auto">
                <Link href="/services" className="bg-tangerine text-ink border-ink-4 px-12 py-6 text-headline-md font-headline-md font-black uppercase text-center brutalist-shadow">
                  Explore Services
                </Link>
                <Link href="/contact" className="bg-surface-container-lowest text-ink border-ink-4 px-12 py-6 text-headline-md font-headline-md font-black uppercase text-center brutalist-shadow hover:bg-ink hover:text-surface-container-lowest">
                  Talk to Expert
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Who We Are: Editorial magazine spread layout */}
      <section className="py-section-gap border-b-ink-4 bg-tangerine relative overflow-hidden">
        {/* Mascot BG */}
        <Image unoptimized width={1000} height={1000}           alt=""
          className="mascot-bg w-full md:w-1/2 left-0 top-0 object-cover opacity-30"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuARkPxU3NNyhCIbbFkQsl8Clz5WMhXlJhspaCAMvvyDnhbuvYNrahVigP-Wdfnp9-9a95jqSzxfGPqMYddJvXa6k5llx9Sjeu5M2OYYX0DcLtgMHwOytEeSDTd6OecBGMRHS-ubT2PLtIapn8xX5qaum7dGyi8rSGEOQJbDN_zOzzRtnDT7GyOVqeHLUstqrIZ-CdHdjePzuAs-AfuAI5rtZHNMTaudlZfDyfP1-sTrn9airL_f3YEMWfnqRcNVhSrYva9ze1gEMZU"
        />
        <div className="px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter relative z-10">
          <div className="md:col-span-1 flex justify-center md:justify-start">
            <span className="text-headline-md font-headline-md vertical-text hidden md:block tracking-widest text-ink font-black bg-surface-container-lowest border-ink-4 p-4 brutalist-shadow">ISSUE 01 — WHO WE ARE</span>
            <span className="text-headline-md font-headline-md block md:hidden tracking-widest text-ink font-black bg-surface-container-lowest border-ink-4 p-4 brutalist-shadow mb-8">ISSUE 01 — WHO WE ARE</span>
          </div>
          <div className="md:col-span-5 relative">
            <div className="bg-surface-container-lowest border-ink-4 p-8 brutalist-shadow h-full flex flex-col justify-between">
              <h2 className="text-display-xl-mobile font-display-xl-mobile md:text-[100px] md:leading-[90px] font-black uppercase mb-8">
                VISIBILITY <br />&amp; PEOPLE.
              </h2>
              <div className="w-full h-4 bg-ink mb-8"></div>
              <Image unoptimized width={1000} height={1000}                 alt="A candid, high-contrast black and white editorial style photograph of a diverse team collaborating intensely around a large minimalist table in a modern, well-lit studio."
                className="w-full h-auto border-ink-4 grayscale poster-image"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBALTGG1qMX5AEEFhT81egaskQrz8Rqt4IdlCuQgyIi_Q8EgBWxesyw8WYXH8EUrd69rkyigF1w3WC3VVnOMSPWS4BMVJJROzNOPu3-zC_PSXrFbNV0uqEDWxQOtaGiZ-NZzafCleZgt0cL1eMRpbpqPHNEpQZp8pjHvuFx6a8M6GpSCEQ9ufqavtHPDlbutfjtO8v1tEfph8SOF94Ge4x7rvH_jBhuFNQ4xQPuDFMcKz4NvvAyBW1CcEAvQoLMQSEHPfPCkyWUAU4"
              />
            </div>
          </div>
          <div className="md:col-span-6 flex flex-col justify-center gap-8 mt-8 md:mt-0">
            <div className="bg-surface-container-lowest border-ink-4 p-8 brutalist-shadow">
              <p className="text-headline-md font-headline-md font-bold mb-0 first-letter:text-[120px] first-letter:leading-[100px] first-letter:font-black first-letter:text-tangerine first-letter:float-left first-letter:mr-6 first-letter:-mt-4">
                At Ads Mini, we believe every business grows on two foundations: visibility and people. You need the world to find you, and you need the right team to serve them.
              </p>
            </div>
            <div className="bg-surface-container-lowest border-ink-4 p-8 brutalist-shadow">
              <p className="text-body-lg font-body-lg font-bold mb-0">
                That is why we built an agency that handles both — with precision, accountability, and a genuine commitment to results. We work with startups, scaling businesses, and established companies across India and international markets.
              </p>
            </div>
            <div className="bg-ink border-ink-4 p-8 brutalist-shadow">
              <p className="text-body-lg font-body-lg font-black text-surface-container-lowest mb-0 border-l-8 border-tangerine pl-6">
                Whether you need to dominate search rankings, run high-performance paid campaigns, or hire your next top performer, Ads Mini delivers without shortcuts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services: Illustrated editorial layout */}
      <section className="py-section-gap bg-surface-container-lowest text-ink border-b-ink-4 relative overflow-hidden bg-grid-pattern">
        {/* Mascot BG */}
        <Image unoptimized width={1000} height={1000}           alt=""
          className="mascot-bg w-full md:w-3/4 right-0 bottom-0 object-cover opacity-20 transform translate-y-1/4"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuARkPxU3NNyhCIbbFkQsl8Clz5WMhXlJhspaCAMvvyDnhbuvYNrahVigP-Wdfnp9-9a95jqSzxfGPqMYddJvXa6k5llx9Sjeu5M2OYYX0DcLtgMHwOytEeSDTd6OecBGMRHS-ubT2PLtIapn8xX5qaum7dGyi8rSGEOQJbDN_zOzzRtnDT7GyOVqeHLUstqrIZ-CdHdjePzuAs-AfuAI5rtZHNMTaudlZfDyfP1-sTrn9airL_f3YEMWfnqRcNVhSrYva9ze1gEMZU"
        />
        <div className="px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="mb-24 flex items-center gap-8">
            <h2 className="text-[100px] leading-[90px] md:text-[200px] md:leading-[180px] font-black text-ink uppercase bg-tangerine px-8 border-ink-4 brutalist-shadow inline-block">SERVICES</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Service 1 */}
            <div className="bg-surface-container-lowest border-ink-4 p-8 brutalist-shadow group hover:bg-tangerine transition-colors duration-300">
              <div className="flex justify-between items-start mb-12 border-b-ink-4 pb-4">
                <span className="text-[80px] leading-none font-black text-ink">01</span>
                <span className="material-symbols-outlined text-[80px] text-ink">campaign</span>
              </div>
              <h3 className="text-[48px] leading-[48px] font-black uppercase mb-8">Digital <br />Marketing</h3>
              <p className="text-body-lg font-body-lg font-bold">
                From SEO and PPC to social media and content strategy, we help your brand reach the right audience at the right time — with campaigns built on data, not guesswork.
              </p>
            </div>
            {/* Service 2 */}
            <div className="bg-ink text-surface-container-lowest border-ink-4 p-8 brutalist-shadow group hover:bg-tangerine hover:text-ink transition-colors duration-300 mt-0 md:mt-12">
              <div className="flex justify-between items-start mb-12 border-b-4 border-surface-container-lowest group-hover:border-ink pb-4">
                <span className="text-[80px] leading-none font-black">02</span>
                <span className="material-symbols-outlined text-[80px]">group_add</span>
              </div>
              <h3 className="text-[48px] leading-[48px] font-black uppercase mb-8">Recruitment <br />Solutions</h3>
              <p className="text-body-lg font-body-lg font-bold">
                We connect businesses with qualified candidates across all levels — from entry-level professionals to C-suite executives. End-to-end hiring with zero compromise on fit.
              </p>
            </div>
            {/* Service 3 */}
            <div className="bg-surface-container-lowest border-ink-4 p-8 brutalist-shadow group hover:bg-tangerine transition-colors duration-300 mt-0 md:mt-24">
              <div className="flex justify-between items-start mb-12 border-b-ink-4 pb-4">
                <span className="text-[80px] leading-none font-black text-ink">03</span>
                <span className="material-symbols-outlined text-[80px] text-ink">trending_up</span>
              </div>
              <h3 className="text-[48px] leading-[48px] font-black uppercase mb-8">Integrated <br />Growth Strategy</h3>
              <p className="text-body-lg font-body-lg font-bold">
                For businesses that need both, we align your marketing pipeline with your hiring roadmap so both move in the same direction — at the same pace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Ads Mini: Bold, poster-style statements */}
      <section className="py-section-gap bg-surface-container-lowest border-b-ink-4 bg-grid-pattern relative overflow-hidden">
        {/* Mascot BG */}
        <Image unoptimized width={1000} height={1000}           alt=""
          className="mascot-bg w-full md:w-1/2 left-1/4 top-1/4 object-cover opacity-20"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuARkPxU3NNyhCIbbFkQsl8Clz5WMhXlJhspaCAMvvyDnhbuvYNrahVigP-Wdfnp9-9a95jqSzxfGPqMYddJvXa6k5llx9Sjeu5M2OYYX0DcLtgMHwOytEeSDTd6OecBGMRHS-ubT2PLtIapn8xX5qaum7dGyi8rSGEOQJbDN_zOzzRtnDT7GyOVqeHLUstqrIZ-CdHdjePzuAs-AfuAI5rtZHNMTaudlZfDyfP1-sTrn9airL_f3YEMWfnqRcNVhSrYva9ze1gEMZU"
        />
        <div className="px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="mb-24 text-center">
            <h2 className="text-[80px] leading-[80px] md:text-[150px] md:leading-[130px] font-black uppercase text-ink bg-surface-container-lowest border-ink-4 p-8 inline-block brutalist-shadow">WHY ADS MINI?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
            <div className="sticky-note">
              <h3 className="text-[40px] leading-[44px] font-black uppercase mb-8 border-b-ink-4 pb-4">Results Over Reports</h3>
              <p className="text-headline-md font-headline-md font-bold">We do not just send you dashboards and disappear. Every strategy we build is tied to measurable outcomes — traffic, leads, conversions, revenue, and hires. If the number does not move, we move differently.</p>
            </div>
            <div className="sticky-note">
              <h3 className="text-[40px] leading-[44px] font-black uppercase mb-8 border-b-ink-4 pb-4">Specialists, Not Generalists</h3>
              <p className="text-headline-md font-headline-md font-bold">Each client gets a dedicated team with real domain expertise. No junior staff learning on your budget. No outsourced execution. Just people who know what they are doing and are accountable for what they deliver.</p>
            </div>
            <div className="sticky-note">
              <h3 className="text-[40px] leading-[44px] font-black uppercase mb-8 border-b-ink-4 pb-4">One Partner, Two Disciplines</h3>
              <p className="text-headline-md font-headline-md font-bold">Marketing and recruitment handled by one agency means less back and forth, better strategic alignment, and stronger long-term results. You talk to one team. They take care of both sides.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Industries: A creative ecosystem/cloud */}
      <section className="py-section-gap bg-tangerine border-b-ink-4 overflow-hidden relative">
        {/* Mascot BG */}
        <Image unoptimized width={1000} height={1000}           alt=""
          className="mascot-bg w-full md:w-full center object-cover opacity-20 mix-blend-color-burn"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuARkPxU3NNyhCIbbFkQsl8Clz5WMhXlJhspaCAMvvyDnhbuvYNrahVigP-Wdfnp9-9a95jqSzxfGPqMYddJvXa6k5llx9Sjeu5M2OYYX0DcLtgMHwOytEeSDTd6OecBGMRHS-ubT2PLtIapn8xX5qaum7dGyi8rSGEOQJbDN_zOzzRtnDT7GyOVqeHLUstqrIZ-CdHdjePzuAs-AfuAI5rtZHNMTaudlZfDyfP1-sTrn9airL_f3YEMWfnqRcNVhSrYva9ze1gEMZU"
        />
        <div className="px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="bg-surface-container-lowest border-ink-4 p-6 inline-block brutalist-shadow mb-16 rotate-2">
            <h2 className="text-[40px] font-black uppercase tracking-widest text-center">INDUSTRIES WE SERVE</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 max-w-7xl mx-auto">
            <span className="text-[40px] md:text-[60px] font-black uppercase bg-surface-container-lowest border-ink-4 px-8 py-4 brutalist-shadow hover:bg-ink hover:text-surface-container-lowest transition-colors cursor-crosshair transform -rotate-2">Technology, SaaS &amp; IT</span>
            <span className="text-[32px] md:text-[48px] font-black italic bg-ink text-surface-container-lowest border-ink-4 px-8 py-4 brutalist-shadow hover:bg-surface-container-lowest hover:text-ink transition-colors cursor-crosshair transform rotate-3">E-Commerce &amp; D2C</span>
            <span className="text-[48px] md:text-[80px] font-black uppercase px-8 py-4 bg-surface-container-lowest border-ink-4 brutalist-shadow hover:bg-ink hover:text-surface-container-lowest transition-colors cursor-crosshair transform -rotate-1">Healthcare &amp; Pharma</span>
            <span className="text-[32px] md:text-[50px] font-black bg-surface-container-lowest border-ink-4 rounded-full px-12 py-4 brutalist-shadow hover:bg-ink hover:text-surface-container-lowest transition-colors cursor-crosshair transform rotate-6">BFSI</span>
            <span className="text-[40px] md:text-[60px] font-black underline decoration-8 decoration-ink bg-surface-container-lowest border-ink-4 px-8 py-4 brutalist-shadow cursor-crosshair transform -rotate-3">Manufacturing &amp; Logistics</span>
            <span className="text-[36px] md:text-[50px] font-black px-8 py-4 bg-ink text-surface-container-lowest border-ink-4 brutalist-shadow hover:bg-surface-container-lowest hover:text-ink transition-colors cursor-crosshair transform rotate-2">Real Estate</span>
            <span className="text-[48px] md:text-[70px] font-black px-8 py-4 bg-surface-container-lowest border-ink-4 brutalist-shadow text-outline hover:text-ink transition-colors cursor-crosshair transform -rotate-4">Education &amp; EdTech</span>
            <span className="text-[32px] md:text-[48px] font-black uppercase tracking-widest px-8 py-4 bg-surface-container-lowest border-ink-4 brutalist-shadow hover:bg-ink hover:text-surface-container-lowest cursor-crosshair transform rotate-5">Hospitality &amp; Tourism</span>
            <span className="text-[40px] md:text-[56px] font-black italic px-8 py-4 bg-surface-container-lowest border-ink-4 brutalist-shadow hover:line-through transition-all cursor-crosshair transform -rotate-2">Government Enterprise</span>
            <span className="text-[36px] md:text-[50px] font-black bg-ink text-surface-container-lowest border-ink-4 px-8 py-4 brutalist-shadow cursor-crosshair transform rotate-3">FMCG &amp; Consumer Goods</span>
            <span className="text-[50px] md:text-[90px] font-black px-8 py-4 bg-surface-container-lowest border-ink-4 brutalist-shadow hover:scale-110 transition-transform cursor-crosshair transform -rotate-1">Media &amp; Communications</span>
          </div>
        </div>
      </section>

      {/* 6. Stats: Oversized Tangerine numbers */}
      <section className="py-section-gap bg-ink text-surface-container-lowest border-b-ink-4 relative overflow-hidden">
        {/* Mascot BG */}
        <Image unoptimized width={1000} height={1000}           alt=""
          className="mascot-bg w-full md:w-1/2 right-0 top-0 object-cover opacity-10 filter invert"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuARkPxU3NNyhCIbbFkQsl8Clz5WMhXlJhspaCAMvvyDnhbuvYNrahVigP-Wdfnp9-9a95jqSzxfGPqMYddJvXa6k5llx9Sjeu5M2OYYX0DcLtgMHwOytEeSDTd6OecBGMRHS-ubT2PLtIapn8xX5qaum7dGyi8rSGEOQJbDN_zOzzRtnDT7GyOVqeHLUstqrIZ-CdHdjePzuAs-AfuAI5rtZHNMTaudlZfDyfP1-sTrn9airL_f3YEMWfnqRcNVhSrYva9ze1gEMZU"
        />
        <div className="px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
          <div className="flex flex-col items-center justify-center text-center bg-surface-container-lowest text-ink border-ink-4 p-12 brutalist-shadow transform -rotate-2">
            <span className="text-[120px] leading-none font-black text-tangerine drop-shadow-[6px_6px_0_rgba(0,0,0,1)] mb-4">6+</span>
            <span className="text-headline-md font-headline-md font-black uppercase tracking-widest border-t-ink-4 pt-4 w-full">Years of Experience</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center bg-tangerine text-ink border-ink-4 p-12 brutalist-shadow transform rotate-3 mt-0 md:mt-12">
            <span className="text-[120px] leading-none font-black text-surface-container-lowest drop-shadow-[6px_6px_0_rgba(0,0,0,1)] mb-4">500+</span>
            <span className="text-headline-md font-headline-md font-black uppercase tracking-widest border-t-ink-4 pt-4 w-full">Clients Served</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center bg-surface-container-lowest text-ink border-ink-4 p-12 brutalist-shadow transform -rotate-1 mt-0 md:mt-24">
            <span className="text-[120px] leading-none font-black text-tangerine drop-shadow-[6px_6px_0_rgba(0,0,0,1)] mb-4">100+</span>
            <span className="text-headline-md font-headline-md font-black uppercase tracking-widest border-t-ink-4 pt-4 w-full">Campaigns/Month</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center bg-tangerine text-ink border-ink-4 p-12 brutalist-shadow transform rotate-2 mt-0 md:mt-36">
            <span className="text-[80px] leading-[70px] font-black text-surface-container-lowest drop-shadow-[6px_6px_0_rgba(0,0,0,1)] mb-4 flex items-center h-[120px]">MULTI<br />COUNTRY</span>
            <span className="text-headline-md font-headline-md font-black uppercase tracking-widest border-t-ink-4 pt-4 w-full">Client Base</span>
          </div>
        </div>
      </section>

      {/* 7. CTA: Bold poster */}
      <section className="min-h-[90vh] bg-surface-container-lowest border-b-ink-4 flex flex-col justify-center items-center text-center px-margin-mobile md:px-margin-desktop py-section-gap relative overflow-hidden bg-grid-pattern">
        {/* Large Hand-drawn Megaphone */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none z-0">
          <Image unoptimized width={1000} height={1000}             alt="Megaphone"
            className="w-full max-w-[800px] object-contain grayscale contrast-200"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuARkPxU3NNyhCIbbFkQsl8Clz5WMhXlJhspaCAMvvyDnhbuvYNrahVigP-Wdfnp9-9a95jqSzxfGPqMYddJvXa6k5llx9Sjeu5M2OYYX0DcLtgMHwOytEeSDTd6OecBGMRHS-ubT2PLtIapn8xX5qaum7dGyi8rSGEOQJbDN_zOzzRtnDT7GyOVqeHLUstqrIZ-CdHdjePzuAs-AfuAI5rtZHNMTaudlZfDyfP1-sTrn9airL_f3YEMWfnqRcNVhSrYva9ze1gEMZU"
          />
        </div>
        <div className="bg-tangerine border-ink-4 p-16 md:p-32 brutalist-shadow relative z-10 w-full max-w-6xl transform -rotate-1">
          <h2 className="text-[100px] leading-[90px] md:text-[200px] md:leading-[180px] font-black uppercase text-ink mb-12 drop-shadow-[8px_8px_0_rgba(255,255,255,1)]">
            READY TO GROW?
          </h2>
          <p className="text-[40px] leading-[48px] font-black text-ink mb-16 bg-surface-container-lowest border-ink-4 p-8 brutalist-shadow mx-auto max-w-4xl transform rotate-2">
            Let us talk about what your business needs — more leads, better visibility, the right hires, or all three.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-ink text-surface-container-lowest border-ink-4 px-16 py-8 text-[40px] font-black uppercase hover:bg-surface-container-lowest hover:text-ink transition-all duration-300 relative z-10 brutalist-shadow transform hover:scale-105 -rotate-2"
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
