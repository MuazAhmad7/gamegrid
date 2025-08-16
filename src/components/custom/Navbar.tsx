"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Register GSAP ScrollTo plugin for smooth scrolling functionality
gsap.registerPlugin(ScrollToPlugin);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Smooth scroll handler using GSAP for enhanced performance and control
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId.replace('#', ''));
    if (target) {
      gsap.to(window, {
        duration: 1.2,
        scrollTo: {
          y: target,
          offsetY: 100, // Account for fixed navbar height
        },
        ease: "power2.inOut",
      });
    }
  };

  return (
    <header
      className={
        `fixed top-0 inset-x-0 z-50 transition-colors duration-300` +
        ` ${isScrolled ? "bg-white/6 border-b border-black/10 backdrop-blur-md dark:bg-black/30 dark:border-white/10" : "bg-transparent"}`
      }
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
        {/* Left: Brand */}
        <div className="flex items-center gap-2">
          <Link href="/" aria-label="GameGrid Home" className="inline-flex items-center">
            <Image
              src="/logos/navbar.png"
              alt="GameGrid navbar logo"
              width={96}
              height={96}
              priority
            />
          </Link>
        </div>

        {/* Center: Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-bold text-foreground/90">
          <li>
            <Link 
              href="#home" 
              onClick={(e) => handleSmoothScroll(e, '#home')}
              className="hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 rounded-sm transition-opacity duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="#home" 
              onClick={(e) => handleSmoothScroll(e, '#home')}
              className="hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 rounded-sm transition-opacity duration-200"
            >
              The Founders
            </Link>
          </li>
          <li>
            <Link 
              href="#pricing" 
              onClick={(e) => handleSmoothScroll(e, '#pricing')}
              className="hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 rounded-sm transition-opacity duration-200"
            >
              Pricing
            </Link>
          </li>
        </ul>

        {/* Right: CTA */}
        <div className="flex items-center">
          <Link
            href="#pricing"
            onClick={(e) => handleSmoothScroll(e, '#pricing')}
            className="hidden sm:inline-flex rounded-full px-4 py-2 text-sm font-bold text-white transition-all duration-200 hover:shadow-md hover:scale-105"
            style={{ backgroundColor: "#0f5a1f" }}
          >
            Book a Demo
          </Link>
        </div>
      </nav>
    </header>
  );
}


