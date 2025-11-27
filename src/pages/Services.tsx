import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We dive deep into your requirements, business goals, and technical constraints to understand exactly what you need.',
  },
  {
    step: '02',
    title: 'Planning',
    description: 'Detailed project roadmap with milestones, tech stack selection, and architecture design tailored to your scale.',
  },
  {
    step: '03',
    title: 'Development',
    description: 'Agile sprints with regular updates, code reviews, and iterative refinement based on your feedback.',
  },
  {
    step: '04',
    title: 'Delivery',
    description: 'Thorough testing, documentation, deployment support, and knowledge transfer for seamless handoff.',
  },
];

const TECH_STACK = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'] },
  { category: 'Backend', items: ['Python', 'Django', 'Node.js', 'FastAPI'] },
  { category: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase'] },
  { category: 'Cloud', items: ['AWS', 'Azure', 'Google Cloud', 'Vercel'] },
  { category: 'Embedded', items: ['Arduino', 'STM32', 'Raspberry Pi', 'ESP32'] },
  { category: 'AI/ML', items: ['TensorFlow', 'PyTorch', 'OpenAI', 'LangChain'] },
];

export const Services = () => {
  return (
    <div className="flex flex-col w-full">

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-primary-50/30 via-white to-white overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[30rem] h-[30rem] bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[30rem] h-[30rem] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-primary-50 to-primary-100 text-primary-800 text-xs font-semibold uppercase tracking-wide mb-6 border border-primary-100">
              What We Do
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-950 mb-6 tracking-tight leading-tight">
              End-to-End{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
                Digital Solutions
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              From concept to deployment, we deliver full-stack development, AI integration, IoT systems, and automation solutions that transform how businesses operate.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-gradient-to-br from-white to-slate-50/50 rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:border-primary-200 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-50 to-purple-50 rounded-xl flex items-center justify-center text-primary-600 mb-5 group-hover:from-primary-600 group-hover:to-primary-700 group-hover:text-white transition-all duration-300">
                  <service.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-primary-950 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">How We Work</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              A proven process refined over years of delivering successful projects for clients worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step.step} className="relative">
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary-200 to-transparent" />
                )}
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-200 to-primary-300 mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-primary-950 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Technology Stack</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              We leverage modern, battle-tested technologies to build scalable and maintainable solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {TECH_STACK.map((stack) => (
              <div key={stack.category} className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                <h4 className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-3">{stack.category}</h4>
                <ul className="space-y-1.5">
                  {stack.items.map((item) => (
                    <li key={item} className="flex items-center text-sm text-slate-700">
                      <CheckCircle size={12} className="text-primary-500 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Something Great?
          </h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project. Whether it's a web app, automation system, or IoT solution, we're here to help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-white text-primary-900 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-300 shadow-lg flex items-center justify-center"
            >
              Start Your Project
              <ArrowRight size={18} className="ml-2" />
            </a>
            <Link
              to="/products"
              className="w-full sm:w-auto px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
            >
              View Our Products
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
