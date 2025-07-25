"use client";
import Portfolio from "@/components/LandingPage";
import React from "react";
import { CometCard } from "@/components/ui/comet-card";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Particles from "@/components/ui/Particales";
import BottomNavbar from "@/components/ui/BottomNavbar";

const Home = () => {
  return (
    <div className="min-h-screen w-full  items-center justify-center font-sans ">
      <div
        className="absolute inset-0 z-0 hidden dark:block"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)",
        }}
      />
      {/* <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div> */}
      <BackgroundBeamsWithCollision>
        <CometCard>
          <Portfolio />
        </CometCard>
      </BackgroundBeamsWithCollision>
      <BottomNavbar/>
    </div>
  );
};

export default Home;

const styles = `
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in-up {
    animation: fade-in-up 0.6s ease-out forwards;
  }

  .hover\\:shadow-3xl:hover {
    box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
  }
`;

// Inject styles
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}
