"use client";
import Image from "next/image";

import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    // Simple scroll reveal
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-paper text-ink font-body-md overflow-x-hidden selection:bg-tangerine selection:text-ink">
      <main>
        {/* Hero Section */}
        <header className="relative px-margin-mobile md:px-margin-desktop py-20 md:py-section-gap min-h-[60vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern height="40" id="grid" patternUnits="userSpaceOnUse" width="40">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#000" strokeWidth="0.5"></path>
                </pattern>
              </defs>
              <rect fill="url(#grid)" height="100%" width="100%"></rect>
            </svg>
          </div>
          <Image unoptimized width={1000} height={1000}             alt="Hand-drawn stars and rocket doodles indicating creativity and launch"
            className="absolute top-20 right-10 md:right-32 w-24 md:w-64 opacity-80 wobble-hover z-10"
            src="https://lh3.googleusercontent.com/aida/AP1WRLv17SRjP-UvZlcE2B7wxIUxj_ZUzRoj6K9y85M06NTDzlHSlC78JWFt_RaeIn5axL61bmzsleL7Ca2AG7GZGV7JJG4FYEARR4kVsHmpK5easCgUHh6VbKlN7gwLVX7kP2oAfAtbaugB-1-c5feyTMtgZFSOXb7vofYEWUakCnIFVQ61Fk0bEglrCGpiJVvBiHi7QHxhEvOHR3MC5ZWfWJb7rUK8oJ4RxwlHwFkYWVcirzv-niVd_jBdFU0"
          />
          <div className="relative z-20 max-w-5xl text-center">
            <span className="font-label-mono text-label-mono text-tangerine tracking-widest uppercase mb-6 md:mb-8 block reveal-on-scroll">The Ads Mini Manifesto</span>
            <h1 className="font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl uppercase leading-none mb-6 md:mb-8 reveal-on-scroll" style={{ transitionDelay: "0.1s" }}>
              Built With <br /><span className="scribble-underline">Purpose.</span><br /> Run by Professionals.
            </h1>
            <div className="w-24 h-2 bg-ink mx-auto mb-8 md:mb-12 reveal-on-scroll" style={{ transitionDelay: "0.2s" }}></div>
            <svg className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-64 h-64 z-0 hidden md:block" fill="none" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path className="dashed-path" d="M100 0 Q 150 100 100 200" fill="none" stroke="#FA9948" strokeDasharray="10 10" strokeWidth="4"></path>
              <path d="M90 180 L100 200 L110 180" fill="none" stroke="#FA9948" strokeWidth="4"></path>
            </svg>
          </div>
        </header>

        {/* Our Story Section */}
        <section className="px-margin-mobile md:px-margin-desktop py-20 md:py-section-gap relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-5 md:col-start-2 reveal-on-scroll">
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase mb-6 md:mb-8 relative inline-block">
                Our Story
                <div className="absolute -left-6 -top-6 w-12 h-12 bg-tangerine rounded-full -z-10 opacity-50"></div>
              </h2>
              <div className="space-y-4 md:space-y-6 font-body-md md:text-body-lg text-body-md md:text-body-lg">
                <p>From the beginning, Ads Mini was built to challenge the traditional agency model—one where generic strategies, endless delays, and lack of accountability were the norm. We wanted something different. Something bolder.</p>
                <p>We believe that when great minds and actionable data come together, magic happens. Whether you are looking for explosive growth or to build a powerhouse team, we are here to make it happen.</p>
              </div>
            </div>
            <div className="md:col-span-4 md:col-start-8 relative mt-8 md:mt-0 reveal-on-scroll" style={{ transitionDelay: "0.2s" }}>
              <div className="hand-drawn-border bg-surface-container-lowest p-8 brutalist-shadow relative z-10 h-full flex flex-col justify-center">
                <h3 className="font-headline-md text-headline-md mb-3 md:mb-4 uppercase">The Spark</h3>
                <p className="font-body-md text-body-md">We didn't start in a boardroom. We started with a whiteboard, too much coffee, and a belief that agencies could do better.</p>
              </div>
              <Image unoptimized width={1000} height={1000}                 alt="Hand-drawn sketch of a quirky mascot character leaning casually against a wall"
                className="absolute -right-12 -bottom-16 w-36 md:w-64 z-20 wobble-hover"
                src="https://lh3.googleusercontent.com/aida/AP1WRLv23ksB56h_ljfULkaavUo6ijM9ZUxdbusQJsmQ_LVOxgvcoZ0wb4ijI3NczXv2iyQAbLGzpFGMSLMOT9DI5oqLKf4ZdCCfUIfla9VUmTntDUTXdfdkIvY4HuuCJwAQMfnwKEcoa9gZQgs9gnRSzcsaLThtThSSO-J5HyWO6EMx246xLz4SroenIZoUoVeu1tQ8V72BhW_Df1Q4JDm14pX84_P-mi6zhoOS2yBf1Sb11krQYdtOIG5bnwM"
              />
            </div>
          </div>
        </section>

        {/* Mission/Vision & Approach */}
        <section className="bg-ink text-surface-container-lowest px-margin-mobile md:px-margin-desktop py-20 md:py-section-gap relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[30vw] font-display-xl text-surface-container-lowest opacity-5 whitespace-nowrap pointer-events-none select-none">
            APPROACH
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter max-w-6xl mx-auto relative z-10">
            <div className="reveal-on-scroll border-t-2 border-tangerine pt-6 md:pt-8">
              <span className="font-label-mono text-label-mono text-tangerine uppercase tracking-widest mb-3 md:mb-4 block">The Mission</span>
              <h3 className="font-headline-md text-[24px] md:text-headline-md mb-4 md:mb-6 uppercase">To empower businesses by bridging the gap between visibility and talent.</h3>
            </div>
            <div className="reveal-on-scroll border-t-2 border-tangerine pt-6 md:pt-8" style={{ transitionDelay: "0.2s" }}>
              <span className="font-label-mono text-label-mono text-tangerine uppercase tracking-widest mb-3 md:mb-4 block">Our Approach</span>
              <div className="space-y-4 font-body-md md:text-body-lg text-body-md md:text-body-lg text-surface-variant">
                <p>We blend analytical rigor with creative strategy. It's not just about running ads or posting content—it's about understanding the entire ecosystem of your business and implementing solutions that drive real, measurable impact.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="px-margin-mobile md:px-margin-desktop py-20 md:py-section-gap">
          <div className="text-center mb-12 md:mb-24 reveal-on-scroll">
            <h2 className="font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl uppercase inline-block relative">
              Values
              <span className="absolute -bottom-4 left-0 w-full h-4 bg-tangerine -z-10 transform -skew-x-12"></span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-24 gap-x-gutter">
            {/* Value 1 */}
            <div className="relative reveal-on-scroll flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              <div className="font-display-xl text-[60px] md:text-display-xl text-tangerine leading-none opacity-50">01</div>
              <div className="bg-surface-container-lowest border-2 border-ink p-6 flex-1">
                <h3 className="font-headline-md text-[24px] md:text-headline-md uppercase mb-3 md:mb-4">Transparency</h3>
                <p className="text-body-md md:text-body-lg font-body-md md:font-body-lg font-medium">We share everything. The good, the bad, and the work in progress. No black-box strategies, no hidden markups.</p>
              </div>
            </div>
            {/* Value 2 */}
            <div className="relative reveal-on-scroll flex flex-col md:flex-row gap-6 md:gap-8 items-start mt-0 md:mt-32">
              <div className="font-display-xl text-[60px] md:text-display-xl text-tangerine leading-none opacity-50">02</div>
              <div className="bg-surface-container-lowest border-2 border-ink p-6 flex-1">
                <h3 className="font-headline-md text-[24px] md:text-headline-md uppercase mb-3 md:mb-4">Ownership</h3>
                <p className="text-body-md md:text-body-lg font-body-md md:font-body-lg font-medium">Your targets become our targets. We do not just execute tasks; we take responsibility for the outcomes.</p>
              </div>
            </div>
            {/* Value 3 */}
            <div className="relative reveal-on-scroll flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              <div className="font-display-xl text-[60px] md:text-display-xl text-tangerine leading-none opacity-50">03</div>
              <div className="bg-surface-container-lowest border-2 border-ink p-6 flex-1">
                <h3 className="font-headline-md text-[24px] md:text-headline-md uppercase mb-3 md:mb-4">Expertise</h3>
                <p className="text-body-md md:text-body-lg font-body-md md:font-body-lg font-medium">We believe in doing a few things exceptionally well. Our team consists of specialists, not generalists.</p>
              </div>
            </div>
            {/* Value 4 */}
            <div className="relative reveal-on-scroll flex flex-col md:flex-row gap-6 md:gap-8 items-start mt-0 md:mt-32">
              <div className="font-display-xl text-[60px] md:text-display-xl text-tangerine leading-none opacity-50">04</div>
              <div className="bg-surface-container-lowest border-2 border-ink p-6 flex-1">
                <h3 className="font-headline-md text-[24px] md:text-headline-md uppercase mb-3 md:mb-4">Long-Term Thinking</h3>
                <p className="font-body-md text-body-md border-l-2 border-ink pl-4 py-2">We don't do quick fixes. We build sustainable strategies that pay off for years to come.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="bg-surface-variant px-margin-mobile md:px-margin-desktop py-20 md:py-section-gap border-y-2 border-ink relative overflow-hidden">
          <svg className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 -translate-y-1/2 translate-x-1/2 z-0 opacity-20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" fill="none" r="90" stroke="#000" strokeDasharray="20 10" strokeWidth="4"></circle>
          </svg>
          <div className="mb-12 md:mb-20 text-center md:text-left reveal-on-scroll">
            <span className="font-label-mono text-label-mono uppercase tracking-widest text-ink block mb-3 md:mb-4">Leadership</span>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase">The Minds <br />Behind The Madness</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            {/* Aman */}
            <div className="md:col-span-5 md:col-start-1 relative reveal-on-scroll">
              <div className="bg-tangerine w-full aspect-[3/4] hand-drawn-border absolute top-4 left-4 z-0"></div>
              <div className="bg-surface-container-lowest w-full aspect-[3/4] border-4 border-ink brutalist-shadow relative z-10 flex flex-col justify-end p-8 group">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-80" data-alt="A professional headshot of a confident male executive in a modern, well-lit studio environment."></div>
                <div className="relative z-20 bg-white/90 backdrop-blur-sm p-3 md:p-4 border-2 border-ink inline-block transform -translate-x-6 md:-translate-x-12 translate-y-8 md:translate-y-12">
                  <h3 className="font-headline-md text-[20px] md:text-headline-md uppercase m-0">Aman Shrivas</h3>
                  <p className="font-label-mono text-label-mono text-tangerine uppercase font-bold">Founder &amp; CEO</p>
                </div>
              </div>
              <div className="mt-12 md:mt-20 font-body-md text-body-md">
                <p>Aman has over a decade of experience driving growth for global brands. His focus is on combining deep data analysis with bold creative execution.</p>
              </div>
            </div>
            <div className="md:col-span-2 hidden md:flex justify-center items-center h-full">
              <div className="w-px h-full bg-ink relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white border-2 border-ink rounded-full flex items-center justify-center font-label-mono text-label-mono pb-1">+</div>
              </div>
            </div>
            {/* Akansha */}
            <div className="md:col-span-5 relative mt-16 md:mt-0 reveal-on-scroll" style={{ transitionDelay: "0.2s" }}>
              <div className="bg-ink w-full aspect-[3/4] absolute top-4 -right-4 z-0 rounded-tl-3xl rounded-br-3xl"></div>
              <div className="bg-surface-container-lowest w-full aspect-[3/4] border-4 border-ink brutalist-shadow relative z-10 flex flex-col justify-start p-8 group rounded-tl-3xl rounded-br-3xl">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-80 rounded-tl-3xl rounded-br-3xl" data-alt="A professional headshot of a dynamic female executive in a bright, modern office space."></div>
                <div className="relative z-20 bg-white/90 backdrop-blur-sm p-3 md:p-4 border-2 border-ink inline-block transform translate-x-6 md:translate-x-12 -translate-y-8 md:-translate-y-12 self-end">
                  <h3 className="font-headline-md text-[20px] md:text-headline-md uppercase m-0">Akansha Shrivastava</h3>
                  <p className="font-label-mono text-label-mono text-tangerine uppercase font-bold">Head of Recruitment</p>
                </div>
              </div>
              <div className="mt-6 md:mt-8 font-body-md text-body-md text-right">
                <p>Akansha leads the talent acquisition strategy, ensuring that Ads Mini not only executes top-tier marketing campaigns but also helps clients build the teams they need to sustain growth.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="px-margin-mobile md:px-margin-desktop py-20 md:py-section-gap">
          <div className="border-y-4 border-ink py-8 md:py-12 reveal-on-scroll">
            <h3 className="font-headline-md text-[24px] md:text-headline-md uppercase text-center mb-8 md:mb-12">Trusted &amp; Certified By</h3>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-16 items-center">
              <span className="bg-surface-container-lowest border-2 border-ink px-6 py-2 rounded-full text-label-mono font-label-mono uppercase font-bold cursor-default">Google Partner</span>
              <span className="bg-surface-container-lowest border-2 border-ink px-6 py-2 rounded-full text-label-mono font-label-mono uppercase font-bold cursor-default">Meta Business Partner</span>
              <span className="bg-surface-container-lowest border-2 border-ink px-6 py-2 rounded-full text-label-mono font-label-mono uppercase font-bold cursor-default">LinkedIn Marketing Solutions</span>
              <span className="bg-surface-container-lowest border-2 border-ink px-6 py-2 rounded-full text-label-mono font-label-mono uppercase font-bold cursor-default">Snapchat Ads Manager Certified</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
