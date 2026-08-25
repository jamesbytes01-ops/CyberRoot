import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Check, Download } from 'lucide-react';
import { BookCover } from '../../utils/svgGenerator';
import { generateEbookHtml } from '../../utils/ebookGenerator';
import { useCart } from '../../context/CartContext';

export function BookCard({ book }) {
  const { id, title, author, category, rating, price, coverColor, bestseller, featured, isbn } = book;
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  // Generate a mock original price for the discount presentation
  const originalPrice = price * 1.25;

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(book, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleDownload = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const content = generateEbookHtml(book);
    const blob = new Blob([content], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  // Determine card badge
  let badge = null;
  if (bestseller) {
    badge = 'Best Seller';
  } else if (featured) {
    badge = 'Top Rated';
  } else if (price < 30) {
    badge = 'New Arrival';
  }

  return (
    <div className="group relative flex flex-col justify-between bg-white rounded-[20px] p-4.5 border border-slate-100 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-slate-200 hover:shadow-[0_20px_50px_-12px_rgba(15,23,42,0.12)]">
      <Link to={`/book/${id}`} className="block">
        {/* Cover Container with Badge */}
        <div className="relative w-full aspect-[2/3] overflow-hidden rounded-[14px] bg-slate-950 mb-4 shadow-sm">
          <BookCover 
            title={title} 
            author={author} 
            category={category} 
            coverColor={coverColor} 
            isbn={isbn}
            coverId={book.coverId}
            image={book.image}
            size="md"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />
          
          {/* Badge Overlay */}
          {badge && (
            <span className="absolute top-3 left-3 z-20 text-[9px] font-bold text-white px-2.5 py-1 rounded-md bg-accent shadow-[0_2px_10px_rgba(181,138,84,0.4)] uppercase tracking-wide">
              {badge}
            </span>
          )}
        </div>

        {/* Metadata */}
        <div className="flex flex-col gap-1 px-0.5 text-left">
          <h3 className="font-bold text-slate-800 text-sm md:text-[15px] leading-snug group-hover:text-accent transition-colors duration-300 line-clamp-2 min-h-[2.5rem]">
            {title}
          </h3>
          <p className="text-xs text-slate-400 font-medium truncate">
            {author}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-1">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-3 h-3 ${
                    i < Math.floor(rating) 
                      ? 'fill-amber-400 stroke-amber-400' 
                      : 'stroke-slate-200 fill-transparent'
                  }`} 
                />
              ))}
            </div>
            <span className="text-[10px] font-bold text-slate-500 ml-1">
              {rating} ({Math.floor(rating * 120)})
            </span>
          </div>
        </div>
      </Link>

      {/* Free E-Book Status and Quick Download/Read actions */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between px-0.5">
        <div className="flex items-center gap-1.5">
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-black text-emerald-700 bg-emerald-50 border border-emerald-200 uppercase tracking-wider">
            Free E-Book
          </span>
        </div>

        <button 
          onClick={handleDownload} 
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all duration-300 ease-out ${
            isAdded
              ? 'bg-emerald-50 border-emerald-200 text-emerald-600'
              : 'bg-slate-900 text-white border-slate-900 hover:bg-emerald-600 hover:border-emerald-600 hover:shadow-md active:scale-95'
          }`}
          aria-label={`Read or download ${title}`}
        >
          {isAdded ? (
            <>
              <Check className="w-3.5 h-3.5 stroke-[2.5]" /> Opened
            </>
          ) : (
            <>
              <Download className="w-3.5 h-3.5 stroke-[2]" /> Read / Download
            </>
          )}
        </button>
      </div>
    </div>
  );
}
