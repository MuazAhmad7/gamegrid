"use client";
import Image from "next/image";
import { useEffect, useMemo, useState, useRef } from "react";
import gsap from "gsap";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
// Removed Swiper - using pure CSS marquee

export default function Home() {
  const words = useMemo(() => ["EASY.", "FUN.", "EFFICIENT."], []);
  const [index, setIndex] = useState(0);
  // Pricing toggle state
  const [yearly, setYearly] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 1600);
    return () => clearInterval(id);
  }, [words.length]);

  return (
    <main id="home" className="pt-28 sm:pt-32">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
          {/* Left: Logo + Title */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden">
              <Image
                src="/logos/gamegrid-logo.png"
                alt="GameGrid logo"
                fill
                priority
                className="object-cover drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
              />
            </div>
            <h1
              className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight"
              style={{ fontFamily: "var(--font-gamegrid-title)" }}
            >
              PLAYING IN LEAGUES HAS NEVER BEEN THIS
              <span className="inline-block ml-2 align-baseline relative h-[1.2em] w-[11ch] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[index]}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="absolute left-0 right-0 top-0 w-full text-center text-green-700"
                  >
                    {words[index]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
          </div>

          {/* Right: Phones visual */}
          <div className="relative w-full h-[360px] sm:h-[460px] lg:h-[560px]">
            <Image
              src="/section-1/gg-phones.png"
              alt="GameGrid mobile previews"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>




      {/* Section 2: Four Feature Cards */}
      <section className="w-full mt-14 sm:mt-20 px-[1px] sm:px-[1px] lg:px-[2px]" id="features">
        <header className="text-center mb-10 sm:mb-14">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight"
            style={{ fontFamily: "var(--font-gamegrid-title)" }}
          >
            ONE STOP SHOP FOR <br className="hidden sm:block" /> ALL YOUR SPORTS LEAGUES
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] sm:gap-[2px] lg:gap-[3px] min-h-screen">
          {/* Column 1 (left, slightly higher) */}
          <div className="grid grid-rows-2 gap-[2px] sm:gap-[2px] content-stretch">
            <FeatureCard
              title="Real-Time Stat Engine"
              description="Instant, Accurate, Game-Changing. Track every bucket, goal, and stat in real time with our lightning-fast engine, built to keep players and leagues in sync without the mess."
              highlights={["Engine"]}
              imageSrc="/section-2/laptop-mockup.png"
              imageAlt="Laptop mockup showing GameGrid"
            />
            <FeatureCard
              title="Player Dashboard"
              description="Know Your Game. And Everyone Else's. Players get full access to their performance history, live updates, and league-wide insights, so you're never out of the loop."
              imageSrc="/section-2/ipad-mockup.png"
              imageAlt="iPad mockup with player dashboard"
              imagePosition="bottom"
            />
          </div>

          {/* Column 2 (right, offset lower) */}
          <div className="grid grid-rows-2 gap-[2px] sm:gap-[2px] content-stretch translate-y-20 sm:translate-y-28 lg:translate-y-32">
            <FeatureCard
              title="Strategy Hub"
              description="Plan. Execute. Dominate. Set weekly game plans, coordinate with your squad, and make every possession/play count because strategy wins games."
              imageSrc="/section-2/phone-mockup.png"
              imageAlt="Phone mockup with strategy hub"
              imagePosition="bottom"
            />
            <CurvedIconMarqueeCard />
          </div>
        </div>
      </section>

      {/* Section 3: Quote and Image Sliders */}
      <section className="w-full mt-52 sm:mt-64 lg:mt-72" id="sports">
        {/* Quote */}
        <header className="text-center mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight max-w-5xl mx-auto"
              style={{ fontFamily: "var(--font-gamegrid-title)" }}
            >
              &ldquo;Built for the grind. Engineered for every game. Fueled by competition. Powered by GameGrid.&rdquo;
            </h2>
          </div>
        </header>

        {/* Top Large Image Slider - Full Width */}
        <div className="mb-1 sm:mb-1">
          <SportsImageSlider />
        </div>

        {/* Bottom Smaller Cards Slider - Full Width */}
        <div>
          <PlaceholderCardsSlider />
        </div>
      </section>

            {/* Section 4: Pricing Plans */}
            <section id="pricing" className="w-full mt-48 sm:mt-64 lg:mt-80 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <header className="text-center mb-8 sm:mb-12">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight"
              style={{ fontFamily: "var(--font-gamegrid-title)" }}
            >
              ONE PLAN, TOTAL ACCESS
            </h2>

            <BillingToggle yearly={yearly} setYearly={setYearly} />
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <PricingCard
              tier="CORE"
              price={30}
              yearlyPrice={25}
              yearly={yearly}
              blurb="For leagues just starting out or managing smaller rosters."
              features={[
                "Full access to all GameGrid features",
                "Up to 12 teams",
                "1 active league",
                "Complete stat tracking, schedules, standings, and rosters",
                "Game logs and player profile pages",
                "Standard email support",
              ]}
            />
            <PricingCard
              tier="PLUS"
              price={60}
              yearlyPrice={55}
              yearly={yearly}
              blurb="For expanding leagues with larger team bases."
              features={[
                "Full access to all GameGrid features",
                "Unlimited teams",
                "1 active league",
                "Real-time stat updates and advanced analytics",
                "Season archives and exportable reports",
                "Priority email and chat support",
              ]}
            />
            <PricingCard
              tier="ELITE"
              price={70}
              yearlyPrice={65}
              yearly={yearly}
              blurb="For organizations managing multiple leagues and divisions."
              features={[
                "Full access to all GameGrid features",
                "Unlimited teams",
                "Up to 3 active leagues",
                "Cross-league stat tracking and shared leaderboards",
                "League-wide announcements, awards, and admin dashboards",
                "Premium support with Slack/Discord integration",
              ]}
            />
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="w-full mt-28 sm:mt-36 border-t border-black/10 bg-black text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <Image
                src="/logos/navbar.png"
                alt="GameGrid logo"
                width={120}
                height={120}
                className="h-16 w-auto"
              />
              <p className="text-white/70 text-sm max-w-xs">
                GameGrid — built for the grind, engineered for every game.
              </p>
            </div>

            {/* Company */}
            <div>
              <h4
                className="text-white text-lg font-semibold mb-4"
                style={{ fontFamily: 'var(--font-gamegrid-title)' }}
              >
                Company
              </h4>
              <ul className="space-y-3 text-white/80 text-sm">
                <li><a href="#pricing" className="hover:text-white">Contact Us</a></li>
                <li><a href="#founders" className="hover:text-white">The Founders</a></li>
              </ul>
            </div>

            {/* Downloads */}
            <div>
              <h4
                className="text-white text-lg font-semibold mb-4"
                style={{ fontFamily: 'var(--font-gamegrid-title)' }}
              >
                Downloads
              </h4>
              <ul className="space-y-3 text-white/80 text-sm">
                <li>For iPhone <span className="text-white/50">(Soon)</span></li>
                <li>For Android <span className="text-white/50">(Soon)</span></li>
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h4
                className="text-white text-lg font-semibold mb-4"
                style={{ fontFamily: 'var(--font-gamegrid-title)' }}
              >
                Socials
              </h4>
              <ul className="space-y-3 text-white/80 text-sm">
                <li><a href="#" className="hover:text-white" aria-label="Twitter / X">Twitter/X</a></li>
                <li><a href="#" className="hover:text-white" aria-label="Instagram">Instagram</a></li>
                <li><a href="#" className="hover:text-white" aria-label="LinkedIn">LinkedIn</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-white/50">
            © {new Date().getFullYear()} GameGrid. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CurvedIconMarquee from "@/components/custom/CurvedIconMarquee";

function FeatureCard({ title, description, highlights = [], imageSrc, imageAlt, imagePosition = "center" }: { title: string; description: string; highlights?: string[]; imageSrc?: string; imageAlt?: string; imagePosition?: "center" | "bottom" }) {
  const renderHighlightedTitle = (text: string) => {
    const parts = text.split(/(\s+)/);
    return (
      <>
        {parts.map((p, i) => {
          const key = p.replace(/[^a-z0-9]/gi, "").toLowerCase();
          const match = highlights.some((h) => h.toLowerCase() === key);
          return (
            <span key={`${p}-${i}`} className={match ? "text-[#0f5a1f]" : undefined}>{p}</span>
          );
        })}
      </>
    );
  };
  if (imagePosition === "bottom") {
    return (
      <div className="bg-black text-white border border-white/10 rounded-3xl overflow-hidden flex flex-col">
        <div className="text-center pt-10 pb-10 px-6">
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ fontFamily: "var(--font-gamegrid-title)" }}
            className="text-white text-3xl sm:text-4xl tracking-tight font-semibold"
          >
            {renderHighlightedTitle(title)}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
            className="mt-4 text-base sm:text-lg leading-relaxed text-white/80 text-center mx-auto max-w-md"
          >
            {description}
          </motion.p>
        </div>
        <div className="flex-1 relative">
          {imageSrc ? (
            <Image src={imageSrc} alt={imageAlt || title} fill className="object-contain object-bottom" />
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <Card className="bg-black text-white border-white/10 rounded-3xl">
      <CardHeader className="text-center pt-10 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <CardTitle style={{ fontFamily: "var(--font-gamegrid-title)" }} className="text-white text-3xl sm:text-4xl tracking-tight">
            {renderHighlightedTitle(title)}
          </CardTitle>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
        >
          <CardDescription className="mt-4 text-base sm:text-lg leading-relaxed text-white/80 text-center mx-auto max-w-md">
            {description}
          </CardDescription>
        </motion.div>
      </CardHeader>
      <CardContent className="flex items-center justify-center pb-12">
        {imageSrc ? (
          <div className="relative h-80 sm:h-[28rem] w-full rounded-xl overflow-hidden">
            <Image src={imageSrc} alt={imageAlt || title} fill className="object-contain" />
          </div>
        ) : (
          <div className="h-80 sm:h-[28rem] w-full rounded-xl" />
        )}
      </CardContent>
    </Card>
  );
}

function CurvedIconMarqueeCard() {
  return (
    <Card className="bg-black text-white border-white/10 rounded-3xl">
      <CardHeader className="text-center pt-10 pb-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <CardTitle style={{ fontFamily: "var(--font-gamegrid-title)" }} className="text-white text-3xl sm:text-4xl tracking-tight">
            POWERED BY YOUR <span className="text-[#0f5a1f]">FAVORITES</span>
          </CardTitle>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
        >
          <CardDescription className="mt-2 text-base sm:text-lg leading-relaxed text-white/80 text-center mx-auto max-w-md">
            Seamlessly connect with tools you already use. More integrations on the way.
          </CardDescription>
        </motion.div>
      </CardHeader>
      <CardContent className="flex items-center justify-center pb-8">
        <div className="relative rounded-2xl overflow-hidden mt-10 w-full">
          <CurvedIconMarquee
            height={400}
            radius={600}
            arc={90}
            speed={22}
            gap={18}
            inset={220}
            offsetY={300}
            responsive={[
              { max: 640, settings: { height: 260, radius: 400, arc: 120, iconSize: 70, gap: 14, inset: 100, offsetY: 380, speed: 30 } },
              { min: 641, max: 1024, settings: { height: 320, radius: 500, arc: 100, iconSize: 86, gap: 14, inset: 180, offsetY: 400, speed: 30 } },
              { min: 1025, max: 1920, settings: { height: 400, radius: 600, arc: 120, iconSize: 112, gap: 18, inset: 240, offsetY: 550, speed: 30 } },
              { min: 1920, max: 2560, settings: { height: 460, radius: 680, arc: 120, iconSize: 120, gap: 20, inset: 320, offsetY: 550, speed: 30 } },
            ]}
          />

          {/* Overlay CTA: button + email input. Does not interfere with marquee (marquee track has pointer-events:none) */}
          <div className="pointer-events-auto absolute inset-x-0 bottom-6 sm:bottom-8 flex flex-col items-center gap-3 z-10">
            <button
              type="button"
              className="rounded-full bg-[#0f5a1f] hover:bg-[#0d4e1b] text-white px-6 sm:px-8 py-3 sm:py-3.5 shadow-lg text-sm sm:text-base font-bold"
            >
              Get On The Waitlist
            </button>
            <div className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[40%]">
              <label htmlFor="waitlist-email" className="sr-only">Email address</label>
              <input
                id="waitlist-email"
                type="email"
                inputMode="email"
                placeholder="you@example.com"
                className="w-full rounded-full bg-white/90 text-black placeholder-black/60 px-5 py-3 sm:py-3.5 shadow focus:outline-none focus:ring-2 focus:ring-[#0f5a1f]"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Billing toggle component (Monthly / Yearly)
function BillingToggle({ yearly, setYearly }: { yearly: boolean; setYearly: (v: boolean) => void }) {
  return (
    <div className="mt-6 flex justify-center">
      <div className="relative inline-flex items-center rounded-full bg-neutral-200/80 dark:bg-white/10 px-1 py-1 w-72">
        <button
          onClick={() => setYearly(false)}
          className={`relative z-10 flex-1 px-4 py-2 text-sm font-medium rounded-full transition-colors ${!yearly ? 'text-black' : 'text-black/60'}`}
        >
          Monthly
        </button>
        <button
          onClick={() => setYearly(true)}
          className={`relative z-10 flex-1 px-4 py-2 text-sm font-medium rounded-full transition-colors ${yearly ? 'text-black' : 'text-black/60'}`}
        >
          Yearly
        </button>
        <div
          className={`absolute top-1 bottom-1 w-[calc(50%-0.25rem)] rounded-full bg-white shadow transition-transform duration-300 ${yearly ? 'translate-x-[calc(100%+0.5rem)]' : 'translate-x-0'}`}
        />
      </div>
    </div>
  );
}

type PricingCardProps = {
  tier: 'CORE' | 'PLUS' | 'ELITE';
  price: number;
  yearlyPrice: number;
  yearly: boolean;
  blurb: string;
  features: string[];
};

function PricingCard({ tier, price, yearlyPrice, yearly, blurb, features }: PricingCardProps) {
  const shown = yearly ? yearlyPrice : price;
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6 sm:p-8 flex flex-col shadow-sm max-w-[360px] sm:max-w-[380px] w-full mx-auto min-h-[520px] sm:min-h-[560px]">
      <div className="mb-4">
        <div className="text-[#0f5a1f] font-bold text-sm tracking-wide">{tier}</div>
        <motion.div layout className="mt-3 flex items-end gap-1">
          <motion.div
            key={shown}
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl font-extrabold"
          >
            ${shown}
          </motion.div>
          <div className="text-sm font-medium text-black/60 mb-1">/month</div>
        </motion.div>
        <button className="mt-4 inline-flex w-full justify-center rounded-full bg-black text-white font-semibold py-2.5 text-sm hover:opacity-90">Book a demo</button>
      </div>

      <div className="h-px w-full bg-black/10 my-3"/>

      <div>
        <div className="text-base sm:text-lg font-semibold text-black mb-3" style={{ fontFamily: 'var(--font-gamegrid-title)' }}>
          {blurb}
        </div>
        <ul className="space-y-3">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-black/80">
              <Check className="h-4 w-4 mt-0.5 text-[#0f5a1f]"/>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
// Sports Image Slider Component - Pure CSS marquee with navigation
function SportsImageSlider() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClickPaused, setIsClickPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const tickerInitedRef = useRef(false);
  const xRef = useRef(0);
  const cycleWidthRef = useRef(0);
  const hoveredRef = useRef(false);
  const clickPausedRef = useRef(false);
  const navTweenRef = useRef<gsap.core.Tween | null>(null);
  
  const sportsImages = [
    { src: "/section-3/basketball.jpeg", alt: "Basketball Game", title: "Basketball" },
    { src: "/section-3/football.jpg", alt: "Football Game", title: "Football" },
    { src: "/section-3/pickleball.jpg", alt: "Pickleball Game", title: "Pickleball" },
    { src: "/section-3/Soccer.jpg", alt: "Soccer Game", title: "Soccer" },
  ];

  // Duplicate exactly twice for seamless -50% translation
  const baseImages = sportsImages;
  const duplicatedImages = [...baseImages, ...baseImages];

  // Measure one full cycle width (one set of items)
  useEffect(() => {
    const track = containerRef.current;
    if (!track) return;
    const measure = () => {
      if (track.children.length < baseImages.length) return;
      const first = track.children[0] as HTMLElement;
      const last = track.children[baseImages.length - 1] as HTMLElement;
      const cycle = last.offsetLeft + last.offsetWidth - first.offsetLeft;
      cycleWidthRef.current = cycle;
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [baseImages.length]);

  // GSAP ticker for continuous motion (rightward)
  useEffect(() => {
    hoveredRef.current = isHovered;
  }, [isHovered]);

  useEffect(() => {
    clickPausedRef.current = isClickPaused;
  }, [isClickPaused]);

  useEffect(() => {
    if (tickerInitedRef.current) return;
    tickerInitedRef.current = true;
    const track = containerRef.current;
    if (!track) return;
    xRef.current = -0.001; // start slightly negative to enable wrapping
    gsap.set(track, { x: xRef.current });
    const speedPxPerSec = 60; // top row speed
    const update = () => {
      const cycle = cycleWidthRef.current;
      if (!cycle) return;
      if (hoveredRef.current || clickPausedRef.current) return;
      const delta = gsap.ticker.deltaRatio();
      const dx = (speedPxPerSec / 60) * delta; // pixels/frame at 60fps
      xRef.current += dx; // move right
      if (xRef.current >= 0) {
        xRef.current -= cycle;
      }
      gsap.set(track, { x: xRef.current });
    };
    gsap.ticker.add(update);
    return () => { gsap.ticker.remove(update); };
  }, []);

  const animateCenterToIndex = (index: number) => {
    const track = containerRef.current;
    if (!track) return;
    const baseCount = baseImages.length;
    // choose item from the 2nd set for stability
    // const items = track.children as unknown as HTMLElement[];
    const target = (track.children[baseCount + index] as HTMLElement) || (track.children[index] as HTMLElement);
    if (!target) return;
    const containerWidth = (track.parentElement as HTMLElement).offsetWidth;
    const slideWidth = target.offsetWidth;
    const targetLeft = target.offsetLeft;
    // desired x so that target centers
    let desiredX = containerWidth / 2 - slideWidth / 2 - targetLeft;
    const cycle = cycleWidthRef.current || 1;
    while (desiredX > 0) desiredX -= cycle;
    while (desiredX <= -cycle) desiredX += cycle;
    if (navTweenRef.current) navTweenRef.current.kill();
    navTweenRef.current = gsap.to(track, {
      x: desiredX,
      duration: 0.6,
      ease: 'power2.out',
      onUpdate: () => { xRef.current = (gsap.getProperty(track, 'x') as number) || desiredX; },
      onComplete: () => { xRef.current = desiredX; }
    });
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % sportsImages.length;
    setCurrentIndex(nextIndex);
    setIsClickPaused(true);
    animateCenterToIndex(nextIndex);
    setTimeout(() => { if (!hoveredRef.current) setIsClickPaused(false); }, 1500);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + sportsImages.length) % sportsImages.length;
    setCurrentIndex(prevIndex);
    setIsClickPaused(true);
    animateCenterToIndex(prevIndex);
    setTimeout(() => { if (!hoveredRef.current) setIsClickPaused(false); }, 1500);
  };

  return (
    <div 
      className={`relative w-full marquee marquee-sports`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Navigation Arrows */}
      {isHovered && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-[#0f5a1f] hover:scale-110 transition-all duration-300 shadow-lg"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-[#0f5a1f] hover:scale-110 transition-all duration-300 shadow-lg"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </>
      )}

      {/* Marquee Track - duplicate the sequence twice */}
      <div className="marquee-track">
        <div ref={containerRef} className="flex space-x-1.5 overflow-x-auto scrollbar-hide">
          {duplicatedImages.map((image, index) => (
            <div key={`${image.title}-${index}`} className="flex-shrink-0">
              <div className="relative h-[16rem] sm:h-[24rem] lg:h-[36rem] xl:h-[40rem] w-[320px] sm:w-[960px] lg:w-[1120px] xl:w-[1280px] rounded-2xl overflow-hidden group cursor-pointer">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-transparent" />
                <div className="absolute top-4 left-4 right-24 sm:top-6 sm:left-6 sm:right-40">
                  <h3
                    className="text-white text-2xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight"
                    style={{ fontFamily: "var(--font-gamegrid-title)" }}
                  >
                    {image.title}
                  </h3>
                </div>
                <button
                  type="button"
                  className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 rounded-full bg-white text-black font-bold px-4 py-2 shadow-md hover:shadow-lg transition-shadow"
                >
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Placeholder Cards Slider Component - Pure CSS marquee with navigation
function PlaceholderCardsSlider() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClickPaused, setIsClickPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const tickerInitedRef = useRef(false);
  const xRef = useRef(0);
  const cycleWidthRef = useRef(0);
  const hoveredRef = useRef(false);
  const clickPausedRef = useRef(false);
  const navTweenRef = useRef<gsap.core.Tween | null>(null);
  
  const placeholderCards = [
    {
      id: 1,
      metric: "+100,000",
      title: "Stats Expected in Year One",
      description: "Tracks stats across local leagues, tournaments, and rec teams in real time.",
    },
    {
      id: 2,
      metric: "10,000+",
      title: "Players Projected",
      description: "Forecasted to serve over 10K players, giving each one visibility, rankings, and season stats.",
    },
    {
      id: 3,
      metric: "70%",
      title: "Faster League Management",
      description: "Beta testers report setting teams, schedules, and rosters 70% faster than traditional methods like spreadsheets and group chats.",
    },
    {
      id: 4,
      metric: "500+",
      title: "Leagues Targeted",
      description: "Working with community leaders and organizers to bring GameGrid to 500+ active leagues in basketball, soccer, and volleyball.",
    },
    {
      id: 5,
      metric: "40%",
      title: "Higher Player Retention (Pilot Data)",
      description: "Leagues using our beta tools saw improved attendance and return rate—players stay engaged when their performance is tracked.",
    },
    {
      id: 6,
      metric: "94%",
      title: "Beta User Satisfaction",
      description: "In early trials, 94% of admins and players said they’d use GameGrid again, citing speed, simplicity, and stat accuracy.",
    },
    // The following two are placeholders to maintain 8 cards, update when new metrics are available
    {
      id: 7,
      metric: "24/7",
      title: "Real‑Time Availability",
      description: "Always-on stat tracking and standings so players and admins can check updates anytime.",
    },
    {
      id: 8,
      metric: "3+",
      title: "Sports at Launch",
      description: "Focused rollout across basketball, soccer, and volleyball with more sports planned.",
    },
  ];

  // Duplicate exactly twice for seamless -50% translation
  const baseCards = placeholderCards;
  const duplicatedCards = [...baseCards, ...baseCards];

  // measure cycle width
  useEffect(() => {
    const track = containerRef.current;
    if (!track) return;
    const measure = () => {
      if (track.children.length < baseCards.length) return;
      const first = track.children[0] as HTMLElement;
      const last = track.children[baseCards.length - 1] as HTMLElement;
      const cycle = last.offsetLeft + last.offsetWidth - first.offsetLeft;
      cycleWidthRef.current = cycle;
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    window.addEventListener('resize', measure);
    return () => { ro.disconnect(); window.removeEventListener('resize', measure); };
  }, [baseCards.length]);

  useEffect(() => { hoveredRef.current = isHovered; }, [isHovered]);
  useEffect(() => { clickPausedRef.current = isClickPaused; }, [isClickPaused]);

  // GSAP ticker for continuous motion (leftward)
  useEffect(() => {
    if (tickerInitedRef.current) return;
    tickerInitedRef.current = true;
    const track = containerRef.current;
    if (!track) return;
    xRef.current = -cycleWidthRef.current / 2; // start mid-cycle for variety
    gsap.set(track, { x: xRef.current });
    const speedPxPerSec = -40; // bottom row slower and opposite
    const update = () => {
      const cycle = cycleWidthRef.current;
      if (!cycle) return;
      if (hoveredRef.current || clickPausedRef.current) return;
      const delta = gsap.ticker.deltaRatio();
      const dx = (speedPxPerSec / 60) * delta;
      xRef.current += dx; // dx negative -> left
      if (xRef.current <= -cycle) {
        xRef.current += cycle;
      }
      gsap.set(track, { x: xRef.current });
    };
    gsap.ticker.add(update);
    return () => { gsap.ticker.remove(update); };
  }, []);

  const animateCenterToIndex = (index: number) => {
    const track = containerRef.current;
    if (!track) return;
    const baseCount = baseCards.length;
    const target = (track.children[baseCount + index] as HTMLElement) || (track.children[index] as HTMLElement);
    if (!target) return;
    const containerWidth = (track.parentElement as HTMLElement).offsetWidth;
    const slideWidth = target.offsetWidth;
    const targetLeft = target.offsetLeft;
    let desiredX = containerWidth / 2 - slideWidth / 2 - targetLeft;
    const cycle = cycleWidthRef.current || 1;
    while (desiredX > 0) desiredX -= cycle;
    while (desiredX <= -cycle) desiredX += cycle;
    if (navTweenRef.current) navTweenRef.current.kill();
    navTweenRef.current = gsap.to(track, {
      x: desiredX,
      duration: 0.6,
      ease: 'power2.out',
      onUpdate: () => { xRef.current = (gsap.getProperty(track, 'x') as number) || desiredX; },
      onComplete: () => { xRef.current = desiredX; }
    });
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % placeholderCards.length;
    setCurrentIndex(nextIndex);
    setIsClickPaused(true);
    animateCenterToIndex(nextIndex);
    setTimeout(() => { if (!hoveredRef.current) setIsClickPaused(false); }, 1500);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + placeholderCards.length) % placeholderCards.length;
    setCurrentIndex(prevIndex);
    setIsClickPaused(true);
    animateCenterToIndex(prevIndex);
    setTimeout(() => { if (!hoveredRef.current) setIsClickPaused(false); }, 1500);
  };

  return (
    <div 
      className={`relative w-full marquee marquee-cards`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Navigation Arrows */}
      {isHovered && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-[#0f5a1f] hover:scale-110 transition-all duration-300 shadow-lg"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-[#0f5a1f] hover:scale-110 transition-all duration-300 shadow-lg"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </>
      )}

      {/* Marquee Track - duplicate the sequence twice */}
      <div className="marquee-track">
        <div ref={containerRef} className="flex space-x-2">
          {duplicatedCards.map((card, index) => (
            <div key={`${card.id}-${index}`} className="flex-shrink-0">
              <div className="w-[240px] sm:w-[420px]">
                <Card className="h-36 sm:h-60 bg-[#0f5a1f] text-white border-0 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-1 sm:pb-2 sm:px-6">
                    <div
                      className="text-white/90 font-extrabold text-2xl sm:text-5xl leading-none"
                      style={{ fontFamily: '"Satoshi", var(--font-sans)' }}
                    >
                      {card.metric}
                    </div>
                    <CardTitle
                      className="mt-1 text-sm sm:text-2xl font-black uppercase tracking-tight text-white"
                      style={{ fontFamily: 'var(--font-gamegrid-title)' }}
                    >
                      {card.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="sm:px-6">
                    <CardDescription className="text-[11px] leading-snug sm:text-base font-semibold text-white/85">
                      {card.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
