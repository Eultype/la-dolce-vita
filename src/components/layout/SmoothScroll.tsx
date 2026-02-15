"use client";

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

function ScrollToTop() {
  const lenis = useLenis();
  const pathname = usePathname();

  useEffect(() => {
    // @ts-ignore
    lenis?.scrollTo(0, { immediate: true });
  }, [lenis, pathname]);

  return null;
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    // @ts-ignore
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <ScrollToTop />
      {children as any}
    </ReactLenis>
  );
}
