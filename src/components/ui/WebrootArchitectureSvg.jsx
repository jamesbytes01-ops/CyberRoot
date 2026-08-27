import React from 'react';

export const WebrootArchitectureSvg = () => {
  // 10 Webroot Security Modules in a radial layout floating directly on screen
  const modules = [
    { id: 1, name: 'Threat Cloud', icon: 'cloud', bg: '#0284C7', x: 450, y: 60 },
    { id: 2, name: 'Endpoint Security', icon: 'shield', bg: '#16A34A', x: 660, y: 100 },
    { id: 3, name: 'Phishing Shield', icon: 'phishing', bg: '#4F46E5', x: 755, y: 210 },
    { id: 4, name: 'Identity Protection', icon: 'identity', bg: '#9333EA', x: 755, y: 350 },
    { id: 5, name: 'DNS Security', icon: 'dns', bg: '#0D9488', x: 660, y: 460 },
    { id: 6, name: 'File Rollback', icon: 'rollback', bg: '#059669', x: 450, y: 500 },
    { id: 7, name: 'Zero-Day Sandbox', icon: 'sandbox', bg: '#D97706', x: 240, y: 460 },
    { id: 8, name: 'Behavioral Monitor', icon: 'behavior', bg: '#E11D48', x: 145, y: 350 },
    { id: 9, name: 'Firewall Guard', icon: 'firewall', bg: '#DC2626', x: 145, y: 210 },
    { id: 10, name: 'EDR Analytics', icon: 'edr', bg: '#7C3AED', x: 240, y: 100 }
  ];

  const renderIcon = (type) => {
    switch (type) {
      case 'cloud':
        return (
          <path
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3-3m0 0l3 3m-3-3v8"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        );
      case 'shield':
        return (
          <path
            d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        );
      case 'phishing':
        return (
          <path
            d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3-3.5 3.5z"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        );
      case 'identity':
        return (
          <path
            d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        );
      case 'dns':
        return (
          <path
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        );
      case 'rollback':
        return (
          <path
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        );
      case 'sandbox':
        return (
          <path
            d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        );
      case 'behavior':
        return (
          <path
            d="M13 10V3L4 14h7v7l9-11h-7z"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        );
      case 'firewall':
        return (
          <path
            d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 1-4 4-6 1.236 1.345 2.115 3.322 1.5 5.5.75-.75 1.5-1.5 1.5-3 1.5 1.5 2 3.333 1.657 5.157z"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        );
      case 'edr':
      default:
        return (
          <path
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        );
    }
  };

  const centerCX = 450;
  const centerCY = 280;

  return (
    <div className="w-full max-w-full overflow-visible relative select-none">
      <svg
        viewBox="0 0 900 560"
        className="w-full h-auto text-slate-800 font-sans overflow-visible"
        style={{ minHeight: '380px' }}
      >
        <defs>
          {/* Soft Drop Shadow filter for floating cards */}
          <filter id="cardFloatShadow" x="-20%" y="-20%" width="140%" height="150%">
            <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#0F172A" floodOpacity="0.09" />
          </filter>

          {/* Central Logo Gradient */}
          <linearGradient id="hubGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0EA5E9" />
            <stop offset="50%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>

          <linearGradient id="hubGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#818CF8" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* ================= CONNECTING DASHED LINES ================= */}
        {modules.map((m, index) => {
          const isHighlighted = index === 0;
          return (
            <line
              key={`line-${m.id}`}
              x1={centerCX}
              y1={centerCY}
              x2={m.x}
              y2={m.y}
              stroke={isHighlighted ? '#2563EB' : '#94A3B8'}
              strokeWidth={isHighlighted ? '2' : '1.5'}
              strokeDasharray={isHighlighted ? '4 4' : '3 4'}
              opacity={isHighlighted ? '0.9' : '0.6'}
            />
          );
        })}

        {/* Central Radial Dot Rings Floating on Screen */}
        <circle cx={centerCX} cy={centerCY} r="64" fill="none" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="2 6" opacity="0.75" />
        <circle cx={centerCX} cy={centerCY} r="84" fill="none" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3 8" opacity="0.4" />

        {/* ================= CENTRAL HUB LOGO ================= */}
        <g transform={`translate(${centerCX}, ${centerCY})`}>
          {/* Outer Ambient Glow */}
          <circle cx="0" cy="0" r="56" fill="url(#hubGlow)" />
          
          {/* Main Hub Body */}
          <circle cx="0" cy="0" r="44" fill="url(#hubGradient)" filter="url(#cardFloatShadow)" />
          <circle cx="0" cy="0" r="42" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.4" />

          {/* Webroot Central 3D Ribbon / Hexagon Logo */}
          <g transform="translate(-18, -18) scale(1.5)">
            <path
              d="M12 2L3 7v10l9 5 9-5V7l-9-5z"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M12 22V12m0 0L3 7m9 5l9-5"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="1.8"
              strokeLinejoin="round"
              strokeOpacity="0.7"
            />
            <circle cx="12" cy="12" r="3" fill="#FFFFFF" />
          </g>
        </g>

        {/* ================= SURROUNDING FLOATING PILL CARDS ================= */}
        {modules.map((m) => {
          // Card dimensions
          const cardW = 168;
          const cardH = 46;
          const cardX = m.x - cardW / 2;
          const cardY = m.y - cardH / 2;

          return (
            <g key={`node-${m.id}`} transform={`translate(${cardX}, ${cardY})`} filter="url(#cardFloatShadow)">
              {/* White Pill Container floating on screen */}
              <rect
                x="0"
                y="0"
                width={cardW}
                height={cardH}
                rx="23"
                fill="#FFFFFF"
                stroke="#E2E8F0"
                strokeWidth="1.2"
              />

              {/* Left Colored Icon Badge */}
              <rect
                x="6"
                y="6"
                width="34"
                height="34"
                rx="17"
                fill={m.bg}
              />
              <g transform="translate(11, 11) scale(0.65)">
                {renderIcon(m.icon)}
              </g>

              {/* Title Text */}
              <text
                x="48"
                y="27"
                fill="#0F172A"
                fontSize="12.5"
                fontWeight="700"
                letterSpacing="-0.1"
              >
                {m.name}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default WebrootArchitectureSvg;
