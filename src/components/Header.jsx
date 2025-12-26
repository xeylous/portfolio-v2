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
      className={`w-full h-fit grid relative place-items-center bg-[var(--hack-bg)] pt-[162px] pb-[80px] md:pt-[132px] md:pb-[50px] top-0 `}
    >
      {/* Merged Navbar Content */}
      <nav className="absolute top-0 left-0 w-full z-50 flex justify-center pt-12 md:pt-14">
        <div className="w-full max-w-[1100px] flex justify-between md:w-[85%] px-12 md:px-0">
          <div className="text-xl font-normal">Xeylous</div>
          <div className="text-sm font-normal flex items-center gap-2 cursor-pointer">
            <span>🚧</span>
            <span className="opacity-80 hover:opacity-100 transition-opacity">What&apos;s New?</span>
          </div>
        </div>
      </nav>

      {/* Hand Image (Before element replacement) */}
      <div 
        className="lg:block absolute top-[0rem] -left-24 w-[26rem] h-[26rem] bg-no-repeat bg-contain scale-[0.6] hidden  pointer-events-none"
        style={{ backgroundImage: "url('https://raw.githubusercontent.com/adeolaadeoti/adeolaadeoti-v2/main/public/webp/hand-left.webp')" }}
      />

      <div className="w-full max-w-[1100px] h-fit flex items-center justify-between flex-col lg:flex-row lg:w-[85%] px-6 md:px-0 mt-0">
        <div className="w-full lg:w-auto h-fit text-left flex flex-col items-start justify-between">
          <div className="w-full lg:w-[420px] h-auto mx-auto lg:mx-0 mt-12 lg:mt-16">
            <div className="relative h-fit w-max overflow-hidden mb-[30px] bg-clip-text text-transparent bg-[length:500%_500%] animate-[slime_45s_ease_infinite] bg-gradient-to-r from-[#fde1ff] via-[#e0e7ff] to-[#daf1ff] via-[#fffae9] to-[#fde1ff]">
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
              <div className="gradient-text pl-32 lg:pl-0">
                <h1 className="text-[4em] lg:text-[4em] font-black leading-[1.2] -tracking-[0.03em] lg:tracking-[2px] capitalize">
                  Full Stack
                </h1>
                <h1 className="text-[4em] lg:text-[4em] font-black leading-[1.2] -tracking-[0.03em] lg:tracking-[2px] capitalize">
                  Developer<span className="text-[var(--linear-grey)]">.</span>
                </h1>
              </div>
            </div>

            <p className="m-0 mt-[0.7rem] text-[var(--linear-grey)] font-medium leading-[1.8] w-[70%] lg:w-full pl-32 lg:pl-0">
              I like to craft solid and scalable frontend products with great user
              experiences.
            </p>
          </div>

          <div className="w-full lg:w-max h-fit flex items-start lg:items-center justify-between mb-8 lg:mb-[1.2rem] mt-[60px] lg:mt-[90px] gap-x-[50px] pl-16 lg:pl-0">
             {/* Using max-w-[50%] for mobile as per original SCSS logic roughly */}
            <p className="max-w-[40%] lg:max-w-[220px] h-fit leading-[1.5] text-[0.6em] lg:text-[0.9em]">
              Highly skilled at progressive enhancement, design systems &amp; UI
              Engineering.
            </p>

            <p className="max-w-[50%] lg:max-w-[220px] h-fit leading-[1.5] text-[0.6em] lg:text-[0.9em]">
              Over a three years of experience building products for clients across
              africa.
            </p>
          </div>
        </div>

        <div className="h-[280px] w-[300px] lg:h-[400px] lg:w-[400px] relative flex items-center flex-col my-16 lg:my-0 mx-auto ">
          <div className="absolute z-[20] h-[280px] lg:h-[380px] w-full">
            <div
              role="img"
              aria-label="Pariola's Picture"
              className="w-full h-full block bg-cover bg-center"
              style={{ backgroundImage: "url('https://ik.imagekit.io/9ghb9cknpe/pariola_dp_sqr?updatedAt=1722351979096')" }}
            />
          </div>
          <span className="absolute border-2 border-[var(--linear-grey)] bg-transparent opacity-60 w-[90%] h-[300px] top-0 lg:h-[350px] lg:bottom-0 lg:top-auto"></span>
        </div>
      </div>
    </header>
  );
}
