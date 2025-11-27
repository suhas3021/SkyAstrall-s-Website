import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Quote, Zap, TrendingUp } from "lucide-react";
import { PROJECTS, TESTIMONIALS, SERVICES } from "../constants";
import { FloatingCard } from "../components/FloatingCard";
import { ContactForm } from "../components/ContactForm";

// Custom hook replacing framer-motion's useInView
const useInView = (options: IntersectionObserverInit = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // once: true behavior
        }
      },
      { rootMargin: "-50px", ...options }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { ref, isInView };
};

// Easing function (circOut equivalent)
const easeCircOut = (t: number): number => Math.sqrt(1 - Math.pow(t - 1, 2));

const AnimatedCounter: React.FC<{ value: string; label: string }> = ({
  value,
  label,
}) => {
  const { ref, isInView } = useInView();
  const numberRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isInView || !numberRef.current) return;

    const number = parseInt(value.replace(/[^0-9]/g, "")) || 0;
    const suffix = value.replace(/[0-9]/g, "");
    const duration = 2500;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeCircOut(progress);
      const currentValue = Math.floor(easedProgress * number);

      if (numberRef.current) {
        numberRef.current.textContent = currentValue + suffix;
      }

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [isInView, value]);

  return (
    <div ref={ref} className="group">
      <div
        ref={numberRef}
        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800 mb-2 group-hover:scale-110 transition-transform duration-300"
      >
        0
      </div>
      <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
        {label}
      </div>
    </div>
  );
};

