import React from "react";
import { CheckCircle } from "lucide-react";
import { SEO } from "../components/SEO";

export const About: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <SEO
        title="About Us - SkyAstrall"
        description="Learn about SkyAstrall, a team of engineers, designers, and strategists passionate about digital transformation and custom software solutions."
        canonical="/about"
      />
      {/* 1. Hero / Who We Are Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary-50/20 via-white to-white overflow-hidden">
        {/* Abstract Background Pattern (Same as Home) */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[30rem] h-[30rem] bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[30rem] h-[30rem] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-primary-950 mb-6 tracking-tight leading-tight">
                We are{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-primary-800">
                  SkyAstrall
                </span>
                .
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                Great software requires more than just code. It requires a deep
                understanding of the business problems we are solving. We are a
                team of engineers, designers, and strategists passionate about
                digital transformation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Client-Centric Approach",
                  "Agile Methodology",
                  "Top-Tier Engineering Talent",
                  "Transparent Communication",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center text-slate-800 font-medium"
                  >
                    <CheckCircle
                      className="text-primary-600 mr-3 flex-shrink-0"
                      size={20}
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-purple-600 transform rotate-3 rounded-3xl opacity-20 blur-lg"></div>
              <img
                src="https://picsum.photos/600/600?random=20"
                alt="SkyAstrall team collaborating in office"
                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-square border border-white/50"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Strip - Removed */}
      {/* 3. Founder Section - Removed */}
    </div>
  );
};
