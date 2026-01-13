'use client';
import React from 'react';

export default function Caption() {
  return (
    <section className="h-fit w-full bg-[var(--hack-bg)] grid place-items-center py-[50px] md:py-[100px]">
      <div className="h-auto w-[98%] max-w-[1250px] bg-[#16161a] mt-8 flex flex-col items-center justify-center md:flex-row md:flex-nowrap md:h-[545px] md:w-full md:bg-[rgb(22,22,26)] md:scale-100 scale-[0.9] md:mt-8">
        {/* First Capture Block */}
        <div className="w-full h-fit border-solid border-[var(--linear-grey)] border-0 py-[4.8em] px-[3em] border-b-[0.15rem] border-[#cbc9e2] md:w-[50%] md:h-full md:py-[6.95em] md:pl-[6em] md:border-b-0 md:border-r-[0.15rem] md:border-[var(--linear-grey)]">
          <article className="block mb-[3.8em] text-left md:mb-[4.6em]">
            <h1 className="max-w-[100vw] m-0 text-[2.4rem] font-black leading-[1.3] -tracking-[0.03em] block animate-[slime_45s_ease_infinite] md:max-w-[30vw] md:text-[2.8em]">
              I build &amp;
              <br />
              design stuff
            </h1>

            <p className="translate-z-0 w-unset leading-[1.2] text-[1.2em] tracking-[0.02em] max-w-[701px] block my-[1em] mx-0 font-medium text-[var(--linear-grey)] md:text-[1.4em]">
              Open source
              <br />
              projects, web apps
              <br />
              and experimentals.
            </p>
          </article>

          <a
            href="#projects"
            className="group relative font-bold uppercase tracking-[0.1em] text-[80%] select-none inline-flex overflow-hidden bg-transparent whitespace-nowrap items-center justify-center p-[1.2em_1em] text-[#cbc9e2] border border-[#cbc9e2] min-w-[18em] hover:text-white hover:z-[1] md:py-[1.6em] md:px-[3em] md:text-[var(--linear-grey)] md:border-[var(--linear-grey)] md:min-w-[23.222em] md:text-[0.8em]"
          >
            see my work
            <span className="absolute left-0 top-0 h-full w-0 -z-[1] opacity-30 bg-[length:500%_500%] bg-gradient-to-r from-[#fde1ff] via-[#e0e7ff] to-[#daf1ff] via-[#fffae9] to-[#fde1ff] animate-[slime_45s_ease_infinite] transition-[width,transform] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-full"></span>
          </a>
        </div>

        {/* Second Capture Block */}
        <div className="w-full h-fit border-solid border-[var(--linear-grey)] border-0 py-[4.8em] px-[3em] border-[#cbc9e2] md:w-[50%] md:h-full md:py-[6.95em] md:pl-[6em] md:border-[var(--linear-grey)]">
          <article className="block mb-[3.8em] text-left md:mb-[4.6em]">
            <h1 className="max-w-[100vw] m-0 text-[2.4rem] font-black leading-[1.3] -tracking-[0.03em] block animate-[slime_45s_ease_infinite] md:max-w-[30vw] md:text-[2.8em]">
              I write,
              <br />
              sometimes
            </h1>

            <p className="translate-z-0 w-unset leading-[1.2] text-[1.2em] tracking-[0.02em] max-w-[701px] block my-[1em] mx-0 font-medium text-[var(--linear-grey)] md:text-[1.4em]">
              About design,
              <br />
              Development,
              <br />
              learning and life.
            </p>
          </article>

          <a
            href="https://blog.xeylous.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative font-bold uppercase tracking-[0.1em] text-[80%] select-none inline-flex overflow-hidden bg-transparent whitespace-nowrap items-center justify-center p-[1.2em_1em] text-[#cbc9e2] border border-[#cbc9e2] min-w-[18em] hover:text-white hover:z-[1] md:py-[1.6em] md:px-[3em] md:text-[var(--linear-grey)] md:border-[var(--linear-grey)] md:min-w-[23.222em] md:text-[0.8em]"
          >
            read my articles
            <span className="absolute left-0 top-0 h-full w-0 -z-[1] opacity-30 bg-[length:500%_500%] bg-gradient-to-r from-[#fde1ff] via-[#e0e7ff] to-[#daf1ff] via-[#fffae9] to-[#fde1ff] animate-[slime_45s_ease_infinite] transition-[width,transform] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-full"></span>
          </a>
        </div>
      </div>
    </section>
  );
}
