import React from "react";
import {
  ArrowRight,
  Shield,
  Lock,
  Zap,
  Code,
  GitBranch,
  Terminal,
} from "lucide-react";

export const Products: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Product Hero Section */}
      <section className="relative bg-slate-950 pt-20 pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary-900/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-900/30 border border-primary-500/30 text-primary-300 mb-8 backdrop-blur-sm">
              <Shield size={16} className="mr-2" />
              <span className="text-sm font-semibold tracking-wide uppercase">
                Our Flagship Product
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 leading-tight">
              Guardian{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">
                MCP
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-400 mb-12 leading-relaxed">
              Engineering Gates for AI Code Development. Stop AI from
              hallucinating code, creating duplicates, and breaking your
              codebase.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://guardianmcp.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-950 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all duration-300 flex items-center justify-center group"
              >
                Get Guardian MCP
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="text-slate-500 text-sm font-medium mt-4 sm:mt-0">
                Free forever plan • No credit card required
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Analyze First, Code Second
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The memory and discipline layer your AI coding assistant needs.
              Works with Claude, Cursor, and Windsurf.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Lock,
                title: "100% Private & Local",
                description:
                  "Your code never leaves your machine. Guardian indexes locally and only usage metadata reaches servers. Zero code transmission.",
              },
              {
                icon: GitBranch,
                title: "Persistent Memory",
                description:
                  "Cross-session memory ensures your AI doesn't forget context. It understands your entire codebase structure and history.",
              },
              {
                icon: Code,
                title: "Universal Support",
                description:
                  "Deep understanding of 17+ languages including TypeScript, Python, Rust, Go, Java, and C++ using tree-sitter AST parsing.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary-100 hover:shadow-xl hover:shadow-primary-900/5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-primary-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Engineering Gates Workflow
              </h2>
              <p className="text-slate-400 text-lg mb-8">
                Guardian introduces a strict 3-gate workflow to ensure code
                quality and prevent regressions.
              </p>

              <div className="space-y-8">
                {[
                  {
                    step: "01",
                    title: "Analysis Gate",
                    desc: "Finds ALL existing code relevant to the task before writing a single line.",
                  },
                  {
                    step: "02",
                    title: "Planning Gate",
                    desc: "Validates the approach against architectural patterns and project constraints.",
                  },
                  {
                    step: "03",
                    title: "Execution Gate",
                    desc: "Allows code generation only after analysis and planning are approved.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-primary-500/30 flex items-center justify-center text-primary-400 font-mono font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-primary-500/20 blur-[80px] rounded-full pointer-events-none" />
              <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-4">
                  <Terminal size={20} className="text-primary-400" />
                  <span className="text-sm font-mono text-slate-400">
                    Add OAuth2 using engineering gates
                  </span>
                </div>
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex gap-3">
                    <span className="text-green-400">✓</span>
                    <span className="text-slate-300">
                      Analysis Gate started. Required: Find ALL existing code
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-green-400">✓</span>
                    <span className="text-slate-300">
                      Found 10 matches:{" "}
                      <span className="text-blue-400">useAuth</span>,{" "}
                      <span className="text-blue-400">auth_middleware</span>...
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-green-400">✓</span>
                    <span className="text-slate-300">
                      Analysis passed. Moving to Planning Gate.
                    </span>
                  </div>
                  <div className="flex gap-3 pl-4 border-l-2 border-primary-500/50">
                    <span className="text-primary-300">AI:</span>
                    <span className="text-slate-400">
                      Found existing OAuth code. I'll extend it instead of
                      rewriting.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-primary-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Ready to stop AI hallucinations?
          </h2>
          <p className="text-primary-100 text-xl mb-10 max-w-2xl mx-auto">
            Join developers who are saving 4+ hours per feature and eliminating
            duplicate code bugs.
          </p>
          <a
            href="https://guardianmcp.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-5 bg-white text-primary-700 rounded-xl font-bold text-lg hover:bg-slate-50 hover:scale-105 transition-all duration-300 shadow-xl shadow-primary-900/20"
          >
            Install Guardian MCP
            <Zap className="ml-2 fill-current" />
          </a>
        </div>
      </section>
    </div>
  );
};
