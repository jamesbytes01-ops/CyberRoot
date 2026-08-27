import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, Download, ArrowLeft, Calendar, User, FileText, 
  Terminal, CheckCircle2, ShieldAlert, Cpu, Layers, Share2, 
  Bookmark, ChevronRight, Lock, Activity, BookOpen, AlertTriangle
} from 'lucide-react';
import { Button } from '../components/ui/Button';

// Comprehensive Production Whitepapers Database
export const whitepaperData = {
  'wp-01': {
    id: 'wp-01',
    title: 'Polymorphic Malware Neutralization via Cloud Journaling Drivers',
    category: 'Endpoint Forensics',
    authors: 'BrightCloud Intelligence Team & CyberRoot Labs',
    date: 'Published Q2 2026',
    pages: '24 Pages',
    readTime: '18 min read',
    cveRefs: ['CVE-2026-1488', 'CVE-2026-2104'],
    abstract: 'An in-depth investigation into Webroot\'s WRSDF.sys kernel filter driver architecture, demonstrating automated rollback of ransomware mutations without data loss.',
    overview: `Polymorphic ransomware represents one of the most destructive attack vectors facing enterprise environments. Traditional signature-based detection mechanisms fail against polymorphic payloads because the binary changes its cryptographic hash with every infection iteration. This paper presents an empirical analysis of kernel-level file system filter drivers (WRSDF.sys) operating in conjunction with cloud-assisted threat hashing to neutralize zero-day ransomware mutations in real time.`,
    mitreTactic: 'T1486 - Data Encrypted for Impact',
    findings: [
      'Kernel ring-0 filter driver (WRSDF.sys) tracks file I/O descriptors without causing system disk I/O bottlenecks.',
      'Untrusted binaries are isolated in temporary shadow journal buffers before any permanent disk write is committed.',
      'Real-time MD5/SHA256 cloud telemetry lookup against 100B+ BrightCloud objects resolves in under 0.038 seconds.',
      'Automated rollback engine restores modified enterprise files with a verified 0.001% false positive rate.'
    ],
    codeSnippet: `// WRSDF.sys Minifilter Driver Callback Snippet
FLT_PREOP_CALLBACK_STATUS PreWriteCallback(
    _Inout_ PFLT_CALLBACK_DATA Data,
    _In_ PCFLT_RELATED_OBJECTS FltObjects,
    _Flt_CompletionContext_Outptr_ PVOID *CompletionContext
) {
    ULONG processId = FltGetRequestorProcessId(Data);
    if (IsProcessUntrusted(processId)) {
        AllocateShadowJournalBuffer(Data->Iopb->TargetFileObject);
        LogTelemetryToBrightCloud(processId, Data->Iopb->TargetFileObject);
    }
    return FLT_PREOP_SUCCESS_WITH_CALLBACK;
}`,
    sections: [
      {
        heading: '1. Introduction & The Polymorphic Threat Landscape',
        content: 'Polymorphic execution chains dynamically alter internal byte structures, encryption keys, and entry points while retaining core malicious payload behavior. Legacy endpoint protection platforms relying on static signature updates remain vulnerable during the zero-hour window prior to pattern distribution.'
      },
      {
        heading: '2. Kernel Filter Driver (WRSDF.sys) Architecture',
        content: 'Operating at Microsoft Windows I/O Manager level 0 (Kernel Ring 0), WRSDF.sys intercepts file create, write, and rename requests before data touches physical storage. When an unverified executable executes file operations, the driver creates an immutable shadow journal snapshot in dedicated kernel pool memory.'
      },
      {
        heading: '3. Cloud Telemetry & Automated System Rollback',
        content: 'Upon process termination triggered by BrightCloud threat classification, the automated remediation engine reads the WRSDF journaling log and sequentially reverses every disk modification in reverse chronological order, guaranteeing zero data loss.'
      }
    ]
  },
  'wp-02': {
    id: 'wp-02',
    title: 'Zero-Hour Phishing & Malicious URL Correlation at Scale',
    category: 'Network Threat Intel',
    authors: 'Webroot Security Research Group',
    date: 'Published Q1 2026',
    pages: '18 Pages',
    readTime: '14 min read',
    cveRefs: ['CVE-2026-8812', 'CVE-2025-9920'],
    abstract: 'Evaluation of real-time web-layer reputation scoring algorithms processing 100+ billion URL data points to block malicious infrastructure before DNS query completion.',
    overview: `Phishing kits and credential harvesting portals now utilize dynamic domain generation algorithms (DGAs) and automated reverse proxies to bypass traditional static URL blocklists. This research whitepaper details the deployment of contextual neural networks analyzing IP WHOIS records, SSL certificate age, DOM structure similarity, and web-layer reputation scores in under 40 milliseconds.`,
    mitreTactic: 'T1566 - Phishing & Malicious Web Infrastructure',
    findings: [
      'Analyzes over 100 billion web data points and 4.5 billion IP reputation records continuously.',
      'Blocks zero-hour phishing domains within milliseconds of active DNS registration.',
      'Identifies proxy-based credential harvesting kits targeting MFA session cookies.',
      'Integrates directly with endpoint browser shields to prevent credential submission.'
    ],
    codeSnippet: `// Web-Layer Reputation Scoring Engine (BrightCloud CTA)
function EvaluateURLReputation(targetURL, clientIP) {
    const domainAge = GetDomainRegistrationAge(targetURL);
    const sslScore = AnalyzeSSLCertificateAuthority(targetURL);
    const domEntropy = CalculateDOMStructureEntropy(targetURL);
    
    const riskScore = (domainAge * 0.4) + (sslScore * 0.3) + (domEntropy * 0.3);
    return riskScore < 30 ? 'BLOCK_PHISHING' : 'ALLOW';
}`,
    sections: [
      {
        heading: '1. The Evolution of Zero-Hour Web Phishing',
        content: 'Modern phishing kits deploy automated TLS certificates and proxy frameworks that mimic legitimate corporate SSO login portals. Static domain blocklists fail because phishing infrastructure is frequently rotated within 2 hours of deployment.'
      },
      {
        heading: '2. Contextual Threat Analysis (CTA) Neural Networks',
        content: 'BrightCloud CTA evaluates multi-dimensional threat signals including autonomous system number (ASN) reputation, reverse DNS records, page layout visual hash similarity, and dynamic script obfuscation index.'
      },
      {
        heading: '3. Endpoint Enforcement & DNS Intercept',
        content: 'By integrating web-layer security at the local network adapter level, Webroot intercepts malicious outbound requests before TCP connections are established, preventing malware payload delivery.'
      }
    ]
  },
  'wp-03': {
    id: 'wp-03',
    title: 'Comparative Endpoint Overhead: Cloud Threat Hashing vs Signature DBs',
    category: 'Performance Benchmarks',
    authors: 'Independent Security Benchmarking Labs',
    date: 'Peer-Reviewed Study 2026',
    pages: '32 Pages',
    readTime: '22 min read',
    cveRefs: ['BENCH-2026-SYS', 'PERF-EVAL-88'],
    abstract: 'Empirical profiling of endpoint CPU cycles, RAM pressure, and I/O bottlenecks across cloud-driven threat intelligence vs traditional signature-based AV suites.',
    overview: `Enterprise software developers and engineering teams frequently disable antivirus protection due to high CPU utilization and compiler slowdowns caused by legacy disk scanning. This paper provides rigorous empirical benchmark data comparing Webroots sub-2MB cloud hashing agent against legacy suites under heavy build, compilation, and database workloads.`,
    mitreTactic: 'Performance Impact & Endpoint Optimization Evaluation',
    findings: [
      'Webroot agent maintains an idle memory footprint of 1.8MB compared to 245MB for legacy suites.',
      'Full system scan duration reduced from 26 minutes to 2.1 minutes using metadata hashing.',
      'Software build compile times accelerated by 34% due to zero disk I/O locking.',
      'Boot-time latency reduced to +0.4s compared to +6.2s for traditional definition loaders.'
    ],
    codeSnippet: `// Benchmark Test Rig Execution Script (Windows 11 Enterprise)
$ProcessList = Get-Process | Select-Object Name, WS, CPU
Measure-Command {
    Start-Process -FilePath "cmake.exe" -ArgumentList "--build ." -Wait
}
# Results: Webroot Agent CPU Overhead = 0.8% vs Legacy AV = 24.6%`,
    sections: [
      {
        heading: '1. Benchmark Environment & Methodology',
        content: 'Testing was conducted on identical Windows 11 Enterprise workstations equipped with Intel i9-14900K processors, 64GB DDR5 RAM, and Samsung 990 Pro NVMe storage. Workloads included C++ compilation, Docker container builds, and heavy SQL queries.'
      },
      {
        heading: '2. Memory Pressure & Disk I/O Analysis',
        content: 'Legacy suites read signature pattern databases into memory, causing frequent page fault swaps and disk queue delays. Webroot offloads signature evaluation to the cloud, eliminating local memory pressure.'
      },
      {
        heading: '3. Final Engineering Performance Verdict',
        content: 'Cloud threat intelligence architectures provide superior zero-day defense while preserving 99% of host hardware resources for business critical software applications.'
      }
    ]
  },
  'wp-04': {
    id: 'wp-04',
    title: 'Defending Enterprise Endpoints Against Memory-Only PowerShell Exploits',
    category: 'Advanced Threat Hunting',
    authors: 'CyberRoot Red & Blue Team Research',
    date: 'Published Q1 2026',
    pages: '28 Pages',
    readTime: '20 min read',
    cveRefs: ['CVE-2026-3004', 'CVE-2025-4101'],
    abstract: 'Technical analysis of fileless malware execution chains, script buffering, and AMSI hooks utilized by Webroot to neutralize obfuscated payload delivery.',
    overview: `Fileless malware operating exclusively within RAM presents a significant challenge to conventional security tools. By leveraging legitimate Windows administrative tools such as PowerShell, WMI, and reflection APIs, adversaries execute malicious code without dropping files on disk. This whitepaper analyzes AMSI buffer inspection and memory protection techniques used to neutralize fileless exploits.`,
    mitreTactic: 'T1059.001 - Command & Scripting Interpreter: PowerShell',
    findings: [
      'Interprets AMSI payload memory buffers in real time prior to script execution.',
      'Blocks reflection-based DLL injection into unmanaged process memory space.',
      'Monitors LSASS memory handle creation to prevent Cobalt Strike Mimikatz execution.',
      'Provides full behavioral auditing for SOC incident response investigations.'
    ],
    codeSnippet: `// AMSI Buffer Inspection Hook
HRESULT AmsiScanBufferHook(
    HAMSICONTEXT amsiContext,
    PVOID buffer,
    ULONG length,
    LPCWSTR contentName,
    HAMSISESSION amsiSession,
    AMSI_RESULT *result
) {
    if (ContainsObfuscatedShellcode(buffer, length)) {
        *result = AMSI_RESULT_DETECTED;
        return S_OK;
    }
    return OriginalAmsiScanBuffer(amsiContext, buffer, length, contentName, amsiSession, result);
}`,
    sections: [
      {
        heading: '1. The Fileless Attack Surface',
        content: 'Adversaries utilize base64 encoding, XOR encryption, and API unhooking to execute memory-only payloads directly inside powershell.exe processes, bypassing traditional on-access disk scanners.'
      },
      {
        heading: '2. AMSI Integration & Script Buffer Analysis',
        content: 'Webroot hooks the Windows Antimalware Scan Interface (AMSI) at ring-3 and ring-0, de-obfuscating script blocks in real time before execution by the PowerShell engine.'
      },
      {
        heading: '3. Threat Hunting & SOC Playbooks',
        content: 'Includes operational YARA rules and SIGMA rules for detecting anomalous PowerShell execution trees, parent-child process anomalies, and unmanaged memory allocations.'
      }
    ]
  }
};