export function HeroSectionOne() {
  return (
    <div className="relative bg-white from-primary-50/30 via-white to-white pt-24 pb-24 lg:pt-40 lg:pb-48 overflow-hidden min-h-[80vh] flex items-center justify-center">
      {/* Floating UI Elements (Desktop Only) - Positioned to not block content */}
      <div className="hidden xl:block absolute inset-0 pointer-events-none">
        {/* Top Left - Revenue Card */}
        <FloatingCard
          animationClass="animate-float-1"
          className="absolute top-24 left-4 2xl:left-12 p-4 z-10 flex gap-3 items-center opacity-90 scale-90 2xl:scale-100"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl flex items-center justify-center text-primary-600">
            <Zap size={26} fill="currentColor" />
          </div>
          <div>
            <div className="text-xs text-slate-500 font-medium">
              Total Revenue
            </div>
            <div className="text-xl font-bold text-slate-900">$124,500</div>
          </div>
        </FloatingCard>

        {/* Top Right - Analytics Card - Moved further right and smaller */}
        <FloatingCard
          animationClass="animate-float-2"
          className="absolute top-20 right-4 2xl:right-12 p-4 z-10 w-64 opacity-90 scale-90 2xl:scale-100"
        >
          <div className="flex justify-between items-center mb-4">
            <div className="font-bold text-slate-800">Analytics</div>
            <div className="text-green-500 text-xs font-bold">+14%</div>
          </div>
          <div className="flex items-end gap-1.5 h-20 justify-between">
            {[40, 70, 45, 90, 65, 85].map((h, i) => (
              <div
                key={i}
                className="w-6 bg-gradient-to-t from-primary-600 to-primary-400 rounded-t-md opacity-80"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </FloatingCard>

        {/* Bottom Left - Active Users Card */}
        <FloatingCard
          animationClass="animate-float-3"
          className="absolute bottom-32 left-4 2xl:left-12 p-4 z-10 opacity-90 scale-90 2xl:scale-100"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-2.5 rounded-xl">
              <TrendingUp className="text-blue-600" size={22} />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-500 font-bold">
                Active Users
              </div>
              <div className="font-bold text-slate-900 text-2xl">14.2k</div>
            </div>
          </div>
          <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full w-[70%]" />
          </div>
        </FloatingCard>

        {/* Bottom Right - System Status Card */}
        <FloatingCard
          animationClass="animate-float-4"
          className="absolute bottom-24 right-4 2xl:right-12 p-4 z-10 flex items-center gap-3 opacity-90 scale-90 2xl:scale-100"
        >
          <div className="relative flex-shrink-0">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-20" />
          </div>
          <div>
            <div className="text-sm font-bold text-primary-950">
              System Status
            </div>
            <div className="text-xs text-slate-500">
              All services operational
            </div>
          </div>
          <div className="ml-auto bg-green-50 text-green-700 text-xs font-bold px-2 py-1 rounded-md">
            99.9%
          </div>
        </FloatingCard>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-slate-900 mb-8 leading-[1.1]">
          Transforming Ideas into <br className="hidden lg:block" />
          Intelligent{" "}
          <span className="relative inline-block px-4 py-2 mx-2">
            <span className="absolute inset-0 bg-gradient-to-r from-slate-100 to-slate-50 rounded-xl -rotate-1"></span>
            {/* Decorative markers */}
            <span className="absolute -top-1 -left-1 w-1.5 h-1.5 border-t-2 border-l-2 border-slate-400 rounded-tl-sm"></span>
            <span className="absolute -top-1 -right-1 w-1.5 h-1.5 border-t-2 border-r-2 border-slate-400 rounded-tr-sm"></span>
            <span className="absolute -bottom-1 -left-1 w-1.5 h-1.5 border-b-2 border-l-2 border-slate-400 rounded-bl-sm"></span>
            <span className="absolute -bottom-1 -right-1 w-1.5 h-1.5 border-b-2 border-r-2 border-slate-400 rounded-br-sm"></span>

            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
              Digital Reality
            </span>
          </span>
        </h1>

        <p className="mt-8 text-xl md:text-2xl text-slate-500 leading-relaxed mb-12 max-w-3xl mx-auto">
          We bridge the gap between the physical and digital worlds, delivering
          custom engineering and seamless integration to future-proof your
          business.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#contact"
            className="w-full sm:w-auto h-14 px-10 rounded-xl text-lg bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 flex items-center justify-center shadow-lg shadow-primary-600/20 hover:shadow-xl hover:shadow-primary-600/30 hover:-translate-y-0.5"
          >
            Start Your Project
          </a>
          <a
            href="#work"
            className="w-full sm:w-auto h-14 px-10 rounded-xl text-lg border border-primary-200 bg-white text-primary-700 font-semibold hover:bg-gradient-to-br hover:from-primary-50 hover:to-white transition-all duration-300 flex items-center justify-center hover:-translate-y-0.5"
          >
            See Our Work
          </a>
        </div>
      </div>
    </div>
  );
}

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <HeroSectionOne />

      {/* 2. Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary-50/20 via-white to-primary-50/20 border-b border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Years Experience", value: "5+" },
              { label: "Projects Delivered", value: "150+" },
              { label: "Team Members", value: "10+" },
              { label: "Global Clients", value: "30+" },
            ].map((stat, i) => (
              <AnimatedCounter key={i} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* 2.5 Featured Product: Guardian MCP */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-900/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-900/30 border border-primary-500/30 text-primary-300 mb-6 backdrop-blur-sm">
                <span className="text-xs font-bold tracking-wider uppercase">
                  New Release
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Guardian <span className="text-primary-400">MCP</span>
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                The missing engineering layer for AI code development. Stop your
                AI assistant from hallucinating code and breaking your build.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  "Stops code duplication & hallucinations",
                  "100% private & local execution",
                  "Persistent cross-session memory",
                  "Works with Cursor, Windsurf & Claude",
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-300">
                    <div className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center mr-3">
                      <svg
                        className="w-3.5 h-3.5 text-primary-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://guardianmcp.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-bold transition-all duration-300 shadow-lg shadow-primary-900/20 flex items-center justify-center"
                >
                  Get Guardian MCP
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/products"
                  className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-bold transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-purple-600/20 rounded-2xl blur-2xl transform rotate-3"></div>
              <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
                {/* Code / Terminal UI Mockup */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                  </div>
                  <div className="text-xs text-slate-500 font-mono">
                    guardian-cli — v0.1.6
                  </div>
                </div>

                <div className="space-y-4 font-mono text-sm">
                  <div className="text-slate-400">
                    $ add OAuth2 using engineering gates
                  </div>

                  <div className="pl-4 border-l-2 border-primary-500/30 space-y-2">
                    <div className="text-primary-300">
                      Guardian Analysis Gate:
                    </div>
                    <div className="text-slate-300">
                      Scanning codebase for existing auth patterns...
                    </div>
                    <div className="text-green-400">
                      ✓ Found 3 existing auth implementations
                    </div>
                    <div className="text-yellow-400">
                      ⚠ WARNING: Duplicate auth logic detected in /src/lib
                    </div>
                    <div className="text-white mt-2">
                      Recommendation: Extend existing `AuthService` instead of
                      creating new files.
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mt-4 text-slate-400">
                    <span className="animate-pulse">▋</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Work Sample Grid */}
      <section id="work" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Our Project Showcase
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Real-world examples of how we transform complex operational
              challenges into streamlined products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((project) => (
              <a
                key={project.id}
                href={project.link}
                className="group relative block rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-primary-900/20 transition-all duration-300 border border-slate-200 aspect-[4/3] cursor-pointer"
              >
                {/* Image - Fixed Scale */}
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />

                {/* Improved Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                  <div className="transform transition-transform duration-300">
                    <span className="inline-flex items-center px-3 py-1 mb-3 text-xs font-medium tracking-wider text-primary-100 uppercase bg-primary-900/40 backdrop-blur-md border border-primary-700/30 rounded-full">
                      {project.category}
                    </span>
                    <div className="flex items-end justify-between">
                      <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                        {project.title}
                      </h3>
                      <div className="bg-white text-primary-900 rounded-full p-2 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shadow-lg">
                        <ArrowRight size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Services Section */}
      <section
        id="services"
        className="py-24 bg-gradient-to-b from-slate-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Our Core Capabilities
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Specialized development spanning intelligent embedded systems,
              Python automation, and high-performance custom web architectures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-gradient-to-br from-white to-slate-50/50 rounded-xl p-8 shadow-sm border border-slate-100 hover:shadow-lg hover:border-primary-200 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-50 to-purple-50 rounded-xl flex items-center justify-center text-primary-600 mb-6 group-hover:from-primary-600 group-hover:to-primary-700 group-hover:text-white transition-all duration-300">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-primary-950 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Partnerships That Drive Growth
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Trusted by founders and engineering leaders to deliver scalable,
              reliable solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-primary-200 transition-all duration-300 flex flex-col"
              >
                <div className="mb-6 text-primary-400">
                  <Quote
                    size={32}
                    className="fill-primary-50 text-primary-400"
                  />
                </div>
                <p className="text-slate-600 italic mb-8 flex-grow text-lg leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center pt-6 border-t border-slate-50">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-primary-100"
                  />
                  <div>
                    <h4 className="font-bold text-primary-950 text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800 text-xs font-bold tracking-wide uppercase">
                      {testimonial.designation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Contact Section */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-t from-primary-50/30 via-white to-white relative overflow-hidden"
      >
        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
          <div className="absolute -right-64 top-20 w-96 h-96 bg-primary-100/50 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute -left-64 bottom-20 w-96 h-96 bg-purple-100/50 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ContactForm />
        </div>
      </section>
    </div>
  );
};
