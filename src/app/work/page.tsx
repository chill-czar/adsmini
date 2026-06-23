import Image from "next/image";
export default function WorkPage() {
  return (
    <div className="text-ink font-body-lg bg-[#F9F9F9]">
      <main className="relative w-full max-w-[1920px] mx-auto pb-section-gap overflow-hidden">
        {/* Hero Section */}
        <section className="relative pt-20 md:pt-section-gap px-margin-mobile md:px-margin-desktop mb-12 md:mb-section-gap">
          <div className="grid-12 relative z-10">
            <div className="col-span-12 md:col-span-11 relative">
              <h1 className="font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl uppercase leading-none break-words relative z-20">
                Work We Are<br />
                <span className="text-tangerine block mt-2">Proud Of</span>
              </h1>
              {/* Decorative Mascot */}
              <Image unoptimized width={1000} height={1000}                 alt="Hand drawn mascot characters leaning and pointing"
                className="absolute -right-10 md:right-0 top-0 w-32 md:w-64 opacity-80 mix-blend-multiply z-10 hidden md:block"
                src="https://lh3.googleusercontent.com/aida/AP1WRLv23ksB56h_ljfULkaavUo6ijM9ZUxdbusQJsmQ_LVOxgvcoZ0wb4ijI3NczXv2iyQAbLGzpFGMSLMOT9DI5oqLKf4ZdCCfUIfla9VUmTntDUTXdfdkIvY4HuuCJwAQMfnwKEcoa9gZQgs9gnRSzcsaLThtThSSO-J5HyWO6EMx246xLz4SroenIZoUoVeu1tQ8V72BhW_Df1Q4JDm14pX84_P-mi6zhoOS2yBf1Sb11krQYdtOIG5bnwM"
              />
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-4 mt-8 md:mt-24">
              <p className="font-body-md md:text-body-lg text-body-md md:text-body-lg text-ink font-semibold border-l-4 border-tangerine pl-4 md:pl-6">
                Every result here was earned through careful strategy, consistent execution, and honest client partnerships. Numbers do not lie — here is a look at what we have achieved together.
              </p>
            </div>
          </div>
        </section>

        {/* Divider Line */}
        <div className="w-full h-px bg-ink my-8 md:my-12 opacity-20"></div>

        {/* Google Ads Section */}
        <section className="relative py-20 md:py-section-gap px-margin-mobile md:px-margin-desktop">
          <div className="grid-12 items-center">
            <div className="col-span-12 md:col-span-5 relative">
              <p className="font-label-mono text-label-mono text-tangerine uppercase mb-4 tracking-widest">[ GOOGLE ADS ]</p>
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase mb-6 md:mb-8">
                Dominating<br />Search<br />
                <span className="text-outline">Intent</span>
              </h2>
              <ul className="space-y-3 md:space-y-4 font-headline-md text-[20px] md:text-headline-md text-ink">
                <li className="kinetic-border-b pb-2 hover:text-tangerine transition-colors flex justify-between group cursor-pointer">
                  Tresmode <span className="text-sm font-label-mono opacity-0 group-hover:opacity-100 transition-opacity">Footwear</span>
                </li>
                <li className="kinetic-border-b pb-2 hover:text-tangerine transition-colors flex justify-between group cursor-pointer">
                  Isha Life <span className="text-sm font-label-mono opacity-0 group-hover:opacity-100 transition-opacity">Fashion</span>
                </li>
                <li className="kinetic-border-b pb-2 hover:text-tangerine transition-colors flex justify-between group cursor-pointer">
                  Neera <span className="text-sm font-label-mono opacity-0 group-hover:opacity-100 transition-opacity">E-Commerce</span>
                </li>
                <li className="kinetic-border-b pb-2 hover:text-tangerine transition-colors flex justify-between group cursor-pointer">
                  Renew Drycleaners <span className="text-sm font-label-mono opacity-0 group-hover:opacity-100 transition-opacity">UK</span>
                </li>
                <li className="kinetic-border-b pb-2 hover:text-tangerine transition-colors flex justify-between group cursor-pointer">
                  Tech Fynder
                </li>
                <li className="kinetic-border-b pb-2 hover:text-tangerine transition-colors flex justify-between group cursor-pointer">
                  Moon Tours
                </li>
                <li className="kinetic-border-b pb-2 hover:text-tangerine transition-colors flex justify-between group cursor-pointer">
                  Chalbo India
                </li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7 mt-12 md:mt-0 relative flex justify-center">
              {/* Massive stat visual */}
              <div className="relative w-full max-w-[280px] md:max-w-md aspect-square bg-ink text-paper rounded-full flex flex-col items-center justify-center p-6 md:p-8 transform rotate-0 md:rotate-3 hover:rotate-0 transition-transform duration-500 shadow-[8px_8px_0px_0px_#FA9948] md:shadow-[16px_16px_0px_0px_#FA9948]">
                <p className="font-label-mono text-label-mono uppercase tracking-widest text-tangerine mb-2 md:mb-4">Avg. ROAS</p>
                <p className="font-display-xl text-[60px] md:text-display-xl leading-none">10.2x</p>
              </div>
              {/* Decorative Mascot */}
              <Image unoptimized width={1000} height={1000}                 alt="Mascot leaning on large data figure"
                className="absolute -bottom-10 -right-10 w-32 md:w-40 mix-blend-multiply"
                src="https://lh3.googleusercontent.com/aida/AP1WRLv23ksB56h_ljfULkaavUo6ijM9ZUxdbusQJsmQ_LVOxgvcoZ0wb4ijI3NczXv2iyQAbLGzpFGMSLMOT9DI5oqLKf4ZdCCfUIfla9VUmTntDUTXdfdkIvY4HuuCJwAQMfnwKEcoa9gZQgs9gnRSzcsaLThtThSSO-J5HyWO6EMx246xLz4SroenIZoUoVeu1tQ8V72BhW_Df1Q4JDm14pX84_P-mi6zhoOS2yBf1Sb11krQYdtOIG5bnwM"
              />
            </div>
          </div>
        </section>

        {/* Connectivity Elements */}
        <div className="relative w-full h-20 md:h-32 my-8 md:my-12 flex justify-center items-center overflow-hidden">
          <Image unoptimized width={1000} height={1000}             alt="Doodles and squiggles connecting sections"
            className="w-full h-full object-cover opacity-30 mix-blend-multiply"
            src="https://lh3.googleusercontent.com/aida/AP1WRLv17SRjP-UvZlcE2B7wxIUxj_ZUzRoj6K9y85M06NTDzlHSlC78JWFt_RaeIn5axL61bmzsleL7Ca2AG7GZGV7JJG4FYEARR4kVsHmpK5easCgUHh6VbKlN7gwLVX7kP2oAfAtbaugB-1-c5feyTMtgZFSOXb7vofYEWUakCnIFVQ61Fk0bEglrCGpiJVvBiHi7QHxhEvOHR3MC5ZWfWJb7rUK8oJ4RxwlHwFkYWVcirzv-niVd_jBdFU0"
          />
        </div>

        {/* Meta Ads Section */}
        <section className="relative py-20 md:py-section-gap px-margin-mobile md:px-margin-desktop bg-ink text-paper">
          <div className="grid-12">
            <div className="col-span-12 md:col-span-1 relative h-full hidden md:block">
              <p className="vertical-text font-label-mono text-label-mono text-tangerine uppercase tracking-widest absolute top-0 left-0">[ FACEBOOK &amp; META ]</p>
            </div>
            <div className="col-span-12 md:col-span-11 grid-12">
              <div className="col-span-12 mb-8 md:mb-16">
                <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-tangerine">
                  Social<br />Velocity
                </h2>
              </div>
              <div className="col-span-12 md:col-span-7">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 md:gap-y-12 font-body-md md:font-body-lg">
                  <div className="border-t-2 border-paper pt-3 md:pt-4">
                    <h3 className="font-headline-md text-[20px] md:text-headline-md uppercase mb-2">Sizzle</h3>
                    <p className="font-label-mono text-label-mono text-secondary">F&amp;B</p>
                  </div>
                  <div className="border-t-2 border-paper pt-3 md:pt-4">
                    <h3 className="font-headline-md text-[20px] md:text-headline-md uppercase mb-2">The Digital Bundle</h3>
                    <p className="font-label-mono text-label-mono text-secondary">Agency</p>
                  </div>
                  <div className="border-t-2 border-paper pt-3 md:pt-4">
                    <h3 className="font-headline-md text-[20px] md:text-headline-md uppercase mb-2">Okapi</h3>
                    <p className="font-label-mono text-label-mono text-secondary">E-Commerce</p>
                  </div>
                  <div className="border-t-2 border-paper pt-3 md:pt-4">
                    <h3 className="font-headline-md text-[20px] md:text-headline-md uppercase mb-2">GT Groups</h3>
                    <p className="font-label-mono text-label-mono text-secondary">Real Estate</p>
                  </div>
                  <div className="border-t-2 border-paper pt-3 md:pt-4">
                    <h3 className="font-headline-md text-[20px] md:text-headline-md uppercase mb-2">Catchy Trade</h3>
                    <p className="font-label-mono text-label-mono text-secondary">Finance</p>
                  </div>
                  <div className="border-t-2 border-paper pt-3 md:pt-4">
                    <h3 className="font-headline-md text-[20px] md:text-headline-md uppercase mb-2">Stabo Life</h3>
                    <p className="font-label-mono text-label-mono text-secondary">Health</p>
                  </div>
                  <div className="border-t-2 border-paper pt-3 md:pt-4 md:col-span-2">
                    <h3 className="font-headline-md text-[20px] md:text-headline-md uppercase mb-2">S&amp;A Renovation</h3>
                    <p className="font-label-mono text-label-mono text-secondary">Canada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
