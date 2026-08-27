import React, { useState } from 'react';
import { 
  Terminal, Key, Code, ShieldCheck, Lock, Copy, Check, RefreshCw 
} from 'lucide-react';
import { Button } from '../components/ui/Button';

export default function SecurityTools() {
  const [activeTab, setActiveTab] = useState('hash');
  
  // Base64 Tool State
  const [base64Input, setBase64Input] = useState('CyberRoot Webroot Threat Intelligence 2026');
  const [base64Output, setBase64Output] = useState('');
  const [copied, setCopied] = useState(false);

  // Simple Hash Simulation
  const [hashInput, setHashInput] = useState('WRSDF.sys_Kernel_Driver_Signature');
  
  const handleBase64Encode = () => {
    try {
      setBase64Output(btoa(base64Input));
    } catch {
      setBase64Output('Invalid Input for Base64 Encoding');
    }
  };

  const handleBase64Decode = () => {
    try {
      setBase64Output(atob(base64Input));
    } catch {
      setBase64Output('Error: String is not valid Base64 encoded text.');
    }
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-left font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* Hero Header */}
      <section className="bg-slate-950 py-16 text-white border-b border-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
            Field Engineer Toolbox
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight mt-4">
            Security Analyst Utility Suite
          </h1>
          <p className="text-slate-300 text-sm md:text-base mt-2 max-w-2xl leading-relaxed">
            Client-side interactive tools for payload de-obfuscation, YARA rule generation, and cryptographic hashing.
          </p>
        </div>
      </section>

      {/* Main Tool Interface */}
      <section className="py-12 flex-grow">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-8">
          
          {/* Tool Selector Tabs */}
          <div className="flex items-center gap-3 border-b border-slate-200 pb-4 overflow-x-auto">
            {[
              { id: 'hash', label: 'Payload Encoder & Decoder', icon: Code },
              { id: 'yara', label: 'YARA Rule Generator', icon: Terminal },
              { id: 'entropy', label: 'Memory Entropy Estimator', icon: Lock }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs font-bold transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-emerald-400' : 'text-slate-500'}`} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Active Tool View */}
          {activeTab === 'hash' && (
            <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col gap-6">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Code className="w-5 h-5 text-emerald-600" /> Base64 &amp; String Obfuscation Tool
              </h2>
              <p className="text-xs text-slate-500">
                Encode or decode suspicious script payloads, URL strings, and headers securely in client browser memory.
              </p>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-700 uppercase">Input Payload Text</label>
                <textarea 
                  rows={4}
                  value={base64Input}
                  onChange={(e) => setBase64Input(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs font-mono text-slate-800 outline-none focus:border-emerald-500 focus:bg-white transition-all"
                />
              </div>

              <div className="flex items-center gap-3">
                <Button onClick={handleBase64Encode} className="bg-slate-900 text-white text-xs font-bold px-5 py-2.5 rounded-xl">
                  Encode Base64
                </Button>
                <Button onClick={handleBase64Decode} className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-5 py-2.5 rounded-xl">
                  Decode Base64
                </Button>
              </div>

              {base64Output && (
                <div className="bg-slate-950 border border-slate-900 rounded-2xl p-4 font-mono text-xs text-emerald-400 relative">
                  <div className="flex justify-between items-center mb-2 pb-2 border-b border-slate-800 text-slate-400">
                    <span>Transformed Result</span>
                    <button 
                      onClick={() => handleCopy(base64Output)}
                      className="inline-flex items-center gap-1 text-[11px] text-emerald-400 hover:text-emerald-300"
                    >
                      {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      {copied ? 'Copied!' : 'Copy Result'}
                    </button>
                  </div>
                  <pre className="overflow-x-auto whitespace-pre-wrap">{base64Output}</pre>
                </div>
              )}
            </div>
          )}

          {activeTab === 'yara' && (
            <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col gap-6">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-emerald-600" /> Automated YARA Rule Template Generator
              </h2>
              <p className="text-xs text-slate-500">
                Generate operational YARA signatures for threat hunting and SOC incident response rule deployment.
              </p>

              <div className="bg-slate-950 border border-slate-900 rounded-2xl p-6 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto">
                <pre><code>{`rule Webroot_Polymorphic_Ransomware_Detector {
    meta:
        description = "Detects untrusted WRSDF.sys kernel driver bypass attempts"
        author = "CyberRoot Threat Research"
        date = "2026-02-26"
        hash = "7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069"

    strings:
        $s1 = "WRSDF.sys" ascii wide
        $s2 = "ZwTerminateProcess" ascii wide
        $s3 = "VSSADMIN delete shadows" ascii wide

    condition:
        uint16(0) == 0x5A4D and any of ($s*)
}`}</code></pre>
              </div>
            </div>
          )}

          {activeTab === 'entropy' && (
            <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col gap-6">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Lock className="w-5 h-5 text-emerald-600" /> Shannon Memory Entropy Estimator
              </h2>
              <p className="text-xs text-slate-500">
                High entropy values (&gt; 7.2) indicate packed or encrypted binary payloads typical of polymorphic ransomware.
              </p>
              
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 font-mono">
                Status: Memory Scanner Engine Ready. Webroot AMSI Guard active.
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
