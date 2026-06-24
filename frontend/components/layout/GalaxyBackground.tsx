"use client";

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const Galaxy = dynamic(() => import("@/components/ui/Galaxy"), { ssr: false });

export function GalaxyBackground() {
  const pathname = usePathname();

  // Only show on non-home pages
  if (pathname === "/") {
    return null;
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-80 mix-blend-screen">
      <Galaxy 
        mouseRepulsion={true}
        mouseInteraction={false} // disabled since pointer-events-none
        density={0.5}
        glowIntensity={0.2}
        saturation={0.8}
        hueShift={120}
         // use auto repulsion instead since mouse won't work
      />
    </div>
  );
}
