import React from 'react';
import { Link } from 'react-router-dom';

export function CyberRootLogo({ size = 'md', className = '' }) {
  const sizeClasses = {
    sm: { icon: 'w-7 h-7', text: 'text-lg', badge: 'w-7 h-7' },
    md: { icon: 'w-9 h-9', text: 'text-xl', badge: 'w-9 h-9' },
    lg: { icon: 'w-11 h-11', text: 'text-2xl', badge: 'w-11 h-11' },
  };

  const currentSize = sizeClasses[size] || sizeClasses.md;

  return (
    <Link to="/" className={`flex items-center gap-3 group shrink-0 whitespace-nowrap z-10 ${className}`}>
      {/* Modern Cyber Shield Icon Badge */}
      <div className={`relative flex items-center justify-center rounded-xl bg-slate-950 border border-emerald-500/40 group-hover:border-emerald-400/80 transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.2)] overflow-hidden ${currentSize.badge}`}>
        {/* Soft Ambient Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-cyan-500/20 group-hover:opacity-100 transition-opacity" />
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-400/30 rounded-full blur-sm" />
        
        {/* Precision Cyber Shield & Core Node SVG */}
        <svg 
          viewBox="0 0 32 32" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 relative z-10 text-emerald-400 group-hover:scale-110 transition-transform duration-300"
        >
          {/* Outer Shield Outline */}
          <path 
            d="M16 3L27 7V15C27 21.8 22.3 27.9 16 30C9.7 27.9 5 21.8 5 15V7L16 3Z" 
            stroke="url(#cyber-logo-grad)" 
            strokeWidth="2.2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="drop-shadow-[0_0_6px_rgba(16,185,129,0.5)]"
          />
          {/* Inner Node Circuit Lines */}
          <path 
            d="M16 8V12M16 20V24M10 16H12M20 16H22" 
            stroke="#34D399" 
            strokeWidth="1.6" 
            strokeLinecap="round"
          />
          {/* Central Glowing Power Core */}
          <circle cx="16" cy="16" r="3.2" fill="#34D399" className="animate-pulse" />
          
          <defs>
            <linearGradient id="cyber-logo-grad" x1="5" y1="3" x2="27" y2="30" gradientUnits="userSpaceOnUse">
              <stop stopColor="#34D399" />
              <stop offset="0.5" stopColor="#2DD4BF" />
              <stop offset="1" stopColor="#22D3EE" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Typography */}
      <span className={`font-display font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors whitespace-nowrap ${currentSize.text}`}>
        Cyber<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Root</span>
      </span>
    </Link>
  );
}
