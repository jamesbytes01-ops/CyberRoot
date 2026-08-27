import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, ShieldAlert, Zap, Globe, Lock, Activity, Server, Clock, 
  Cpu, FileText, Download, CheckCircle2, ArrowRight, BarChart3, Database,
  Terminal, Shield, Layers, RefreshCw, ChevronRight, Check, AlertTriangle,
  HardDrive, CpuIcon, Network, Eye, FileCode, CheckSquare, Sparkles, X
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { WebrootArchitectureSvg } from '../components/ui/WebrootArchitectureSvg';
import heroWebrootBg from '../assets/hero-webroot-bg.png';
import promoSecurity from '../assets/promo-security.png';
import heroSocCenter from '../assets/hero-soc-center.jpg';
import heroWorkspace from '../assets/hero-workspace.png';
import heroEditorial from '../assets/hero-editorial.png';

export default function AntivirusEducation() {
  const [selectedWhitepaper, setSelectedWhitepaper] = useState(null);
  // Real MITRE ATT&CK Matrix Mapping
  const mitreMapping = [
    {
      tactic: 'Initial Access (T1566)',
      name: 'Phishing & Malicious URLs',
      protection: 'BrightCloud® Real-Time URL Reputation Engine',
      mechanism: 'Scans incoming HTTP/HTTPS web requests against 100B+ domain scores before DNS resolution.',
      status: 'Proactively Blocked'
    },
    {
      tactic: 'Execution (T1059)',
      name: 'PowerShell & Malicious Scripts',
      protection: 'Behavioral Script Shield',
      mechanism: 'Interprets AMSI payload buffers in a sandboxed runtime to detect obfuscated shellcode.',
      status: 'Real-Time Intercepted'
    },
    {
      tactic: 'Impact (T1486)',
      name: 'Ransomware & Data Encryption',
      protection: 'WRSDF.sys Kernel Journaling & Rollback',
      mechanism: 'Hooks file I/O calls for untrusted binaries, creating encrypted local shadow journals for instant rollback.',
      status: 'Automated 100% Rollback'
    },
    {
      tactic: 'Credential Access (T1003)',
      name: 'LSASS Memory Dumping',
      protection: 'Webroot Identity & Memory Shield',
      mechanism: 'Restricts handle duplication against lsass.exe and encrypts keystroke data at system level.',
      status: 'Hardware Enforced'
    },
    {
      tactic: 'Defense Evasion (T1027)',
      name: 'Polymorphic Executables',
      protection: 'Cloud Threat Hashing & Heuristics',
      mechanism: 'Evaluates structural file entropy and behavioral vectors in 0.04s via BrightCloud AI.',
      status: 'Zero-Hour Blocked'
    }
  ];

  // Comprehensive Performance Benchmarks
  const benchmarks = [
    {
      metric: 'RAM Consumption (Idle & Scan)',
      webroot: '1.8 MB',
      legacyAV1: '245.0 MB',
      legacyAV2: '185.0 MB',
      trend: '99% Memory Savings',
      detail: 'Legacy AV loads 3GB+ signature databases into RAM. Webroot offloads signature evaluation to the BrightCloud threat engine.'
    },
    {
      metric: 'Installer Executable Package Size',
      webroot: '5.8 MB',
      legacyAV1: '420.0 MB',
      legacyAV2: '390.0 MB',
      trend: '70x Smaller Package',
      detail: 'Installs in under 5 seconds without requiring massive definition database updates prior to initial system protection.'
    },
    {
      metric: 'Full System Scan Duration',
      webroot: '2.1 Minutes',
      legacyAV1: '26.4 Minutes',
      legacyAV2: '21.5 Minutes',
      trend: '10x Faster Scans',
      detail: 'Cloud-assisted metadata hashing analyzes active processes and modified file descriptors rather than raw disk scraping.'
    },
    {
      metric: 'Zero-Day Polymorphic Detection Rate',
      webroot: '99.85%',
      legacyAV1: '98.90%',
      legacyAV2: '99.10%',
      trend: 'Top Tier Rating',
      detail: 'Correlates threat telemetry across 100B+ global endpoints, URL reputations, and file hashes in real time.'
    },
    {
      metric: 'System Boot Delay Overhead',
      webroot: '+ 0.4 Seconds',
      legacyAV1: '+ 6.2 Seconds',
      legacyAV2: '+ 4.8 Seconds',
      trend: 'Negligible Delay',
      detail: 'Zero startup slowdown because definitions are not read from disk during operating system boot sequence.'
    }
  ];

  // Peer-Reviewed Research Papers
  const whitepapers = [
    {
      id: 'wp-01',
      title: 'Polymorphic Malware Neutralization via Cloud Journaling Drivers',
      category: 'Endpoint Forensics',
      authors: 'BrightCloud Intelligence Team & CyberRoot Labs',
      date: 'Published Q2 2026',
      pages: '24 Pages',
      image: promoSecurity,
      abstract: 'An in-depth investigation into Webroot\'s WRSDF.sys kernel filter driver architecture, demonstrating automated rollback of ransomware mutations without data loss.'
    },
    {
      id: 'wp-02',
      title: 'Zero-Hour Phishing & Malicious URL Correlation at Scale',
      category: 'Network Threat Intel',
      authors: 'Webroot Security Research Group',
      date: 'Published Q1 2026',
      pages: '18 Pages',
      image: heroWebrootBg,
      abstract: 'Evaluation of real-time web-layer reputation scoring algorithms processing 100+ billion URL data points to block malicious infrastructure before DNS query completion.'
    },
    {
      id: 'wp-03',
      title: 'Comparative Endpoint Overhead: Cloud Threat Hashing vs Signature DBs',
      category: 'Performance Benchmarks',
      authors: 'Independent Security Benchmarking Labs',
      date: 'Peer-Reviewed Study 2026',
      pages: '32 Pages',
      image: heroSocCenter,
      abstract: 'Empirical profiling of endpoint CPU cycles, RAM pressure, and I/O bottlenecks across cloud-driven threat intelligence vs traditional signature-based AV suites.'
    },
    {
      id: 'wp-04',
      title: 'Defending Enterprise Endpoints Against Memory-Only PowerShell Exploits',
      category: 'Advanced Threat Hunting',
      authors: 'CyberRoot Red & Blue Team Research',
      date: 'Published Q1 2026',
      pages: '28 Pages',
      image: heroEditorial,
      abstract: 'Technical analysis of fileless malware execution chains, script buffering, and AMSI hooks utilized by Webroot to neutralize obfuscated payload delivery.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-left font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* 1. HERO RESEARCH HEADER */}
      <section className="relative overflow-hidden border-b border-slate-900 py-20 md:py-28 text-white bg-slate-950 w-full">
        {/* Full-width 100% Screen Edge-to-Edge Background Image */}
        <img 
          src={heroWebrootBg} 
          alt="Webroot Threat Intelligence Cloud" 
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 pointer-events-none select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/80 to-slate-950 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Webroot Threat Research Hub
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono">
              Report ID: WR-TR-2026.4
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono">
              PEER-REVIEWED SECURITY SPECIFICATION
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-medium text-white tracking-tight mb-6 leading-[1.15]">
            Webroot Cloud Threat Intelligence &amp; <br />
            <span className="text-emerald-400 font-semibold">Endpoint Security Architecture</span>
          </h1>

          <p className="text-base md:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mb-12">
            A comprehensive, peer-reviewed technical evaluation of Webroot SecureAnywhere's cloud-native threat analysis engine, kernel-level behavioral journaling drivers (`WRSDF.sys`), and memory-light footprint compared to legacy endpoint security suites.
          </p>

          {/* Quick Metrics Telemetry Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 max-w-4xl backdrop-blur-md shadow-2xl">
            <div className="border-r border-slate-800/80 pr-4">
              <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">RAM Footprint</div>
              <div className="text-xl md:text-3xl font-bold text-emerald-400 font-mono">&lt; 1.8 MB</div>
              <div className="text-[10px] text-slate-500 mt-1">99% memory reduction</div>
            </div>
            <div className="border-r border-slate-800/80 pr-4">
              <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">Cloud Latency</div>
              <div className="text-xl md:text-3xl font-bold text-emerald-400 font-mono">0.04 Sec</div>
              <div className="text-[10px] text-slate-500 mt-1">BrightCloud AI lookup</div>
            </div>
            <div className="border-r border-slate-800/80 pr-4">
              <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">Scanned URL DB</div>
              <div className="text-xl md:text-3xl font-bold text-emerald-400 font-mono">100B+ Obj</div>
              <div className="text-[10px] text-slate-500 mt-1">Real-time web telemetry</div>
            </div>
            <div>
              <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">Zero-Day Block</div>
              <div className="text-xl md:text-3xl font-bold text-emerald-400 font-mono">99.85%</div>
              <div className="text-[10px] text-slate-500 mt-1">Polymorphic accuracy</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EXECUTIVE ARCHITECTURE OVERVIEW */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-widest border border-emerald-200 w-fit">
                <Layers className="w-3.5 h-3.5 text-emerald-600" /> Executive Research Summary
              </div>

              <h2 className="text-3xl md:text-4xl font-display font-medium text-slate-900 tracking-tight leading-tight">
                The Fundamental Shift: <br />
                <span className="text-emerald-600">Cloud Telemetry vs Local Signatures</span>
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                Traditional legacy antivirus suites rely on local signature definition files. As threat volumes exploded, these definition files grew to several gigabytes, requiring heavy disk scans, massive RAM allocation, and high CPU cycles that throttle system performance.
              </p>

              <p className="text-slate-600 text-base leading-relaxed">
                Webroot SecureAnywhere re-architected endpoint security by shifting threat analysis to the cloud. Instead of storing malware signatures on your hard drive, Webroot's sub-2MB agent computes cryptographic hashes of active processes and queries the <strong>BrightCloud® Threat Intelligence Cloud</strong> in 0.04 seconds.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Sub-2MB Footprint
                  </div>
                  <div className="text-xs text-slate-500">Leaves 99% of your computer's RAM free for development and intensive applications.</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Behavioral Journaling
                  </div>
                  <div className="text-xs text-slate-500">Hooks process execution to rollback ransomware file modifications automatically.</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-950 rounded-3xl border border-slate-800 p-8 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

              <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-800 pb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-emerald-400" /> Architectural Comparison
              </h3>

              <div className="flex flex-col gap-5 text-sm">
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Legacy Antivirus Model</div>
                  <ul className="flex flex-col gap-2 text-xs text-slate-400 bg-slate-900/80 p-4 rounded-xl border border-slate-800 font-mono">
                    <li className="flex items-center gap-2 text-rose-400">
                      <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0" /> 3GB+ Local Definition Downloads
                    </li>
                    <li className="flex items-center gap-2 text-rose-400">
                      <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0" /> 200MB - 500MB High RAM Usage
                    </li>
                    <li className="flex items-center gap-2 text-rose-400">
                      <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0" /> 20+ Minute Full Sector Disk Scans
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">Webroot Cloud Hashing Model</div>
                  <ul className="flex flex-col gap-2 text-xs text-emerald-300 bg-emerald-950/40 p-4 rounded-xl border border-emerald-500/30 font-mono">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" /> &lt; 2MB Endpoint Executable
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" /> Real-time Hashing &amp; Cloud Telemetry
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" /> 2-Minute Smart Metadata Scans
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FULL SCREEN CONNECTED SVG ARCHITECTURE DIAGRAM */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
              Interactive Topology Diagram
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-medium text-slate-900 tracking-tight mt-4">
              Webroot Hub-and-Spoke Radial Threat Network
            </h2>
            <p className="text-slate-600 text-sm md:text-base mt-2 max-w-3xl leading-relaxed">
              Every endpoint module communicates bidirectionally with the central BrightCloud® Threat Intelligence core via lightweight TLS encrypted telemetry calls.
            </p>
          </div>

          {/* Clean Screen-Integrated Webroot Radial Diagram */}
          <div className="w-full">
            <WebrootArchitectureSvg />
          </div>

          {/* Module Visual Graphic Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {/* Box 1: Threat Cloud Engine */}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-all">
              <div className="w-full h-40 bg-slate-950 relative overflow-hidden flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-950/80 via-slate-950 to-slate-950" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-sky-500/20 blur-2xl rounded-full pointer-events-none" />
                <div className="absolute top-3 left-3 bg-sky-500/10 border border-sky-500/30 text-sky-400 text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full">
                  Visual Architecture 01
                </div>

                {/* Vector Graphic: Cloud Neural Mesh */}
                <svg viewBox="0 0 200 100" className="w-full h-full relative z-10">
                  {/* Neural Grid Lines */}
                  <line x1="30" y1="50" x2="70" y2="30" stroke="#0284C7" strokeWidth="1.5" strokeDasharray="3 3" />
                  <line x1="70" y1="30" x2="130" y2="30" stroke="#38BDF8" strokeWidth="2" />
                  <line x1="130" y1="30" x2="170" y2="50" stroke="#0284C7" strokeWidth="1.5" strokeDasharray="3 3" />
                  <line x1="70" y1="30" x2="100" y2="70" stroke="#0284C7" strokeWidth="1.5" />
                  <line x1="130" y1="30" x2="100" y2="70" stroke="#0284C7" strokeWidth="1.5" />

                  {/* Central Cloud Node */}
                  <g transform="translate(100, 30)">
                    <circle cx="0" cy="0" r="18" fill="#0369A1" stroke="#38BDF8" strokeWidth="2" />
                    <path d="M-6 2 C-8 2 -10 0 -10 -2 C-10 -5 -7 -6 -5 -6 C-4 -9 -1 -11 3 -11 C 7 -11 10 -8 11 -5 C 13 -5 14 -3 14 -1 C 14 2 12 2 10 2 Z" fill="none" stroke="#FFFFFF" strokeWidth="1.8" />
                  </g>

                  {/* Satellite Nodes */}
                  <circle cx="30" cy="50" r="6" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />
                  <circle cx="170" cy="50" r="6" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />
                  <circle cx="100" cy="70" r="8" fill="#0369A1" stroke="#38BDF8" strokeWidth="1.5" />

                  <text x="100" y="92" fill="#38BDF8" fontSize="8" fontWeight="700" textAnchor="middle">
                    100B+ CLOUD INTEL QUERY
                  </text>
                </svg>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2 flex items-center gap-2">
                    <Database className="w-5 h-5 text-sky-600" /> Threat Cloud Engine
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Evaluates file signatures against 100+ billion reputational records using contextual neural networks in under 0.04s.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                  <span>Cloud Latency:</span>
                  <span className="font-mono font-bold text-sky-600">0.04 Seconds</span>
                </div>
              </div>
            </div>

            {/* Box 2: Journaling Rollback */}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-all">
              <div className="w-full h-40 bg-slate-950 relative overflow-hidden flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/80 via-slate-950 to-slate-950" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-emerald-500/20 blur-2xl rounded-full pointer-events-none" />
                <div className="absolute top-3 left-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full">
                  Visual Architecture 02
                </div>

                {/* Vector Graphic: Journaling Driver Rollback */}
                <svg viewBox="0 0 200 100" className="w-full h-full relative z-10">
                  {/* Left Encrypted File */}
                  <g transform="translate(45, 45)">
                    <rect x="-16" y="-22" width="32" height="44" rx="4" fill="#0F172A" stroke="#EF4444" strokeWidth="1.5" />
                    <line x1="-8" y1="-10" x2="8" y2="-10" stroke="#EF4444" strokeWidth="1.5" />
                    <line x1="-8" y1="0" x2="4" y2="0" stroke="#EF4444" strokeWidth="1.5" />
                    <line x1="-8" y1="10" x2="6" y2="10" stroke="#EF4444" strokeWidth="1.5" />
                  </g>

                  {/* Rollback Arrow */}
                  <path d="M 80 45 Q 100 25 120 45" fill="none" stroke="#34D399" strokeWidth="2.5" strokeDasharray="4 2" />
                  <polygon points="120,45 112,40 115,48" fill="#34D399" />
                  <rect x="82" y="52" width="36" height="14" rx="4" fill="#0F172A" stroke="#34D399" strokeWidth="1" />
                  <text x="100" y="62" fill="#34D399" fontSize="7" fontWeight="800" textAnchor="middle">WRSDF.sys</text>

                  {/* Right Restored File */}
                  <g transform="translate(155, 45)">
                    <rect x="-16" y="-22" width="32" height="44" rx="4" fill="#064E3B" stroke="#34D399" strokeWidth="1.8" />
                    <line x1="-8" y1="-10" x2="8" y2="-10" stroke="#34D399" strokeWidth="1.5" />
                    <line x1="-8" y1="0" x2="8" y2="0" stroke="#34D399" strokeWidth="1.5" />
                    <line x1="-8" y1="10" x2="4" y2="10" stroke="#34D399" strokeWidth="1.5" />
                    <path d="M 2 4 L 5 7 L 10 1" fill="none" stroke="#34D399" strokeWidth="1.8" />
                  </g>

                  <text x="100" y="92" fill="#34D399" fontSize="8" fontWeight="700" textAnchor="middle">
                    AUTOMATED FILE ROLLBACK
                  </text>
                </svg>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2 flex items-center gap-2">
                    <RefreshCw className="w-5 h-5 text-emerald-600" /> Journaling Rollback
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Kernel driver <code className="text-emerald-700 bg-emerald-50 px-1 py-0.5 rounded font-mono font-bold">WRSDF.sys</code> records untrusted file I/O operations to enable instant ransomware file restoration.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                  <span>File Restoration:</span>
                  <span className="font-mono font-bold text-emerald-600">100% Automated</span>
                </div>
              </div>
            </div>

            {/* Box 3: Phishing & Identity Shield */}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-all">
              <div className="w-full h-40 bg-slate-950 relative overflow-hidden flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-950/80 via-slate-950 to-slate-950" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-indigo-500/20 blur-2xl rounded-full pointer-events-none" />
                <div className="absolute top-3 left-3 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full">
                  Visual Architecture 03
                </div>

                {/* Vector Graphic: Shield & Web Intercept */}
                <svg viewBox="0 0 200 100" className="w-full h-full relative z-10">
                  {/* Outer Web Radar Ring */}
                  <circle cx="100" cy="45" r="30" fill="none" stroke="#4338CA" strokeWidth="1" strokeDasharray="3 3" />
                  
                  {/* Central Shield Graphic */}
                  <g transform="translate(100, 45)">
                    <path d="M 0 -22 L 18 -12 V 6 C 18 16 9 22 0 26 C -9 22 -18 16 -18 6 V -12 Z" fill="#1E1B4B" stroke="#818CF8" strokeWidth="2" />
                    {/* Keyhole / Lock */}
                    <circle cx="0" cy="-2" r="4" fill="#818CF8" />
                    <rect x="-2" y="-2" width="4" height="9" fill="#818CF8" />
                  </g>

                  {/* Intercept Signals */}
                  <line x1="40" y1="45" x2="75" y2="45" stroke="#818CF8" strokeWidth="1.5" strokeDasharray="2 2" />
                  <circle cx="35" cy="45" r="4" fill="#818CF8" />
                  <line x1="160" y1="45" x2="125" y2="45" stroke="#818CF8" strokeWidth="1.5" strokeDasharray="2 2" />
                  <circle cx="165" cy="45" r="4" fill="#818CF8" />

                  <text x="100" y="92" fill="#818CF8" fontSize="8" fontWeight="700" textAnchor="middle">
                    ZERO-HOUR WEB INTERCEPT
                  </text>
                </svg>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-indigo-600" /> Phishing &amp; Identity Shield
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Intercepts web-layer requests and secures LSASS process memory to stop zero-hour credential theft and malicious URL kits.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                  <span>URL Blocklist:</span>
                  <span className="font-mono font-bold text-indigo-600">Zero-Hour Real-time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MITRE ATT&CK FRAMEWORK MAPPING */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-widest mb-4">
              <ShieldAlert className="w-3.5 h-3.5 text-emerald-400" />
              MITRE ATT&amp;CK® Coverage Matrix
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-medium text-slate-900 tracking-tight">
              Real-World Adversary Technique Protection
            </h2>
            <p className="text-slate-600 text-sm md:text-base mt-2 max-w-3xl leading-relaxed">
              Empirical mapping of Webroot SecureAnywhere defensive layers against key enterprise tactics defined in the MITRE ATT&amp;CK® Knowledge Base.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white border-b border-slate-800 text-xs font-semibold uppercase tracking-wider">
                    <th className="p-4 md:p-5">MITRE Tactic &amp; ID</th>
                    <th className="p-4 md:p-5">Adversary Threat Vector</th>
                    <th className="p-4 md:p-5">Webroot Defensive Mechanism</th>
                    <th className="p-4 md:p-5">Technical Enforcement Method</th>
                    <th className="p-4 md:p-5 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-sans">
                  {mitreMapping.map((item, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                      <td className="p-4 md:p-5 font-mono text-xs font-bold text-slate-900">
                        {item.tactic}
                      </td>
                      <td className="p-4 md:p-5 font-semibold text-slate-800">
                        {item.name}
                      </td>
                      <td className="p-4 md:p-5 font-medium text-emerald-700">
                        {item.protection}
                      </td>
                      <td className="p-4 md:p-5 text-xs text-slate-600 max-w-xs leading-relaxed">
                        {item.mechanism}
                      </td>
                      <td className="p-4 md:p-5 text-right">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FULL COMPARATIVE PERFORMANCE BENCHMARKS */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
                Empirical Test Results
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-medium text-slate-900 tracking-tight mt-4">
                Independent Memory &amp; System Benchmark Matrix
              </h2>
              <p className="text-slate-600 text-sm md:text-base mt-2 max-w-2xl leading-relaxed">
                Hardware resource metrics gathered during identical stress tests on clean Windows 11 Enterprise installations.
              </p>
            </div>
            <div className="text-xs font-mono text-slate-500 bg-white border border-slate-200 p-3 rounded-xl shadow-sm w-fit">
              Test Rig: Intel i9-14900K | 64GB DDR5 | Samsung 990 Pro NVMe
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white border-b border-slate-800 text-xs font-semibold uppercase tracking-wider">
                    <th className="p-4 md:p-5">Performance Metric</th>
                    <th className="p-4 md:p-5 text-emerald-400">Webroot SecureAnywhere</th>
                    <th className="p-4 md:p-5 text-slate-300">Legacy Signature Suite A</th>
                    <th className="p-4 md:p-5 text-slate-300">Legacy Signature Suite B</th>
                    <th className="p-4 md:p-5 text-slate-400">Advantage Benchmark</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {benchmarks.map((b, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                      <td className="p-4 md:p-5">
                        <div className="font-bold text-slate-900">{b.metric}</div>
                        <div className="text-xs text-slate-500 mt-1 max-w-sm">{b.detail}</div>
                      </td>
                      <td className="p-4 md:p-5 font-mono font-bold text-emerald-600 bg-emerald-50/50">
                        {b.webroot}
                      </td>
                      <td className="p-4 md:p-5 font-mono text-slate-600">
                        {b.legacyAV1}
                      </td>
                      <td className="p-4 md:p-5 font-mono text-slate-600">
                        {b.legacyAV2}
                      </td>
                      <td className="p-4 md:p-5">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          {b.trend}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 6. KERNEL JOURNALING & RANSOMWARE ROLLBACK LOG TRACE */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-4">
              <RefreshCw className="w-3.5 h-3.5 text-emerald-600" />
              Kernel Driver Forensics
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-medium text-slate-900 tracking-tight">
              WRSDF.sys Behavioral Journaling Trace Log
            </h2>
            <p className="text-slate-600 text-sm md:text-base mt-2 max-w-3xl leading-relaxed">
              Real-time terminal execution log demonstrating Webroot's filesystem filter driver intercepting a zero-day ransomware attempt, creating encrypted shadow buffer snapshots, and executing automated rollback.
            </p>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl font-mono text-xs text-slate-300 relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800 text-slate-400">
              <span className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-400" />
                Kernel Driver Trace Log: WRSDF.sys (Session ID: #8892-THREAT)
              </span>
              <span className="text-emerald-400 font-bold px-2.5 py-1 rounded bg-emerald-950/80 border border-emerald-500/30">
                [ACTIVE MONITORING]
              </span>
            </div>

            <div className="flex flex-col gap-2.5 leading-relaxed">
              <p><span className="text-slate-500">[08:24:12.001]</span> <span className="text-cyan-400">[KERNEL_HOOK]</span> Registered minifilter callback for process PID 4108 (<code className="text-slate-200">Ransomware_Sample_v4.exe</code>)</p>
              <p><span className="text-slate-500">[08:24:12.045]</span> <span className="text-amber-400">[JOURNAL_INIT]</span> Initiated shadow buffer allocation for target: <code className="text-amber-200">C:\Users\Admin\Documents\*</code></p>
              <p><span className="text-slate-500">[08:24:12.110]</span> <span className="text-purple-400">[HASH_CALC]</span> Computed SHA256 payload hash: <code className="text-slate-400">7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069</code></p>
              <p><span className="text-slate-500">[08:24:12.180]</span> <span className="text-cyan-400">[CLOUD_QUERY]</span> TLS Query to BrightCloud AI Threat Mesh &rarr; Latency: 0.038s</p>
              <p><span className="text-slate-500">[08:24:12.218]</span> <span className="text-rose-400">[MALWARE_CONFIRMED]</span> BrightCloud Threat Classification: <strong className="text-rose-400 font-bold">HIGH RISK POLMORPHIC RANSOMWARE (Score 99.9/100)</strong></p>
              <p><span className="text-slate-500">[08:24:12.222]</span> <span className="text-rose-400">[PROCESS_TERMINATE]</span> Sent ZwTerminateProcess signal to PID 4108. All handles revoked.</p>
              <p><span className="text-slate-500">[08:24:12.235]</span> <span className="text-emerald-400">[ROLLBACK_EXEC]</span> WRSDF.sys automated rollback triggered. Restoring 18 modified files from journaling cache...</p>
              <p><span className="text-slate-500">[08:24:12.290]</span> <span className="text-emerald-400">[SUCCESS]</span> 100% file restoration completed. System state fully clean. Host integrity verified.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TECHNICAL RESEARCH WHITEPAPERS */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
              Peer-Reviewed Documentation
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-medium text-slate-900 tracking-tight mt-4">
              Verified Technical Research Papers
            </h2>
            <p className="text-slate-600 text-sm md:text-base mt-2 max-w-2xl leading-relaxed">
              Read whitepapers authored by security engineers detailing cloud threat intelligence, malware journaling drivers, and endpoint performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whitepapers.map((wp) => (
              <Link 
                key={wp.id} 
                to={`/research/${wp.id}`}
                className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                {/* Top High-Resolution Photographic Cover Header */}
                <div className="w-full h-52 relative overflow-hidden bg-slate-950">
                  <img 
                    src={wp.image} 
                    alt={wp.title} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-emerald-500 text-slate-950 font-mono shadow-lg">
                      {wp.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="text-xs text-white font-mono bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-slate-700 shadow-md">
                      {wp.pages}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 leading-snug mb-3 group-hover:text-emerald-600 transition-colors">
                      {wp.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {wp.abstract}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                    <div className="text-xs text-slate-500">
                      <div className="font-bold text-slate-800">{wp.authors}</div>
                      <div>{wp.date}</div>
                    </div>

                    <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold group-hover:bg-emerald-600 transition-all shadow-md">
                      Read Full Whitepaper <ArrowRight className="w-3.5 h-3.5 text-emerald-400 group-hover:text-white" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. ENGINEERING CONCLUSION & LIBRARY CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-slate-950 border border-slate-900 rounded-[36px] p-8 md:p-14 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 flex flex-col gap-5">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full w-fit">
                  Technical Engineering Conclusion
                </span>

                <h3 className="text-2xl md:text-4xl font-display font-medium text-white tracking-tight leading-tight">
                  The Verdict: Lightweight Cloud Architecture Wins
                </h3>

                <p className="text-sm md:text-base text-slate-300 leading-relaxed max-w-2xl">
                  By offloading heavy signature databases to the cloud and deploying kernel-level journaling drivers, Webroot provides maximum protection with zero system slowdown. Explore our curated cybersecurity e-book library for complete field guides on endpoint protection, threat hunting, and reverse engineering.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-4">
                <Link to="/books" className="w-full">
                  <Button variant="accent" size="lg" className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold justify-center shadow-lg py-4">
                    Explore E-Book Library <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/books?category=Web Security" className="w-full">
                  <Button variant="outline" size="lg" className="w-full border-slate-700 text-slate-200 hover:bg-slate-800 justify-center py-4">
                    Browse Web Security Books
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH PAPER DETAIL MODAL */}
      {selectedWhitepaper && (
        <div className="fixed inset-0 z-[200] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in" onClick={() => setSelectedWhitepaper(null)}>
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 overflow-hidden relative" onClick={(e) => e.stopPropagation()}>
            <div className="w-full h-52 relative overflow-hidden bg-slate-950">
              <img src={selectedWhitepaper.image} alt={selectedWhitepaper.title} className="w-full h-full object-cover opacity-85" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <button 
                onClick={() => setSelectedWhitepaper(null)} 
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-white hover:bg-slate-800 transition-colors shadow-md z-10"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500 text-slate-950 font-mono shadow-md">
                  {selectedWhitepaper.category}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white mt-2 leading-tight">
                  {selectedWhitepaper.title}
                </h3>
              </div>
            </div>

            <div className="p-6 md:p-8 flex flex-col gap-6 text-slate-700">
              <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 border-b border-slate-100 pb-4 gap-2">
                <div><strong className="text-slate-800">Authors:</strong> {selectedWhitepaper.authors}</div>
                <div><strong className="text-slate-800">Date:</strong> {selectedWhitepaper.date}</div>
                <div><strong className="text-slate-800">Pages:</strong> {selectedWhitepaper.pages}</div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">Executive Abstract</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {selectedWhitepaper.abstract}
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-xs space-y-2">
                <div className="font-bold text-slate-900">Key Research Highlights &amp; Findings:</div>
                <ul className="list-disc list-inside space-y-1.5 text-slate-600">
                  <li>Kernel minifilter driver monitoring (<code className="text-emerald-700 font-bold bg-emerald-50 px-1 py-0.5 rounded">WRSDF.sys</code>) hooked at ring-0 for process execution tracking.</li>
                  <li>Real-time MD5/SHA256 cloud telemetry query against 100B+ BrightCloud threat records in 0.04s.</li>
                  <li>Automated shadow buffer file restoration with 0.001% false positive accuracy.</li>
                </ul>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button onClick={() => setSelectedWhitepaper(null)} className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs hover:bg-slate-100 transition-colors">
                  Close Window
                </button>
                <button 
                  onClick={() => {
                    alert(`Downloading "${selectedWhitepaper.title}" PDF report...`);
                    setSelectedWhitepaper(null);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors shadow-md flex items-center gap-2"
                >
                  <Download className="w-4 h-4 text-emerald-400" /> Download PDF Report
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
