'use client'
import React from 'react';

export default function About() {
  return (
    <section className="w-full h-fit bg-[var(--hack-bg)] relative grid place-items-center overflow-hidden py-4 md:py-16 ">
      {/* Hand Image (Before element replacement) */}
      {/* <div 
        className="hidden md:block absolute bottom-[0rem] left-[-80px] w-[26rem] h-[26rem] bg-no-repeat bg-contain scale-[0.6] pointer-events-none"
        style={{ backgroundImage: "url('https://raw.githubusercontent.com/adeolaadeoti/adeolaadeoti-v2/main/public/webp/hand-left.webp')" }}
      /> */}

      <div className="w-full max-w-[1100px] h-fit flex items-center justify-between flex-col md:flex-row z-[1] px-8 md:w-[85%] md:px-0">
        <article className="max-w-[460px] h-auto text-[1.07em] block text-left mb-[35px] md:mb-0">
          <h1 className="text-[2.5em] md:text-[3.5em] font-black tracking-[-0.03em] text-transparent max-w-none md:max-w-[30vw] leading-[1.5] [-webkit-text-stroke:1px_var(--linear-grey)]">
            Design
          </h1>

          <p className="leading-[1.6] text-[var(--linear-grey)] text-[0.9em] font-medium mt-4">
            I don&apos;t just design static visuals; I build living interfaces.
            Instead of tweaking pixels on an artboard, I design in the
            browser-obsessing over stylesheets, typography, and fluid layouts to
            ensure the final experience feels as good as it looks.
          </p>
        </article>

        <article className="max-w-[460px] h-auto text-[1.07em] block text-left mt-[35px] md:mt-0">
          <h1 className="text-[2.5em] md:text-[3.5em] font-black tracking-[-0.03em] text-transparent max-w-none md:max-w-[30vw] leading-[1.5] [-webkit-text-stroke:1px_var(--linear-grey)]">
            Engineering
          </h1>

          <p className="leading-[1.6] text-[var(--linear-grey)] text-[0.9em] font-medium mt-4">
            I specialize in the JavaScript ecosystem, building durable
            applications designed for scale. Whether it&apos;s a complex
            platform or a quick prototype, I prioritize performance and
            maintainability, ensuring the code is as robust as the user
            experience.
          </p>
        </article>
      </div>
    </section>
  );
}
