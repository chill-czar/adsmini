import Image from "next/image";
import Link from "next/link";

export default function RecruitmentPage() {
  return (
    <div className="font-body-md bg-paper selection:bg-tangerine selection:text-ink">
      <main className="relative w-full">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] md:min-h-[90vh] flex flex-col justify-center px-margin-mobile md:px-margin-desktop py-20 md:py-section-gap grid-bg border-ink-b-2">
          <div className="absolute top-20 right-10 md:right-20 w-48 md:w-96 opacity-30 md:opacity-50 pointer-events-none transform rotate-12">
            <Image unoptimized width={1000} height={1000}               alt="Hand-drawn marketing doodles and stars"
              className="w-full h-auto object-contain mix-blend-multiply"
              src="https://lh3.googleusercontent.com/aida/AP1WRLv17SRjP-UvZlcE2B7wxIUxj_ZUzRoj6K9y85M06NTDzlHSlC78JWFt_RaeIn5axL61bmzsleL7Ca2AG7GZGV7JJG4FYEARR4kVsHmpK5easCgUHh6VbKlN7gwLVX7kP2oAfAtbaugB-1-c5feyTMtgZFSOXb7vofYEWUakCnIFVQ61Fk0bEglrCGpiJVvBiHi7QHxhEvOHR3MC5ZWfWJb7rUK8oJ4RxwlHwFkYWVcirzv-niVd_jBdFU0"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter relative z-10">
            <div className="md:col-span-10">
              <p className="font-label-mono text-label-mono uppercase mb-4 tracking-widest text-tangerine">01 / Services / Recruitment</p>
              <h1 className="font-display-xl-mobile text-display-xl-mobile md:font-display-xl md:text-display-xl uppercase leading-[0.9] mb-6 md:mb-8">
                The Right <br /><span className="text-tangerine italic">Person</span> for the <br />Right Role.
              </h1>
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-end mt-8 md:mt-12">
                <div className="w-full md:w-1/3 border-l-4 border-tangerine pl-4 md:pl-6">
                  <p className="font-body-md md:text-body-lg font-body-md md:font-body-lg text-secondary">
                    Hiring is one of the most consequential decisions a business makes. We don't just fill seats; we find the missing pieces to your puzzle.
                  </p>
                </div>
                <Image unoptimized width={1000} height={1000}                   alt="Cartoon mascot shouting louder into a megaphone"
                  className="w-32 md:w-48 h-auto object-contain mix-blend-multiply -ml-4 md:-ml-8 mt-6 md:mt-0"
                  src="https://lh3.googleusercontent.com/aida/AP1WRLv23ksB56h_ljfULkaavUo6ijM9ZUxdbusQJsmQ_LVOxgvcoZ0wb4ijI3NczXv2iyQAbLGzpFGMSLMOT9DI5oqLKf4ZdCCfUIfla9VUmTntDUTXdfdkIvY4HuuCJwAQMfnwKEcoa9gZQgs9gnRSzcsaLThtThSSO-J5HyWO6EMx246xLz4SroenIZoUoVeu1tQ8V72BhW_Df1Q4JDm14pX84_P-mi6zhoOS2yBf1Sb11krQYdtOIG5bnwM"
                />
              </div>
            </div>
          </div>
        </section>

        {/* End-to-End Section */}
        <section className="py-20 md:py-section-gap px-margin-mobile md:px-margin-desktop relative overflow-hidden bg-ink text-paper">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-5 relative">
              <div className="w-full aspect-[3/4] bg-tangerine flex items-center justify-center p-6 md:p-8 relative border-2 border-paper">
                <Image unoptimized width={1000} height={1000}                   alt="Cartoon mascot leaning casually against a wall"
                  className="w-full h-auto object-contain mix-blend-multiply filter invert"
                  src="https://lh3.googleusercontent.com/aida/AP1WRLv23ksB56h_ljfULkaavUo6ijM9ZUxdbusQJsmQ_LVOxgvcoZ0wb4ijI3NczXv2iyQAbLGzpFGMSLMOT9DI5oqLKf4ZdCCfUIfla9VUmTntDUTXdfdkIvY4HuuCJwAQMfnwKEcoa9gZQgs9gnRSzcsaLThtThSSO-J5HyWO6EMx246xLz4SroenIZoUoVeu1tQ8V72BhW_Df1Q4JDm14pX84_P-mi6zhoOS2yBf1Sb11krQYdtOIG5bnwM"
                />
                <div className="absolute -right-16 top-20 transform rotate-90 hidden md:block">
                  <span className="font-label-mono text-label-mono tracking-widest text-paper">END-TO-END</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-6 md:col-start-7 mt-8 md:mt-16">
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg mb-8 md:mb-12 text-tangerine">
                End-to-End <br />Recruitment
              </h2>
              <ul className="space-y-4 md:space-y-6">
                <li className="border-t-2 border-paper pt-6 flex items-start gap-4">
                  <span className="font-display-xl text-[32px] md:text-[40px] text-tangerine leading-none mt-1">01</span>
                  <div>
                    <h3 className="font-headline-md text-[20px] md:text-[24px] uppercase mb-2">Requirement Analysis</h3>
                    <p className="font-body-md text-paper/70">Deep dive into your exact needs and cultural fit.</p>
                  </div>
                </li>
                <li className="border-t-2 border-paper pt-6 flex items-start gap-4">
                  <span className="font-display-xl text-[32px] md:text-[40px] text-tangerine leading-none mt-1">02</span>
                  <div>
                    <h3 className="font-headline-md text-[20px] md:text-[24px] uppercase mb-2">Sourcing Strategy</h3>
                    <p className="font-body-md text-paper/70">Multi-channel approach to find hidden gems.</p>
                  </div>
                </li>
                <li className="border-t-2 border-paper pt-6 flex items-start gap-4">
                  <span className="font-display-xl text-[32px] md:text-[40px] text-tangerine leading-none mt-1">03</span>
                  <div>
                    <h3 className="font-headline-md text-[20px] md:text-[24px] uppercase mb-2">Screening &amp; Assessment</h3>
                    <p className="font-body-md text-paper/70">Rigorous filtering before you even see a resume.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-20 md:py-section-gap px-margin-mobile md:px-margin-desktop bg-tangerine border-ink-b-2 relative grid-bg">
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
              <path className="dashed-path" d="M 100 100 Q 300 300 500 100 T 900 300" fill="none" stroke="#000" strokeWidth="4"></path>
            </svg>
          </div>
          <div className="text-center mb-12 md:mb-24 relative z-10">
            <h2 className="font-display-xl-mobile text-display-xl-mobile md:font-display-xl md:text-display-xl text-ink uppercase">
              How We <br /><span className="text-paper italic">Recruit</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10">
            <div className="bg-surface-container-lowest border-4 border-ink p-8 brutalist-shadow relative group mt-0 md:mt-0">
              <span className="bg-tangerine border-2 border-ink px-4 py-2 text-label-mono font-label-mono uppercase font-bold mb-4 md:mb-6 inline-block">STEP ONE</span>
              <h3 className="font-headline-md text-headline-md mb-3 md:mb-4 uppercase">The Brief</h3>
              <p className="font-body-md">We sit down to understand exactly what you are looking for, beyond just the bullet points.</p>
            </div>
            <div className="bg-surface-container-lowest border-4 border-ink p-8 brutalist-shadow relative group mt-0 md:mt-16">
              <span className="bg-tangerine border-2 border-ink px-4 py-2 text-label-mono font-label-mono uppercase font-bold mb-4 md:mb-6 inline-block">STEP TWO</span>
              <h3 className="font-headline-md text-headline-md mb-3 md:mb-4 uppercase">The Hunt</h3>
              <p className="font-body-md">Our team taps into our networks, databases, and creative channels to find the right candidates.</p>
            </div>
            <div className="bg-surface-container-lowest border-4 border-ink p-8 brutalist-shadow relative group mt-0 md:mt-32">
              <span className="bg-tangerine border-2 border-ink px-4 py-2 text-label-mono font-label-mono uppercase font-bold mb-4 md:mb-6 inline-block">STEP THREE</span>
              <h3 className="font-headline-md text-headline-md mb-3 md:mb-4 uppercase">The Match</h3>
              <p className="font-body-md">We present a curated shortlist, handle the interviews, and help you close the deal.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-section-gap px-margin-mobile md:px-margin-desktop bg-paper text-center relative overflow-hidden">
          <div className="absolute top-10 left-10 w-32 md:w-48 opacity-40 pointer-events-none">
            <Image unoptimized width={1000} height={1000}               alt="Hand-drawn lightbulb and rocket doodles"
              className="w-full h-auto object-contain mix-blend-multiply"
              src="https://lh3.googleusercontent.com/aida/AP1WRLv17SRjP-UvZlcE2B7wxIUxj_ZUzRoj6K9y85M06NTDzlHSlC78JWFt_RaeIn5axL61bmzsleL7Ca2AG7GZGV7JJG4FYEARR4kVsHmpK5easCgUHh6VbKlN7gwLVX7kP2oAfAtbaugB-1-c5feyTMtgZFSOXb7vofYEWUakCnIFVQ61Fk0bEglrCGpiJVvBiHi7QHxhEvOHR3MC5ZWfWJb7rUK8oJ4RxwlHwFkYWVcirzv-niVd_jBdFU0"
            />
          </div>
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg uppercase max-w-4xl mx-auto mb-8 md:mb-12">
            Tell Us Who You Are <br /><span className="text-tangerine italic">Looking For</span>
          </h2>
          <Link
            href="/contact"
            className="bg-tangerine text-ink border-4 border-ink px-8 py-4 text-headline-md font-headline-md font-black uppercase brutalist-shadow hover:bg-ink hover:text-surface-container-lowest transition-all duration-300 inline-flex items-center gap-3"
          >
            Submit a Hiring Brief
          </Link>
        </section>
      </main>
    </div>
  );
}
