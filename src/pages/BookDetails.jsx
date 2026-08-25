import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, ShieldCheck, Truck, RotateCcw, ArrowLeft, Plus, Minus, ShoppingBag, Download, Zap } from 'lucide-react';
const bookModules = import.meta.glob('../data/books/*.json', { eager: true });
const booksData = Object.values(bookModules).map(mod => mod.default || mod);
import { BookCover } from '../utils/svgGenerator';
import { BookCard } from '../components/cards/BookCard';
import { generateEbookHtml } from '../utils/ebookGenerator';
import { Button } from '../components/ui/Button';
import { useCart } from '../context/CartContext';

export default function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedMessage, setAddedMessage] = useState(false);

  // Find book from local json database
  const book = booksData.find((b) => b.id === id);

  // Scroll to top on page load or ID change
  useEffect(() => {
    window.scrollTo(0, 0);
    setQuantity(1);
  }, [id]);

  if (!book) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-2xl font-bold text-slate-900">Book Not Found</h2>
        <p className="text-sm text-slate-500 mt-2">The security manuscript you requested could not be resolved.</p>
        <Link to="/books">
          <Button variant="primary" size="md" className="mt-6">
            Return to Repository
          </Button>
        </Link>
      </div>
    );
  }

  const { title, author, category, rating, price, description, isbn, pages, language, publisher, publishedYear, coverColor } = book;

  // Find 4 related books in same category (excluding current book)
  const relatedBooks = booksData
    .filter((b) => b.category === category && b.id !== id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(book, quantity);
    setAddedMessage(true);
    setTimeout(() => setAddedMessage(false), 3000);
  };

  const handleDownload = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const content = generateEbookHtml(book);
    const blob = new Blob([content], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    
    setAddedMessage(true);
    setTimeout(() => setAddedMessage(false), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Back button */}
      <button 
        onClick={() => navigate(-1)} 
        className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-900 mb-8 transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" /> Back to Catalog
      </button>

      {/* Main split details structure */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20 text-left">
        {/* Left: Huge Book Cover layout */}
        <div className="lg:col-span-5 flex justify-center sticky top-24">
          <div className="w-full max-w-[360px] aspect-[2/3]">
            <BookCover 
              title={title} 
              author={author} 
              category={category} 
              coverColor={coverColor} 
              isbn={isbn}
              coverId={book.coverId}
              image={book.image}
              size="lg"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Right: Book Details */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="flex flex-col gap-2.5">
            {/* Category */}
            <span className="text-xs uppercase font-extrabold tracking-widest text-accent">
              {category}
            </span>
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              {title}
            </h1>
            {/* Author */}
            <p className="text-base text-slate-500 font-medium">
              Written by <span className="text-slate-900 font-semibold">{author}</span>
            </p>
          </div>

          {/* Rating & Free Status Box */}
          <div className="flex flex-wrap items-center gap-6 py-4 px-5 bg-slate-50 border border-slate-100 rounded-2xl">
            <div className="flex items-center gap-1.5">
              <Star className="w-4.5 h-4.5 fill-amber-400 stroke-amber-400" />
              <span className="text-sm font-bold text-slate-800">{rating}</span>
              <span className="text-xs text-slate-400">/ 5.0 Rating</span>
            </div>
            <div className="h-4 w-px bg-slate-200 hidden sm:block" />
            <div className="text-lg font-extrabold text-emerald-600 uppercase tracking-wide flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              100% Free Open-Access E-Book
            </div>
          </div>

          {/* Book Synopsis */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-slate-900 text-sm tracking-wide uppercase">Synopsis</h3>
            <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
              {description}
            </p>
          </div>

          {/* Download & Online Reader Actions */}
          <div className="flex flex-wrap items-center gap-4 py-4 border-y border-slate-100">
            <div className="flex flex-wrap gap-3 w-full">
              <Button 
                variant="accent" 
                size="lg" 
                className="flex-1 sm:flex-none sm:px-8 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold border-none shadow-lg shadow-emerald-500/20"
                icon={<Download className="w-4.5 h-4.5" />}
                onClick={handleDownload}
              >
                Download Free E-Book (PDF)
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="flex-1 sm:flex-none sm:px-8 border-slate-200 bg-slate-900 text-white hover:bg-slate-800"
                icon={<Zap className="w-4.5 h-4.5 text-accent" />}
                onClick={handleDownload}
              >
                Read Online Now
              </Button>
            </div>

            {addedMessage && (
              <span className="text-xs text-emerald-600 font-semibold animate-fade-in flex items-center gap-1.5">
                ✓ Opening Online Reader!
              </span>
            )}
          </div>

          {/* Key Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-2">
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Format</span>
              <span className="text-xs font-semibold text-slate-800">PDF / EPUB / Web</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Published</span>
              <span className="text-xs font-semibold text-slate-800">{publishedYear}</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">ISBN-13</span>
              <span className="text-xs font-semibold text-slate-800">{isbn}</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Length</span>
              <span className="text-xs font-semibold text-slate-800">{pages} Pages</span>
            </div>
          </div>

          {/* Extra delivery guarantee specs */}
          <div className="border border-slate-100 rounded-2xl p-4 flex flex-col sm:flex-row justify-between gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-slate-400" />
              <span>Verified Open-Access Edition</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-slate-400" />
              <span>Instant Digital Download</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="w-4 h-4 text-slate-400" />
              <span>Multi-Device Sync</span>
            </div>
          </div>
        </div>
      </div>

      {/* Related books layout */}
      {relatedBooks.length > 0 && (
        <div className="border-t border-slate-100 pt-16 text-left">
          <div className="mb-10">
            <span className="text-xs font-bold text-accent uppercase tracking-widest">
              More in {category}
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-1">
              Related Recommended Reads
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedBooks.map((relatedBook) => (
              <BookCard key={relatedBook.id} book={relatedBook} />
            ))}
          </div>
        </div>
      )}

      {/* MOBILE STICKY DOWNLOAD BAR */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-xl border-t border-slate-200/50 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] z-40 flex items-center gap-4">
        <div className="flex-1 flex flex-col">
          <span className="text-sm font-extrabold text-emerald-600">100% Free</span>
          <span className="text-[10px] text-slate-500 font-semibold truncate">{title}</span>
        </div>
        <Button 
          variant="primary" 
          size="md" 
          className="flex-shrink-0 px-6 shadow-lg shadow-slate-900/20 bg-emerald-600 hover:bg-emerald-500 text-white"
          icon={<Download className="w-4 h-4" />}
          onClick={handleDownload}
        >
          Download Free
        </Button>
      </div>
    </div>
  );
}
