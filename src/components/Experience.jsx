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
    <section ref={containerRef} className="h-fit w-full bg-[var(--hack-bg)] grid place-items-center py-[100px] md:py-[50px]">
      <div className="w-full max-w-[1200px] px-4 md:px-8">
        <h1 className="experience-title m-0 text-[3.6em] font-black leading-[1.3] -tracking-[0.03em] mb-12 text-center md:text-[2.5rem] md:mb-8 text-[#ededed]">
          Over the years,
        </h1>

        <div className="flex flex-col gap-8 md:gap-6 w-full max-w-[900px] mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="experience-card bg-[var(--background)] p-8 rounded-2xl border border-[#ffffff10] hover:border-[#ffffff30] transition-colors duration-300 md:p-6"
            >
              <div className="flex justify-between items-start mb-4 md:flex-col md:gap-2">
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-[#fff] to-[var(--linear-grey)] bg-clip-text text-transparent md:text-xl">
                    {exp.role}
                  </h3>
                  <p className="text-[var(--linear-grey)] text-lg font-medium md:text-base">
                    {exp.company}
                  </p>
                </div>
                <span className="px-4 py-1 rounded-full bg-[#ffffff05] text-sm text-[var(--linear-grey)] border border-[#ffffff10] whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              
              <ul className="list-disc pl-5 space-y-2 md:space-y-1">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-[#a0a0a0] leading-relaxed text-base md:text-sm pl-2">
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
