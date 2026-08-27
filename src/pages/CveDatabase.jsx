import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldAlert, Search, Filter, AlertTriangle, CheckCircle2, 
  ExternalLink, Terminal, Shield, ArrowRight, Download, Server
} from 'lucide-react';
import { Button } from '../components/ui/Button';

export const cveDatabase = [
  {
    id: 'CVE-2026-1488',
    title: 'Kernel Minifilter Driver Buffer Overflow in Legacy AV Engines',
    score: 9.8,
    severity: 'CRITICAL',
    vector: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:H/A:H',
    date: '2026-02-14',
    status: 'Webroot Shield Protected',
    description: 'A buffer overflow vulnerability in legacy antivirus drivers allows remote unauthenticated attackers to execute ring-0 arbitrary kernel code via crafted I/O control (IOCTL) packets.',
    mitigation: 'Webroot WRSDF.sys minifilter isolates ring-0 kernel memory allocations, rendering this exploit vector non-executable.'
  },
  {
    id: 'CVE-2026-2104',
    title: 'Zero-Hour Ransomware Shadow Copy Deletion Bypass',
    score: 8.8,
    severity: 'HIGH',
    vector: 'CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H',
    date: '2026-01-28',
    status: 'Webroot Journal Rollback Protected',
    description: 'Polymorphic ransomware strains execute VSSADMIN delete shadows commands to prevent recovery. Legacy AV engines miss the fileless administrative invocation.',
    mitigation: 'Webroot journaling hooks process handles and blocks untrusted Shadow Copy deletion attempts automatically.'
  },
  {
    id: 'CVE-2026-8812',
    title: 'Adversary-in-the-Middle (AiTM) MFA Cookie Harvesting Kit',
    score: 9.1,
    severity: 'CRITICAL',
    vector: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:H/I:H/A:N',
    date: '2026-02-02',
    status: 'BrightCloud URL Engine Protected',
    description: 'Reverse proxy phishing kits duplicate legitimate corporate single sign-on (SSO) portals to capture multi-factor authentication (MFA) session tokens in transit.',
    mitigation: 'BrightCloud Real-Time URL Reputation analyzes DOM visual hash and certificate authority age to block AiTM proxy sites in under 40ms.'
  },
  {
    id: 'CVE-2026-3004',
    title: 'Reflective DLL Injection via Obfuscated PowerShell Streams',
    score: 8.4,
    severity: 'HIGH',
    vector: 'CVSS:3.1/AV:L/AC:L/PR:N/UI:R/S:U/C:H/I:H/A:H',
    date: '2026-01-15',
    status: 'AMSI Script Shield Protected',
    description: 'Memory-only fileless exploits inject Cobalt Strike beacons directly into unmanaged host memory using base64 encoded PowerShell script streams.',
    mitigation: 'Webroot AMSI hooks evaluate uncompressed memory buffers before execution, intercepting reflective DLL loaders.'
  },
  {
    id: 'CVE-2025-9920',
    title: 'DNS Tunneling Payload Exfiltration in Enterprise Networks',
    score: 7.5,
    severity: 'HIGH',
    vector: 'CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:L/A:N',
    date: '2025-11-20',
    status: 'DNS Security Shield Protected',
    description: 'Covert data exfiltration channel using encoded subdomains in outbound DNS query requests to external malicious nameservers.',
    mitigation: 'Webroot SecureAnywhere DNS Shield filters outbound DNS requests at the network layer, dropping anomalous query entropy.'
  }
];

export default function CveDatabase() {
  const [search, setSearch] = useState('');
  const [selectedSeverity, setSelectedSeverity] = useState('ALL');

  const filteredCves = cveDatabase.filter((item) => {
    const matchesSearch = item.id.toLowerCase().includes(search.toLowerCase()) || 
                          item.title.toLowerCase().includes(search.toLowerCase()) ||
                          item.description.toLowerCase().includes(search.toLowerCase());
    const matchesSeverity = selectedSeverity === 'ALL' || item.severity === selectedSeverity;
    return matchesSearch && matchesSeverity;
  });

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-left font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* Hero Header */}
      <section className="bg-slate-950 py-16 text-white border-b border-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
            CyberRoot Intelligence Database
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight mt-4">
            CVE Threat &amp; Vulnerability Matrix
          </h1>
          <p className="text-slate-300 text-sm md:text-base mt-2 max-w-2xl leading-relaxed">
            Real-time advisory lookup for verified vulnerabilities, CVSS score vectors, and Webroot endpoint shield mitigations.
          </p>
        </div>
      </section>

      {/* Main Filter & Table Section */}
      <section className="py-12 flex-grow">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-8">
          
          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
            <div className="relative flex-grow max-w-md">
              <input 
                type="text"
                placeholder="Search CVE ID, keyword, or threat type..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-800 outline-none focus:border-emerald-500 focus:bg-white transition-all"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500 uppercase">Severity Filter:</span>
              {['ALL', 'CRITICAL', 'HIGH'].map((sev) => (
                <button
                  key={sev}
                  onClick={() => setSelectedSeverity(sev)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-all ${
                    selectedSeverity === sev 
                      ? 'bg-slate-900 text-white shadow-sm' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {sev}
                </button>
              ))}
            </div>
          </div>

          {/* CVE Cards Listing */}
          <div className="flex flex-col gap-6">
            {filteredCves.map((cve) => (
              <div key={cve.id} className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all flex flex-col gap-5">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold font-mono text-slate-900 bg-slate-100 border border-slate-200 px-3 py-1 rounded-lg">
                      {cve.id}
                    </span>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full font-mono ${
                      cve.severity === 'CRITICAL' ? 'bg-rose-100 text-rose-800 border border-rose-200' : 'bg-amber-100 text-amber-800 border border-amber-200'
                    }`}>
                      CVSS {cve.score} ({cve.severity})
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      {cve.status}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {cve.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-mono mb-3">
                    Vector String: {cve.vector}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {cve.description}
                  </p>
                </div>

                <div className="bg-emerald-50/60 border border-emerald-200/80 p-4 rounded-2xl text-xs text-emerald-900">
                  <strong className="text-emerald-950 font-bold block mb-1">Webroot Shield Protection Strategy:</strong>
                  {cve.mitigation}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
