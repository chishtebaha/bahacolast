import React from 'react';
import { Link } from 'react-router-dom';
import { Home, BookOpen, Search } from 'lucide-react';

export default function BlogNavbar({ searchQuery = '', onSearchChange = (value: string) => {} }) {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors">
              <Home className="w-5 h-5" />
              <span className="font-semibold">Home</span>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors text-sm"
            >
              GitHub
            </a>
            <a 
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors text-sm"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}