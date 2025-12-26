'use client';
import React from 'react';

export default function Experience() {
  return (
    <section className="h-fit w-full bg-[var(--hack-bg)] grid place-items-center">
      <div className="h-auto w-full flex items-center justify-center bg-[rgb(22,22,26)] py-[100px] md:py-[50px]">
        <article className="w-full h-auto text-center flex items-center flex-col max-w-[800px] md:w-[85%]">
          <h1 className="m-0 text-[3.6em] font-black leading-[1.3] -tracking-[0.03em] block mb-8 md:max-w-[100vw] md:text-[2.5rem] md:mb-[1.8rem]">
            Over the years,
          </h1>

          <p className="w-full text-[var(--linear-grey)] text-[1em] leading-[2] block mt-0 max-w-[640px] mb-[1em] md:w-full">
            (~_^)
          </p>

          <p className="w-full text-[var(--linear-grey)] text-[1em] leading-[2] block mt-0 max-w-[640px] mb-[1em] md:w-full">
            For me, engineering is an extension of the design process. I
            specialize in bridging the gap between static visuals and living,
            breathing interfaces. My experience spans Fintech, HealthTech, and
            EdTech. I&apos;ve architected complex SaaS solutions (including
            remote collaboration tools) and collaborated with MakerStudio to
            ship polished products for giants like Nomba and Paystack.
          </p>

          <p className="w-full text-[var(--linear-grey)] text-[1em] leading-[2] block mt-0 max-w-[640px] mb-[1em] md:w-full">
            I also understand scale, whether driving optimization as a Growth
            Frontend Engineer at Diool or managing high-traffic infrastructure
            for startups like Meto. Previously, I set the technical culture as
            the Founding Frontend Engineer at Klas.
            <br />
            <br />
            I&apos;m currently exploring Design Engineering opportunities that
            challenge me to use my design thinking and creative skills to
            define, not just build, the next generation of digital products.
          </p>
        </article>
      </div>
    </section>
  );
}
