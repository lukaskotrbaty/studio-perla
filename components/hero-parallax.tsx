"use client";

import { useEffect, useState } from "react";

interface ParallaxHeroProps {
  imageUrl: string;
  children: React.ReactNode;
}

export function ParallaxHero({ imageUrl, children }: ParallaxHeroProps) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      >
        <div
          className="relative w-full h-[120vh]"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/40"></div>
        </div>
      </div>

      <div className="container-custom relative z-10 mt-10">
        {children}
      </div>
    </section>
  );
}
