"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { AnimatePresence } from "framer-motion";
import { tilelineData } from "@/public/data";

export default function ProjectPage() {
  
  return (
    <main className="relative z-10 min-h-screen w-full">
      <AnimatePresence>
        <Timeline data={tilelineData} />
      </AnimatePresence>
    </main>
  );
}
