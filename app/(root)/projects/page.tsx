"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { AnimatePresence } from "framer-motion";
import { tilelineData } from "@/public/data";

export default function ProjectPage() {
  
  return (
    <div className="absolute  mt-70 w-full overflow-clip">
      <AnimatePresence >
      <Timeline data={tilelineData} />
      </AnimatePresence>
    </div>
  );
}
