import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, ShieldCheck, User, ChevronDown } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Button } from '../ui/Button';

export function Navbar() {
  const { cartCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll detection for minimal shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/books?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const navLinks = [
    { to: '/books', label: 'E-Books' },
    { to: '/antivirus-education', label: 'Webroot Research' },
  ];

  const resources = [
    { to: '/antivirus-education', label: 'Webroot Security Hub' },
    { to: '/resources/faq', label: 'FAQ & Free Downloads' }
  ];

  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 z-[100] w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0a0a0a]/95 backdrop-blur-2xl shadow-lg shadow-black/20 border-b border-white/10 py-3' 
          : 'bg-[#0a0a0a] border-b border-transparent py-5'
      }`}
    >
      <div className="w-full max-w-[95%] xl:max-w-[1600px] mx-auto px-4 md:px-8 flex items-center justify-between relative">
        {/* Logo left */}
        <Link to="/" className="flex items-center gap-3 group shrink-0 whitespace-nowrap z-10">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-cyan-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:border-emerald-400/70 transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
            <ShieldCheck className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
          </div>
          <span className="text-xl font-display font-semibold tracking-tight text-white group-hover:text-emerald-400 transition-colors whitespace-nowrap">
            Cyber<span className="text-emerald-400">Root</span>
          </span>
        </Link>

        {/* Menu center - Desktop in exact center */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-10 whitespace-nowrap md:absolute md:left-1/2 md:-translate-x-1/2 z-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-white relative py-1 whitespace-nowrap ${
                  isActive 
                    ? 'text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-emerald-400 after:rounded-full' 
                    : 'text-slate-400'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          
          {/* Resources Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsResourcesOpen(true)}
            onMouseLeave={() => setIsResourcesOpen(false)}
          >
            <button className={`text-sm font-medium transition-colors hover:text-white relative py-1 flex items-center gap-1 whitespace-nowrap ${location.pathname.startsWith('/resources') ? 'text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-emerald-400 after:rounded-full' : 'text-slate-400'}`}>
              Resources <ChevronDown className="w-3.5 h-3.5" />
            </button>
            
            {isResourcesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-56 animate-fade-in z-50">
                <div className="bg-[#0a0a0a] rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] border border-white/10 p-2 flex flex-col">
                  {resources.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors font-medium text-left whitespace-nowrap"
                      onClick={() => setIsResourcesOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Action icons right - Desktop */}
        <div className="hidden md:flex items-center gap-3 lg:gap-5 shrink-0 whitespace-nowrap ml-auto z-10">
          {/* Compact Search bar */}
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-28 sm:w-32 lg:w-36 bg-white/5 border border-white/10 text-xs text-white rounded-xl pl-8 pr-2.5 py-1.5 outline-none focus:bg-white/10 focus:border-white/30 focus:ring-1 focus:ring-emerald-500/30 transition-all duration-200 placeholder:text-slate-500"
            />
            <Search className="w-3 h-3 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </form>

          {/* Free Library Badge */}
          <Link to="/books" className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold hover:bg-emerald-500/20 transition-colors whitespace-nowrap">
            100% Free Library
          </Link>

          {/* Login Button */}
          <Link to="/signin" onClick={() => window.scrollTo(0, 0)} className="shrink-0">
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-colors whitespace-nowrap">
              <User className="w-3.5 h-3.5" /> Sign In
            </button>
          </Link>
        </div>

        {/* Mobile menu triggers */}
        <div className="flex md:hidden items-center gap-4">
          <Link to="/books" className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded-lg">
            Free Library
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-300 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[65px] bg-[#0a0a0a]/90 backdrop-blur-xl z-40 animate-fade-in" onClick={() => setIsMobileMenuOpen(false)}>
          <div 
            className="bg-[#0a0a0a] w-full border-b border-white/10 px-6 py-6 flex flex-col gap-6 animate-slide-down"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Search */}
            <form onSubmit={handleSearchSubmit} className="relative w-full">
              <input
                type="text"
                placeholder="Search premium books..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none text-white focus:bg-white/10 focus:border-white/30 placeholder:text-slate-500"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            </form>

            {/* Mobile Nav Links */}
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-semibold text-slate-300 hover:text-white py-1"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-white/10 flex flex-col gap-3">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Resources</span>
                {resources.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm font-semibold text-slate-400 hover:text-white py-1 pl-2"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>

            <div className="border-t border-white/10 pt-4 flex flex-col gap-3">
              <Link to="/signin" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="flex w-full justify-center items-center gap-2 px-4 py-3 text-sm font-semibold rounded-lg bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-colors">
                  <User className="w-4 h-4" /> Sign In
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
