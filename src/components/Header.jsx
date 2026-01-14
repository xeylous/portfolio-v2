'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 50) {
        if (currentScrollY > lastScrollY.current) {
          // Scrolling down
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
      } else {
        // At top
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`w-full h-fit grid relative place-items-center bg-[var(--hack-bg)] pt-[90px] pb-[80px] md:pt-[132px] md:pb-[50px]  top-10 `}
    >
      {/* Merged Navbar Content */}
      <nav className="absolute top-0 left-0 w-full z-50 flex justify-center pt-4 md:pt-14">
        <div className="w-full max-w-[1100px] flex justify-between md:w-[85%] px-8 md:px-0">
          <div className="text-xl font-normal">Xeylous</div>
          <div className="text-sm font-normal flex items-center gap-6">
            <a 
              href="https://resume.xeylous.xyz"
              target="_blank"
              rel="xeylous resume"
              className="group relative flex items-center justify-center font-medium text-[var(--linear-grey)] transition-colors duration-300 ease-out hover:text-white"
            >
              Resume
              <div className="absolute w-full h-[2px] bg-[var(--linear-grey)] left-0 -bottom-[2px] scale-x-0 origin-bottom-right transition-transform duration-250 ease-out group-hover:scale-x-100 group-hover:origin-bottom-left" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hand Image (Before element replacement) */}
      <div 
        className="lg:block absolute top-[0rem] -left-24 w-[26rem] h-[26rem] bg-no-repeat bg-contain scale-[0.6] hidden  pointer-events-none"
        style={{ backgroundImage: "url('https://raw.githubusercontent.com/adeolaadeoti/adeolaadeoti-v2/main/public/webp/hand-left.webp')" }}
      />

      <div className="w-full max-w-[1100px] h-fit flex items-center justify-between flex-col lg:flex-row lg:w-[85%] px-6 md:px-0 mt-0">
        <div className="w-full lg:w-auto h-fit text-left flex flex-col items-start md:items-center md:text-center lg:items-start lg:text-left justify-between">
          <div className="w-full lg:w-[420px] h-auto mx-auto lg:mx-0 mt-12 lg:mt-16">
            <div className="relative h-fit w-max md:mx-auto lg:mx-0 overflow-hidden mb-[30px] bg-clip-text text-transparent bg-[length:500%_500%] animate-[slime_45s_ease_infinite] bg-gradient-to-r from-[#fde1ff] via-[#e0e7ff] to-[#daf1ff] via-[#fffae9] to-[#fde1ff]">
             <style jsx>{`
                .gradient-text {
                   background: linear-gradient(
                    76deg,
                    #fde1ff,
                    #e0e7ff,
                    #e0f9ff,
                    #fffae9,
                    #e8eaff,
                    #ffe3f7,
                    #daf1ff,
                    #fde1ff,
                    #e0e7ff,
                    #e0f9ff,
                    #fffae9,
                    #e8eaff,
                    #ffe3f7,
                    #daf1ff,
                    #fde1ff,
                    #e0e7ff,
                    #e0f9ff,
                    #fffae9,
                    #e8eaff,
                    #ffe3f7,
                    #daf1ff
                  );
                  background-size: 500% 500%;
                  background-clip: text;
                  -webkit-background-clip: text;
                  color: rgba(255, 255, 255, 0);
                }
             `}</style>
              <div className="gradient-text pl-0 lg:pl-0">
                <h1 className="text-[2.5em] md:text-[3em] lg:text-[4em] font-black leading-[1.2] -tracking-[0.03em] lg:tracking-[2px] capitalize">
                  Full Stack
                </h1>
                <h1 className="text-[2.5em] md:text-[3em] lg:text-[4em] font-black leading-[1.2] -tracking-[0.03em] lg:tracking-[2px] capitalize">
                  Developer<span className="text-[var(--linear-grey)]">.</span>
                </h1>
              </div>
            </div>

            <p className="m-0 mt-[0.7rem] text-[var(--linear-grey)] font-medium leading-[1.8] w-full lg:w-full pl-0 lg:pl-0 md:text-center lg:text-left">
              I build end-to-end digital products that are scalable, reliable and crafted with strong attraction to user exprience.
            </p>
          </div>

          <div className="w-full lg:w-max h-fit flex items-start md:items-center md:justify-center lg:items-center lg:justify-between mb-8 lg:mb-[1.2rem] mt-[40px] lg:mt-[90px] gap-x-[30px] lg:gap-x-[50px] pl-0 lg:pl-0">
             {/* Using max-w-[50%] for mobile as per original SCSS logic roughly */}
            <p className="max-w-[40%] md:max-w-[45%] lg:max-w-[220px] h-fit leading-[1.5] text-[0.6em] md:text-[0.8em] lg:text-[0.9em] md:text-center lg:text-left">
             I create real world products with clean, scalable code.
            </p>

            <p className="max-w-[50%] md:max-w-[45%] lg:max-w-[220px] h-fit leading-[1.5] text-[0.6em] md:text-[0.8em] lg:text-[0.9em] md:text-center lg:text-left">
              Focused on performance and long-term maintainability.
            </p>
          </div>
        </div>

        <div className="h-[280px] w-[300px] md:h-[340px] md:w-[360px] lg:h-[400px] lg:w-[400px] relative flex items-center flex-col my-16 lg:my-0 mx-auto ">
          <div className="absolute z-[20] h-[280px] md:h-[320px] lg:h-[380px] w-full">
            <div
              role="img"
              aria-label="Xeylous's Picture"
              className="w-full h-full block bg-cover bg-center"
              style={{ backgroundImage: "url('https://ik.imagekit.io/xeylous/Profile%20pic.png')" }}
            />
          </div>
          <span className="absolute border-2 border-[var(--linear-grey)] bg-transparent opacity-60 w-[90%] h-[300px] md:h-[330px] top-0 lg:h-[350px] lg:bottom-0 lg:top-auto"></span>
        </div>
      </div>
    </header>
  );
}
