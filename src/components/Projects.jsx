'use client';
import React from 'react';
import IconArrowUp from '../assets/icons/IconArrowUp';
import { projectData } from '../utils/mock/project';

export default function Projects() {
  return (
    <section className="py-[100px] w-full grid place-items-center bg-[var(--hack-bg)] h-fit md:py-[50px]" id="projects">
      <div className="w-full max-w-[1100px] h-fit grid grid-cols-[repeat(1,1fr)] gap-y-[50px] gap-x-[50px] md:grid-cols-[repeat(2,1fr)] md:max-w-[85%] lg:grid-cols-[repeat(3,1fr)] sm:grid-cols-[repeat(1,1fr)]">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="w-full h-[280px] p-10 bg-[rgb(22,22,26)] flex items-start flex-col gap-y-5 relative group"
          >
            <h3 className="text-[20px] font-semibold capitalize leading-[2] font-[family-name:var(--font-dosis)]">
              {project.name}
            </h3>
            <small className="text-[14px] font-normal text-[var(--linear-grey)] uppercase">
              {project.tags}
            </small>
            <p className="text-[var(--linear-grey)] text-[0.85em] font-normal leading-[1.8] font-[family-name:var(--font-poppins)]">
              {project.description}
            </p>

            <div className="w-full h-fit px-10 pb-[30px] absolute bottom-0 left-0">
              <button className="w-fit h-fit cursor-pointer text-[14px] font-semibold text-[var(--linear-grey)] capitalize font-[family-name:var(--font-dosis)] transition-all duration-300 ease-in group-hover:scale-110">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center justify-center gap-x-[10px] transition-all duration-300 ease-in tracking-[1px] group-hover:gap-x-[8px]"
                >
                  <IconArrowUp />
                  view
                </a>
              </button>
            </div>

            {/* Bottom Border Effect */}
            <div className="absolute w-full h-[2px] bg-[var(--linear-grey)] left-0 -bottom-[2px] scale-x-0 origin-bottom-right transition-transform duration-250 ease-out group-hover:scale-x-100 group-hover:origin-bottom-left" />
          </div>
        ))}
      </div>
    </section>
  );
}
