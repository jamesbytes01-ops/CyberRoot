import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, BookOpen, ShieldCheck, Download, RotateCcw, 
  Flame, Network, Terminal, Key, Cpu, Search, Star, Sparkles, Mail,
  ChevronRight, TerminalSquare, Zap, Lock, CheckCircle2, FileText, Shield
} from 'lucide-react';
const bookModules = import.meta.glob('../data/books/*.json', { eager: true });
const booksData = Object.values(bookModules).map(mod => mod.default || mod);
import { BookCard } from '../components/cards/BookCard';
import { Button } from '../components/ui/Button';
import { HeroIllustration } from '../components/layout/HeroIllustration';
import { WebrootArchitectureSvg } from '../components/ui/WebrootArchitectureSvg';
import { BookCover } from '../utils/svgGenerator';
import heroSocCenter from '../assets/hero-soc-center.jpg';
import promoEbookImage from '../assets/promo-real-books.png';

export default function Home() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [promoHovered, setPromoHovered] = useState(false);
  
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalOutput, setTerminalOutput] = useState([
    { type: 'system', text: 'CipherOS v2.4.1 (tty1)' },
    { type: 'system', text: 'Type "help" to see available commands.' }
  ]);

  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;

    const cmd = terminalInput.trim().toLowerCase();
    const newOutput = [...terminalOutput, { type: 'user', text: `visitor@cyberroot:~$ ${cmd}` }];

    if (cmd === 'sudo get-discount' || cmd === 'cat /etc/discount') {
      newOutput.push({ type: 'success', text: 'Access Granted! Free Open-Access E-Book Library.' });
    } else if (cmd === 'help') {
      newOutput.push({ type: 'system', text: 'Commands: help, whoami, clear' });
    } else if (cmd === 'whoami') {
      newOutput.push({ type: 'system', text: 'guest_user_992' });
    } else if (cmd === 'clear') {
      setTerminalOutput([]);
      setTerminalInput('');
      return;
    } else {
      newOutput.push({ type: 'error', text: `bash: ${cmd}: command not found` });
    }

    setTerminalOutput(newOutput);
    setTerminalInput('');
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  // Extract featured books and free books
  const featuredBooks = booksData.filter((book) => book.featured).slice(0, 5);
  const freeBooks = booksData.filter((book) => book.price === 0).slice(0, 4);


  // Testimonials list (12 items for 4 slides)
  const testimonials = [
    {
      quote: "CyberRoot provides unmatched technical depth. The advanced exploit dev and threat hunting guides have become standard reference material for our entire security team.",
      name: "Alex Mercer",
      role: "Principal Security Architect",
      stars: 5,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "Instant PDF downloads, impeccable formatting, and top-tier authors. CyberRoot is my primary source for offensive security playbooks.",
      name: "Elena Rostova",
      role: "Senior Penetration Tester",
      stars: 5,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      quote: "Finding reliable, up-to-date threat intel and digital forensics literature used to take hours. CyberRoot curates only the best technical titles.",
      name: "Marcus Vance",
      role: "Head of Incident Response",
      stars: 5,
      avatar: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
      quote: "An essential resource for blue team operators. The AWS & Kubernetes security architecture guides are practical and immediately actionable.",
      name: "David K.",
      role: "Cloud Security Engineer",
      stars: 5,
      avatar: "https://randomuser.me/api/portraits/men/60.jpg"
    },
    {
      quote: "I recommend CyberRoot to all junior analysts on my team. The code-level vulnerability assessment books are second to none.",
      name: "Sarah Lin",
      role: "Lead Application Security Specialist",
      stars: 5,
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      quote: "CyberRoot's enterprise collection has helped us establish robust compliance frameworks and modern defense strategies across our organization.",
      name: "Michael Thorne",
      role: "Chief Information Security Officer (CISO)",
      stars: 5,
      avatar: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
      quote: "A treasure trove for serious cryptography and reverse engineering work. The depth of low-level technical knowledge here is outstanding.",
      name: "Dr. Vikram Seth",
      role: "Cryptography Researcher",
      stars: 5,
      avatar: "https://randomuser.me/api/portraits/women/33.jpg"
    },
    {
      quote: "The physical security and social engineering guides provided crucial insights for our adversary simulation engagements.",
      name: "James Bennett",
      role: "Red Team Lead",
      stars: 5,
      avatar: "https://randomuser.me/api/portraits/men/82.jpg"
    },
    {
      quote: "Curated e-book bundles save our onboarding team countless hours. New hires get up to speed on malware analysis in record time.",
      name: "Amanda Wright",
      role: "SOC Operations Manager",
      stars: 5,
      avatar: "https://randomuser.me/api/portraits/women/12.jpg"
    },
    {
      quote: "The reverse engineering and binary analysis titles are exceptionally detailed. Real-world samples and clear walkthroughs throughout.",
      name: "Robert Chen",
      role: "Reverse Engineer & Malware Analyst",
      stars: 5,
      avatar: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
      quote: "From OSCP prep to advanced kernel exploitation, every book I've purchased here has delivered exceptional value.",
      name: "Kevin Miller",
      role: "Cybersecurity Researcher",
      stars: 5,
      avatar: "https://randomuser.me/api/portraits/men/86.jpg"
    },
    {
      quote: "Finally a platform built specifically for security engineers. Seamless purchase, zero DRM friction, and top-quality technical writing.",
      name: "Lisa H.",
      role: "DevSecOps Architect",
      stars: 5,
      avatar: "https://randomuser.me/api/portraits/women/26.jpg"
    }
  ];

  // Category listing shortcuts
  const browseCategories = [
    { name: 'Ethical Hacking', icon: <Flame className="w-5 h-5" />, count: '12+ E-Books' },
    { name: 'Networking', icon: <Network className="w-5 h-5" />, count: '9+ E-Books' },
    { name: 'Penetration Testing', icon: <Terminal className="w-5 h-5" />, count: '11+ E-Books' },
    { name: 'Cryptography', icon: <Key className="w-5 h-5" />, count: '7+ E-Books' },
    { name: 'Web Security', icon: <Cpu className="w-5 h-5" />, count: '8+ E-Books' },
    { name: 'Digital Forensics', icon: <Search className="w-5 h-5" />, count: '6+ E-Books' }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-slate-900 min-h-[calc(100vh-80px)] flex items-center bg-[#090d16] w-full">
        {/* Full-width 100% Screen Edge-to-Edge Background Image */}
        <img 
          src={heroSocCenter} 
          alt="Cyber Security Operations Center" 
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 pointer-events-none select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#090d16]/50 via-[#090d16]/70 to-[#090d16]/90 pointer-events-none" />

        <div className="w-full max-w-[92%] xl:max-w-[1600px] mx-auto px-4 md:px-8 relative z-10 flex justify-center py-12">
          <div className="flex flex-col items-center text-center gap-6 max-w-4xl">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm">
              <div className="flex gap-0.5 text-amber-400">
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
              </div>
              <span className="text-[10px] sm:text-xs text-white font-bold uppercase tracking-wider">
                Excellent 4.9/5 from <span className="text-slate-200">2,000+ Engineers</span>
              </span>
            </div>

            <h1 className="text-2xl md:text-4xl lg:text-[46px] font-display font-light text-white leading-[1.18] w-full drop-shadow-md">
              100% Free Cybersecurity E-Books &amp; <span className="text-emerald-400 font-normal">Webroot Threat Research</span>
            </h1>
            
            <p className="text-sm md:text-lg text-slate-200 max-w-2xl leading-relaxed font-medium drop-shadow">
              Access masterclasses, free community e-books, red team manuals, whitepapers, and Webroot threat intelligence reports at zero cost.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
              <Link to="/books">
                <Button variant="accent" size="lg" className="px-7 py-3.5 bg-emerald-500 text-slate-950 font-bold border-none hover:bg-emerald-400 shadow-lg">
                  <Download className="w-4 h-4 mr-2 inline" /> Browse 100% Free E-Books
                </Button>
              </Link>
              <Link to="/antivirus-education">
                <Button variant="outline" size="lg" className="px-7 py-3.5 bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-md font-semibold">
                  Webroot Research
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 1.5 TRUSTED BY CORPORATE MARQUEE */}
      <section className="py-6 bg-slate-100 border-b border-slate-200 overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-100 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-100 to-transparent z-10 pointer-events-none" />
        
        <div className="flex items-center gap-12 whitespace-nowrap animate-marquee">
          {/* We duplicate the list twice to create a seamless infinite scrolling effect */}
          {[1, 2].map((set) => (
            <div key={set} className="flex items-center gap-16 text-slate-500 font-bold text-sm md:text-base tracking-wider uppercase px-8">
              <span className="hover:text-slate-900 transition-colors duration-300">Webroot Threat Intelligence</span>
              <span className="hover:text-slate-900 transition-colors duration-300">Global SOC Teams</span>
              <span className="hover:text-slate-900 transition-colors duration-300">Gov Security Labs</span>
              <span className="hover:text-slate-900 transition-colors duration-300">Red Team Researchers</span>
              <span className="hover:text-slate-900 transition-colors duration-300">Top Universities</span>
              <span className="hover:text-slate-900 transition-colors duration-300">10K+ Digital Readers</span>
            </div>
          ))}
        </div>
      </section>

      {/* 2. SLEEK HORIZONTAL TRUST BAR */}
      <section className="py-6 border-b border-slate-200 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            
            {/* Item 1 */}
            <div className="flex items-center gap-4 w-full md:w-1/4 md:justify-center pt-4 md:pt-0 first:pt-0">
              <div className="w-10 h-10 rounded-xl border border-accent/40 flex items-center justify-center text-accent bg-white shadow-sm flex-shrink-0">
                <BookOpen className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">30+</span>
                <span className="text-[11px] font-medium text-slate-500">Online E-Books</span>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-4 w-full md:w-1/4 md:justify-center pt-4 md:pt-0 md:pl-4">
              <div className="w-10 h-10 rounded-xl border border-emerald-500/40 flex items-center justify-center text-emerald-600 bg-emerald-50 shadow-sm flex-shrink-0">
                <Download className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-extrabold text-slate-900 tracking-wide uppercase">100% Free</span>
                <span className="text-[11px] font-medium text-slate-500">Community Guides</span>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-4 w-full md:w-1/4 md:justify-center pt-4 md:pt-0 md:pl-4">
              <div className="w-10 h-10 rounded-xl border border-accent/40 flex items-center justify-center text-accent bg-white shadow-sm flex-shrink-0">
                <Shield className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-extrabold text-slate-900 tracking-wide uppercase">Webroot Threat</span>
                <span className="text-[11px] font-medium text-slate-500">Intelligence Hub</span>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-center gap-4 w-full md:w-1/4 md:justify-center pt-4 md:pt-0 md:pl-4">
              <div className="w-10 h-10 rounded-xl border border-accent/40 flex items-center justify-center text-accent bg-white shadow-sm flex-shrink-0">
                <RotateCcw className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-extrabold text-slate-900 tracking-wide uppercase">Instant Digital</span>
                <span className="text-[11px] font-medium text-slate-500">Multi-Device Access</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2.5. THE ENGINEER'S ADVANTAGE */}
      {/* 2.5. THE ENGINEER'S ADVANTAGE */}
      <section className="pt-12 pb-16 bg-slate-50 relative">
        <div className="w-full max-w-[92%] xl:max-w-[1500px] mx-auto px-4 md:px-8">
          
          {/* HEADING */}
          <div className="flex flex-col items-center text-center max-w-[650px] mx-auto mb-10">
            <h2 className="text-xl md:text-2xl font-display font-normal text-slate-900 tracking-tight mb-2">
              The Engineer's Advantage
            </h2>
            <p className="text-[14px] md:text-[15px] text-slate-500 font-normal leading-relaxed">
              Why thousands of security professionals choose CyberRoot for their continued education.
            </p>
          </div>

          {/* FEATURE CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-6 items-stretch">
            
            {/* CARD 1 */}
            <div className="group bg-white rounded-2xl p-6 xl:p-8 ring-1 ring-slate-200/50 shadow-[0_2px_12px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgb(0,0,0,0.06)] hover:ring-slate-200 transition-all duration-300 flex items-start gap-4 xl:gap-5">
              <div className="flex-shrink-0 w-12 h-12 xl:w-14 xl:h-14 rounded-[14px] bg-indigo-50/80 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 mt-0.5">
                <ShieldCheck className="w-6 h-6 xl:w-[26px] xl:h-[26px]" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[15px] xl:text-[17px] font-semibold text-slate-900 mb-1.5 tracking-tight">
                  Curated Library
                </h3>
                <p className="text-[13px] xl:text-[14.5px] text-slate-500 leading-relaxed pr-1">
                  Premium cybersecurity literature hand-picked by active industry experts.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="group bg-white rounded-2xl p-6 xl:p-8 ring-1 ring-slate-200/50 shadow-[0_2px_12px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgb(0,0,0,0.06)] hover:ring-slate-200 transition-all duration-300 flex items-start gap-4 xl:gap-5">
              <div className="flex-shrink-0 w-12 h-12 xl:w-14 xl:h-14 rounded-[14px] bg-emerald-50/80 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 mt-0.5">
                <Zap className="w-6 h-6 xl:w-[26px] xl:h-[26px]" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[15px] xl:text-[17px] font-semibold text-slate-900 mb-1.5 tracking-tight">
                  Instant Formats
                </h3>
                <p className="text-[13px] xl:text-[14.5px] text-slate-500 leading-relaxed pr-1">
                  Immediate DRM-free PDF and EPUB downloads straight to your device.
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="group bg-white rounded-2xl p-6 xl:p-8 ring-1 ring-slate-200/50 shadow-[0_2px_12px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgb(0,0,0,0.06)] hover:ring-slate-200 transition-all duration-300 flex items-start gap-4 xl:gap-5">
              <div className="flex-shrink-0 w-12 h-12 xl:w-14 xl:h-14 rounded-[14px] bg-blue-50/80 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 mt-0.5">
                <Lock className="w-6 h-6 xl:w-[26px] xl:h-[26px]" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[15px] xl:text-[17px] font-semibold text-slate-900 mb-1.5 tracking-tight">
                  Universal Compatibility
                </h3>
                <p className="text-[13px] xl:text-[14.5px] text-slate-500 leading-relaxed pr-1">
                  Read anywhere. Fully optimized digital formats for your tablet, phone, or e-reader.
                </p>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="group bg-white rounded-2xl p-6 xl:p-8 ring-1 ring-slate-200/50 shadow-[0_2px_12px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgb(0,0,0,0.06)] hover:ring-slate-200 transition-all duration-300 flex items-start gap-4 xl:gap-5">
              <div className="flex-shrink-0 w-12 h-12 xl:w-14 xl:h-14 rounded-[14px] bg-orange-50/80 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300 mt-0.5">
                <RotateCcw className="w-6 h-6 xl:w-[26px] xl:h-[26px]" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[15px] xl:text-[17px] font-semibold text-slate-900 mb-1.5 tracking-tight">
                  Satisfaction Guaranteed
                </h3>
                <p className="text-[13px] xl:text-[14.5px] text-slate-500 leading-relaxed pr-1">
                  High fidelity technical playbooks reviewed by industry experts for quality assurance.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* 3. SHOP BY CATEGORY SECTION */}
      <section className="pt-24 pb-16 bg-[#FAFAFA] relative border-b border-slate-200">
        <div className="w-full max-w-[95%] xl:max-w-[1600px] mx-auto px-4 md:px-8">
          
          <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 items-start">
            
            {/* LEFT COLUMN: EDITORIAL HEADER */}
            <div className="w-full lg:w-[40%] flex flex-col items-start text-left lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100/50 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-8 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                Domains of Expertise
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-normal text-slate-900 tracking-tighter mb-6 leading-[1.05]">
                Master Every Attack Surface.
              </h2>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-10">
                We don't just sell e-books. We curate specialized playbooks for modern security teams. From low-level cryptography to advanced red-teaming, find the exact knowledge you need to stay ahead of zero-days.
              </p>
              <Link 
                to="/books" 
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg text-slate-950 bg-emerald-500 hover:bg-emerald-400 hover:shadow-lg transition-all duration-300 group"
              >
                Browse Free Library 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* RIGHT COLUMN: PREMIUM GRID */}
            <div className="w-full lg:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-6">
              {browseCategories.map((cat, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <Link 
                    to={`/books?category=${encodeURIComponent(cat.name)}`} 
                    className="group relative flex flex-col items-start p-8 xl:p-10 bg-white rounded-3xl border border-slate-200/60 overflow-hidden hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:border-slate-300 transition-all duration-500 hover:-translate-y-1"
                  >
                    {/* Glowing Background Orb on Hover */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-blue-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
                    
                    <div className="relative z-10 w-full">
                      <div className="w-14 h-14 rounded-[16px] bg-gradient-to-br from-blue-500 to-emerald-400 flex items-center justify-center text-white mb-10 group-hover:scale-110 group-hover:shadow-[0_8px_20px_rgba(59,130,246,0.3)] transition-all duration-500">
                        {cat.icon}
                      </div>
                      
                      <div className="flex flex-col">
                        <h3 className="text-[22px] font-bold text-slate-900 tracking-tight mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {cat.name}
                        </h3>
                        <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">
                          {cat.count} resources
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>



      {/* 4.5. FREE E-BOOKS SHOWCASE */}
      <section className="py-20 bg-slate-50 border-y border-slate-200 text-slate-900">
        <div className="w-full max-w-[95%] xl:max-w-[1600px] mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-4">
                <Download className="w-3.5 h-3.5" />
                100% Free E-Books
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tight text-slate-900 mb-3">
                Free Community E-Books &amp; Manuals
              </h2>
              <p className="text-slate-600 text-sm md:text-base max-w-2xl leading-relaxed">
                Download open-access field guides, OWASP testing handbooks, and blue team playbooks at zero cost.
              </p>
            </div>
            <Link to="/books?filter=free" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm hover:bg-emerald-400 transition-all shadow-md shadow-emerald-500/20">
              View All Free E-Books <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {freeBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>

      {/* 4.8. WEBROOT THREAT INTELLIGENCE & RESEARCH SPOTLIGHT */}
      <section className="py-24 bg-white relative overflow-hidden border-b border-slate-200 text-left">
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-6">
              <Shield className="w-3.5 h-3.5 text-emerald-600" />
              Featured Research Spotlight
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-medium text-slate-900 tracking-tight mb-6 leading-tight">
              Webroot Cloud Threat <span className="text-emerald-600">Intelligence</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Discover how Webroot's cloud-driven threat intelligence engine analyzes billions of URL data points, IP reputations, and behavioral file signatures in real-time to neutralize zero-day exploits before execution.
            </p>
            <ul className="flex flex-col gap-4 text-slate-700 mb-10">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Predictive behavioral analysis stopping polymorphic malware</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Sub-2MB agent footprint preventing performance throttling</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Identity theft protection and zero-hour phishing blocklists</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link to="/antivirus-education">
                <Button variant="accent" size="lg" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold border-none shadow-md">
                  Explore Webroot Security Center
                </Button>
              </Link>
              <Link to="/antivirus-education">
                <Button variant="outline" size="lg" className="border-slate-300 text-slate-700 hover:bg-slate-100">
                  <FileText className="w-4 h-4 mr-2 text-slate-500" /> Read Webroot Security Report
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative w-full">
            <WebrootArchitectureSvg />
          </div>
        </div>
      </section>

      {/* 5. FREE OPEN-ACCESS E-BOOKS & RESEARCH BANNER */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div 
            onMouseEnter={() => setPromoHovered(true)}
            onMouseLeave={() => setPromoHovered(false)}
            className="w-full bg-slate-950 rounded-[28px] overflow-hidden text-left relative grid grid-cols-1 md:grid-cols-12 gap-0 border border-slate-900 hover:border-emerald-500/30 transition-all duration-500 shadow-2xl"
          >
            {/* Tech grid mesh in banner */}
            <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1.2px,transparent_1.2px)] [background-size:20px_20px] opacity-15 pointer-events-none z-0" />

            {/* Left Content */}
            <div className="md:col-span-7 flex flex-col items-start gap-5 z-10 relative py-12 px-8 md:px-14">
              <span className="text-[9px] font-black uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                100% Free &amp; Open Access
              </span>
              
              <h3 className="text-xl md:text-2xl lg:text-[32px] font-display font-semibold text-white leading-[1.15] tracking-tight max-w-lg">
                Build Your Digital Library <br />
                <span className="text-emerald-400">Zero Cost, Unlimited Access</span>
              </h3>
              
              <p className="text-xs md:text-sm text-slate-400 max-w-md leading-relaxed font-medium">
                Access open-source malware guides, red team manuals, threat research whitepapers, and defensive playbooks instantly without hidden fees or credit cards.
              </p>
              
              <Link to="/books" className="mt-2">
                <Button variant="accent" size="md" className="px-7 py-3 font-bold text-xs uppercase tracking-wider rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 border-none transition-all duration-300 hover:scale-[1.02]">
                  Explore Free E-Books Repository
                </Button>
              </Link>
            </div>

            {/* Right Graphic */}
            <div className="md:col-span-5 relative min-h-[280px] md:min-h-full w-full h-full overflow-hidden self-stretch z-10">
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-950 via-slate-950/20 to-transparent z-20 pointer-events-none" />
              <div 
                className="w-full h-full transition-transform duration-700 ease-out"
                style={{
                  transform: promoHovered ? 'scale(1.05)' : 'scale(1)'
                }}
              >
                <img 
                  src={promoEbookImage} 
                  alt="Digital tablet displaying cybersecurity dashboards" 
                  className="w-full h-full object-cover md:absolute md:inset-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHAT OUR READERS SAY (TESTIMONIALS) */}
      <section className="pt-24 pb-12 bg-white border-t border-slate-100 overflow-hidden flex flex-col">
        <div className="w-full max-w-3xl mx-auto px-4 md:px-8 mb-12 flex flex-col items-center text-center gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-medium text-slate-900 tracking-tighter mb-4">
              Trusted by Security Leaders
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              Top cybersecurity engineers, blue team operators, and researchers rely on CyberRoot.
            </p>
          </div>
          
          {/* Dots Navigation */}
          <div className="flex gap-2 mt-2">
            {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${activeTestimonial === idx ? 'bg-indigo-600 w-8' : 'bg-slate-200 hover:bg-slate-300'}`}
                aria-label={`Go to testimonial slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="w-full max-w-[95%] xl:max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, slideIndex) => (
                <div key={slideIndex} className="min-w-full w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-3 gap-6 px-2">
                  {testimonials.slice(slideIndex * 3, slideIndex * 3 + 3).map((test, idx) => (
                    <div key={idx} className="bg-[#FAFAFA] border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 rounded-[28px] p-8 md:p-10 flex flex-col justify-between h-full">
                      <div className="flex gap-1 text-[#E2A62B] mb-8">
                        {Array.from({ length: test.stars }).map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                      <h3 className="text-lg md:text-xl font-medium text-slate-900 leading-[1.6] tracking-tight mb-12">
                        "{test.quote}"
                      </h3>
                      <div className="flex items-center gap-4 mt-auto">
                        <img src={test.avatar} alt={test.name} className="w-12 h-12 rounded-full border border-slate-200" />
                        <div className="text-left">
                          <div className="font-bold text-slate-900">{test.name}</div>
                          <div className="text-xs font-bold text-indigo-600 uppercase tracking-widest mt-1">{test.role}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. NEWSLETTER / STAY UPDATED */}
      <section className="pt-12 pb-24 bg-white flex flex-col items-center">
        <div className="w-full max-w-7xl px-6">
          <div className="bg-[#091224] rounded-[32px] p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 text-left shadow-2xl relative overflow-hidden">
            {/* Ambient inner glow for the card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            
            <div className="flex gap-5 items-start max-w-lg relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex-shrink-0 flex items-center justify-center text-white shadow-sm backdrop-blur-sm">
                <Mail className="w-6 h-6 stroke-[1.8]" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-white text-lg md:text-xl">Stay Updated</h3>
                <p className="text-sm text-slate-300 leading-relaxed font-medium">
                  Get the latest book releases, offers and cybersecurity insights straight to your inbox.
                </p>
              </div>
            </div>

            <div className="w-full md:w-auto flex flex-col gap-2.5 relative z-10">
              <form onSubmit={handleSubscribe} className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full sm:w-72 bg-[#091224]/50 border border-white/10 text-sm text-white placeholder-slate-500 rounded-xl px-5 py-4 outline-none focus:border-white/30 transition-colors"
                />
                <Button type="submit" variant="accent" className="py-4 px-8 text-sm font-bold uppercase tracking-wider whitespace-nowrap bg-indigo-600 hover:bg-indigo-500 text-white border-none shadow-lg shadow-indigo-600/20">
                  Subscribe
                </Button>
              </form>
              {subscribed && (
                <span className="text-sm text-emerald-400 font-semibold mt-2 block animate-fade-in">
                  ✓ Subscribed successfully! Thank you.
                </span>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
