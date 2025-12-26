'use client';
import React from 'react';

export default function Contact() {
  return (
    <section className="h-fit w-full grid place-items-center pt-[100px] bg-[var(--hack-bg)] md:pt-[50px]">
      <div className="w-full max-w-[1100px] h-fit flex items-center flex-col md:max-w-[85%]">
        <small className="text-[1.2rem] text-[var(--linear-grey)] mb-5 max-w-[500px] leading-[1.8] text-center md:text-[1rem] md:mb-[30px] sm:text-[0.9rem] sm:max-w-[350px] sm:mb-10">
          I can help you design, improve or build the product experience for
          your new or existing products. Feel free to get in touch with me.
        </small>
        <h1 className="text-[80px] font-bold leading-[2] capitalize font-[family-name:var(--font-dosis)] text-center md:text-[60px] md:leading-[1.2]">
          Do you have any Ideas?
        </h1>
      </div>
    </section>
  );
}
