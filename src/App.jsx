import { useEffect } from 'react'
import Spline from '@splinetool/react-spline'
import Navbar from './Navbar'
import { Github, Linkedin, Mail, ArrowRight, Code2, Sparkles } from 'lucide-react'

function SectionHeading({ kicker, title, subtitle }) {
  return (
    <div className="max-w-3xl mx-auto text-center">
      {kicker && <p className="text-xs uppercase tracking-widest text-white/60 mb-3">{kicker}</p>}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4">{title}</h2>
      {subtitle && <p className="text-white/70 leading-relaxed">{subtitle}</p>}
    </div>
  )
}

function ProjectCard({ title, description, tags }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5 hover:bg-white/10 transition-all">
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      <div className="p-6">
        <div className="flex items-center gap-2 text-white mb-2">
          <span className="h-8 w-8 rounded-lg bg-white/10 grid place-items-center ring-1 ring-white/20">
            <Code2 size={16} />
          </span>
          <h3 className="font-semibold text-lg">{title}</h3>
        </div>
        <p className="text-white/70 text-sm leading-relaxed mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="text-xs text-white/80 bg-white/10 ring-1 ring-white/20 px-2 py-1 rounded-full">{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

function ServiceCard({ title, description }) {
  return (
    <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 hover:bg-white/10 transition-colors">
      <div className="flex items-center gap-2 text-white mb-2">
        <span className="h-8 w-8 rounded-lg bg-white/10 grid place-items-center ring-1 ring-white/20">
          <Sparkles size={16} />
        </span>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-white/70 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const projects = [
    {
      title: 'Narrative AI Film Generator',
      description: 'Turns ideas into cinematic AI-driven storyboards with voice, motion, and mood-aware scene cuts.',
      tags: ['GenAI', 'Storytelling', 'WebGL']
    },
    {
      title: 'Realtime AI Interview Coach',
      description: 'Live feedback on tone, clarity and content. Whisper + LLM critique + coaching overlay.',
      tags: ['Speech', 'LLM', 'Feedback']
    },
    {
      title: 'Semantic Creator Dashboard',
      description: 'Search, cluster and remix your entire content library with vector search and prompt graphs.',
      tags: ['Embeddings', 'RAG', 'Next-Gen UX']
    },
  ]

  const services = [
    { title: 'AI Content Systems', description: 'Pipelines for script → voice → video → distribution with human-in-the-loop.' },
    { title: 'Agentic Apps', description: 'Goal-driven agents that plan, call tools, and ship results reliably.' },
    { title: 'RAG & Knowledge', description: 'Private retrieval systems with clean UX and measurable accuracy.' },
    { title: 'Prototyping', description: 'From idea to polished prototype with modern motion and 3D.' },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="relative h-[92vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="relative z-10 h-full pointer-events-none flex items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.2em] text-white/70 mb-3">AI Content Creator • AI Engineer</p>
              <h1 className="text-4xl sm:text-6xl font-semibold leading-tight">
                Faalo — innovative storytelling with intelligent systems
              </h1>
              <p className="text-white/70 mt-4 max-w-xl">
                I design and build delightful AI experiences — from narrative generators to agentic tools — with modern motion and glassmorphism aesthetics.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <a href="#work" className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2 font-medium hover:bg-white/90 transition">
                  View Work <ArrowRight size={16} />
                </a>
                <a href="#contact" className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/20 px-5 py-2 hover:bg-white/20">
                  Contact Me <Mail size={16} />
                </a>
              </div>
              <div className="mt-6 flex items-center gap-4 pointer-events-auto">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white">
                  <Github size={18} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white">
                  <Linkedin size={18} />
                </a>
                <a href="mailto:hello@faalo.ai" className="text-white/70 hover:text-white">
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent pointer-events-none" />
      </section>

      <section id="work" className="relative py-20">
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(255,255,255,0.08)_0%,rgba(0,0,0,0)_60%)] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading kicker="Selected work" title="Projects that blend narrative and intelligence" subtitle="A snapshot of experiments and products crafted for creators and teams." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="relative py-20">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading kicker="What I do" title="Services for AI-first teams" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="relative py-20">
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading kicker="About" title="Hi, I’m Faalo" />
          <p className="text-white/70 leading-relaxed mt-6">
            I craft AI systems that feel alive: smooth, conversational, and purposeful. My background spans product engineering, creative coding, and applied machine learning — always with a focus on storytelling and experience design.
          </p>
        </div>
      </section>

      <section id="contact" className="relative py-20">
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading kicker="Let’s collaborate" title="Tell me about your idea" />
          <form onSubmit={(e) => e.preventDefault()} className="mt-8 grid gap-4 bg-white/5 ring-1 ring-white/10 rounded-2xl p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <input placeholder="Your name" className="w-full rounded-lg bg-white/10 px-4 py-3 text-white placeholder:text-white/50 ring-1 ring-white/20 focus:outline-none focus:ring-white/40" />
              <input placeholder="Email" className="w-full rounded-lg bg-white/10 px-4 py-3 text-white placeholder:text-white/50 ring-1 ring-white/20 focus:outline-none focus:ring-white/40" />
            </div>
            <input placeholder="Project title" className="w-full rounded-lg bg-white/10 px-4 py-3 text-white placeholder:text-white/50 ring-1 ring-white/20 focus:outline-none focus:ring-white/40" />
            <textarea rows="4" placeholder="Tell me a bit about the project..." className="w-full rounded-lg bg-white/10 px-4 py-3 text-white placeholder:text-white/50 ring-1 ring-white/20 focus:outline-none focus:ring-white/40" />
            <button className="inline-flex items-center gap-2 justify-center rounded-lg bg-white text-black px-5 py-3 font-medium hover:bg-white/90">
              Send <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </section>

      <footer className="py-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/60">
          <p>© {new Date().getFullYear()} Faalo — AI Content Creator & Engineer</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Imprint</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
