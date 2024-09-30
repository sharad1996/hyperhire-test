"use client";
import { useEffect, useState } from "react";
import HyperHireDesktop from "./components/DesktopTemplate";
import HyperHireMobile from "./components/MobileTemplate";
//https://nextjs.org/icons/next.svg
export default function Home() {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    // you can access window, document here.
    if (typeof window !== "undefined") {
      const isMobile = window.matchMedia("(max-width: 600px)").matches;
      setIsMobile(isMobile);
    }
  }, []);

  return <>{isMobile ? <HyperHireMobile /> : <HyperHireDesktop />}</>;
}
