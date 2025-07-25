'use client'

import BottomNavbar from "@/components/ui/BottomNavbar";
import Particles from "@/components/ui/Particales";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen w-full  items-center justify-center font-sans ">
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
              background:
                "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)",
            }}
          />
          <div style={{ width: "100%", height: "100%", position: "fixed" }}>
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
          </div>
          {children}
          <BottomNavbar/>
        </div>
  );
}
