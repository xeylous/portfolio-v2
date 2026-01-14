'use client';
import React, { useRef } from 'react';
import IconArrowUp from '../assets/icons/IconArrowUp';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef(null);

  const projects = [
    {
      id: 1,
      name: "Ayur Sathi",
      tags: "Blockchain / Smart Contracts / React",
      description: "Permissioned blockchain with smart contracts, geo-fenced harvest rules and QR-powered consumer provenance — built for ethical sourcing.",
      url: "https://ayur-sathi.vercel.app/"
    },
    {
      id: 2,
      name: "Elevate BPM",
      tags: "BPM / Automation / Performance",
      description: "Business Process Management platform to streamline workflows. Features process automation, team collaboration, and performance tracking.",
      url: "https://elevate-v2.vercel.app/"
    },
    {
      id: 3,
      name: "CrypTransfer",
      tags: "Web3 / DeFi / Ethereum",
      description: "Decentralized dApp for secure ERC-20 token and ETH transfers. Ensures trustless, transparent, and gas-optimized transactions.",
      url: "https://cryp-transfer.vercel.app/"
    },
    {
      id: 4,
      name: "Telaiya Tourism",
      tags: "Tourism / React / Design",
      description: "Tourism website promoting Telaiya Dam. Showcases destinations and activities with a visually appealing responsive design.",
      url: "https://telaiya-tourism.vercel.app/"
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

    tl.fromTo(".project-card",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-[100px] w-full grid place-items-center bg-[var(--hack-bg)] h-fit md:py-[50px]" id="projects">
      <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card w-full min-h-[300px] p-8 md:p-6 bg-[rgb(22,22,26)] flex flex-col justify-between relative group rounded-2xl border border-[#ffffff10] hover:border-[#ffffff30] transition-colors duration-300"
          >
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#fff] to-[var(--linear-grey)] bg-clip-text text-transparent capitalize leading-tight font-[family-name:var(--font-dosis)]">
                {project.name}
              </h3>
              <small className="text-xs font-semibold tracking-wider text-[var(--linear-grey)] uppercase opacity-80">
                {project.tags}
              </small>
              <p className="text-[var(--linear-grey)] text-sm leading-relaxed font-[family-name:var(--font-poppins)] opacity-90">
                {project.description}
              </p>
            </div>

            <div className="w-full mt-6 pt-6 border-t border-[#ffffff10]">
              <a
                href={project.url}
                target="_blank"
                rel="xeylous project"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--linear-grey)] uppercase tracking-widest font-[family-name:var(--font-dosis)] group-hover:text-white transition-colors duration-300"
              >
                <div className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                 <IconArrowUp />
                </div>
                view project
              </a>
            </div>

            {/* Bottom Border Effect */}
            <div className="absolute w-full h-[2px] bg-[var(--linear-grey)] left-0 bottom-0 scale-x-0 origin-right transition-transform duration-500 ease-out group-hover:scale-x-100 group-hover:origin-left rounded-b-2xl" />
          </div>
        ))}
      </div>
    </section>
  );
}