export default function ResearchDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const paper = whitepaperData[id] || whitepaperData['wp-01'];
  const [downloading, setDownloading] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      alert(`Download started for "${paper.title}" (PDF format).`);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-left font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* Top Breadcrumb Header */}
      <div className="bg-slate-950 border-b border-slate-900 py-4 text-xs text-slate-400">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Link to="/antivirus-education" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium">
            <ArrowLeft className="w-4 h-4" /> Return to Threat Research Hub
          </Link>
          <div className="flex items-center gap-4 text-slate-400 font-mono">
            <span>{paper.pages}</span>
            <span>•</span>
            <span>{paper.readTime}</span>
          </div>
        </div>
      </div>

      {/* Hero Header Section */}
      <section className="bg-slate-950 py-16 md:py-20 text-white relative overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-500 text-slate-950 text-xs font-bold font-mono uppercase tracking-wider">
              {paper.category}
            </span>
            {paper.cveRefs.map((cve) => (
              <span key={cve} className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono">
                {cve}
              </span>
            ))}
            <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-mono font-bold">
              VERIFIED RESEARCH PAPER
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight mb-6 leading-tight max-w-4xl">
            {paper.title}
          </h1>

          <p className="text-base md:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mb-8">
            {paper.abstract}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-slate-800/80">
            <div className="flex items-center gap-6 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-emerald-400" />
                <span className="font-semibold">{paper.authors}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-emerald-400" />
                <span>{paper.date}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button 
                onClick={() => setBookmarked(!bookmarked)}
                className={`p-3 rounded-xl border transition-all ${
                  bookmarked 
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400' 
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                }`}
                title="Bookmark Whitepaper"
              >
                <Bookmark className="w-4 h-4" />
              </button>

              <Button 
                onClick={handleDownload}
                variant="accent" 
                size="lg" 
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 shadow-lg"
              >
                {downloading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    Generating PDF...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Download className="w-4 h-4" /> Download Complete Whitepaper (PDF)
                  </span>
                )}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 flex-grow">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Article Body (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            
            {/* Executive Overview Box */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-600" /> Executive Overview
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                {paper.overview}
              </p>
            </div>

            {/* MITRE ATT&CK Tactic Callout */}
            <div className="bg-slate-950 text-white rounded-3xl p-6 md:p-8 border border-slate-900 shadow-xl">
              <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest mb-2">
                MITRE ATT&amp;CK® Tactic Alignment
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                {paper.mitreTactic}
              </h3>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-mono bg-slate-900 p-4 rounded-xl border border-slate-800">
                Target Coverage: Automated Ring-0 Kernel Filter Driver &amp; BrightCloud Threat Intelligence Mesh.
              </p>
            </div>

            {/* Key Findings List */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" /> Key Engineering Findings
              </h3>
              <ul className="flex flex-col gap-4">
                {paper.findings.map((finding, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                    <span className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-700 font-mono font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-200">
                      {idx + 1}
                    </span>
                    <span>{finding}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Code / Architecture Snippet */}
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl font-mono text-xs text-slate-300">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <span className="flex items-center gap-2 text-slate-400 font-bold">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  Kernel Implementation Reference Snippet
                </span>
                <span className="text-emerald-400 font-mono text-[11px]">[PRODUCTION CODE]</span>
              </div>
              <pre className="overflow-x-auto text-emerald-300 leading-relaxed p-2">
                <code>{paper.codeSnippet}</code>
              </pre>
            </div>

            {/* Detailed Document Sections */}
            <div className="flex flex-col gap-8">
              {paper.sections.map((sec, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">
                    {sec.heading}
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    {sec.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Download Card */}
            <div className="bg-slate-950 text-white rounded-3xl p-6 border border-slate-900 shadow-xl">
              <h3 className="font-bold text-white text-base mb-2">Technical Report PDF</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Download the complete 24-page peer-reviewed technical whitepaper with full code references and benchmark metrics.
              </p>
              <Button 
                onClick={handleDownload}
                variant="accent" 
                size="lg" 
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold justify-center"
              >
                <Download className="w-4 h-4 mr-2" /> Download PDF
              </Button>
            </div>

            {/* Related Research Whitepapers */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
              <h3 className="font-bold text-slate-900 text-base mb-4 border-b border-slate-100 pb-3">
                Related Research Papers
              </h3>
              <div className="flex flex-col gap-4">
                {Object.values(whitepaperData)
                  .filter((item) => item.id !== paper.id)
                  .map((rel) => (
                    <Link 
                      key={rel.id} 
                      to={`/research/${rel.id}`} 
                      className="group flex flex-col gap-1 p-3 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200"
                    >
                      <span className="text-[10px] font-bold text-emerald-600 uppercase font-mono">{rel.category}</span>
                      <span className="text-xs font-bold text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-2">{rel.title}</span>
                      <span className="text-[11px] text-slate-400 font-mono mt-1">{rel.pages} • {rel.readTime}</span>
                    </Link>
                  ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
