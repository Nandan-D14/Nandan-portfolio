"use client";

import { useEffect, type PropsWithChildren } from "react";

export default function GsapProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    let ctx: any;
    (async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const elements = document.querySelectorAll("[data-animate='fade-up']");
        elements.forEach((el) => {
          gsap.fromTo(
            el,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      });
    })();

    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  return <>{children}</>;
}


