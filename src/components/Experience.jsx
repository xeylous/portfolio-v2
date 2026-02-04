'use client';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const containerRef = useRef(null);
  
  const experiences = [
    {
      role: "Agentic AI Research Intern",
      company: "CodeApto",
      period: "Aug 2025 - Present",
      description: [
        "Researching and developing agentic AI systems capable of autonomous reasoning and planning.",
        "Explored multi-agent frameworks and LLM orchestration for real-world problem-solving.",
        "Worked on integrating AI agents with external tools, APIs, and memory for task automation."
      ]
    },
    {
      role: "Software Developer Intern",
      company: "CodeApto",
      period: "Jul 2024 - Feb 2025",
      description: [
        "Developed full-stack applications using the MERN Stack.",
        "Built and optimized scalable APIs and responsive frontends.",
        "Collaborated in an agile team environment and improved backend performance."
      ]
    }
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    tl.fromTo(".experience-title", 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    )
    .fromTo(".experience-card",
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" },
      "-=0.4"
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="h-fit w-full bg-[var(--hack-bg)] flex justify-center py-[100px] md:py-[50px]">
      <div className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="experience-title m-0 text-[2rem] sm:text-[2.5rem] md:text-[3.6em] font-black leading-[1.3] -tracking-[0.03em] mb-8 sm:mb-10 md:mb-12 text-center text-[#ededed]">
          Over the years,
        </h1>

        <div className="flex flex-col gap-6 md:gap-8 w-full max-w-[900px] mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="experience-card bg-[var(--background)] p-5 sm:p-6 md:p-8 rounded-2xl border border-[#ffffff10] hover:border-[#ffffff30] transition-colors duration-300"
            >
              <div className="flex flex-col gap-2 mb-4 text-center sm:text-left sm:flex-row sm:justify-between sm:items-start">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-[#fff] to-[var(--linear-grey)] bg-clip-text text-transparent">
                    {exp.role}
                  </h3>
                  <p className="text-[var(--linear-grey)] text-base sm:text-lg font-medium">
                    {exp.company}
                  </p>
                </div>
                <span className="px-4 py-1 rounded-full bg-[#ffffff05] text-xs sm:text-sm text-[var(--linear-grey)] border border-[#ffffff10] whitespace-nowrap mx-auto sm:mx-0 mt-2 sm:mt-0">
                  {exp.period}
                </span>
              </div>
              
              <ul className="list-disc pl-5 space-y-1 sm:space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-[#a0a0a0] leading-relaxed text-sm sm:text-base pl-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
