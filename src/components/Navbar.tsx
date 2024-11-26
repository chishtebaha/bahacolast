import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Briefcase, FolderGit2, Trophy, Heart, HandHeart, Mail, Menu, X, GraduationCap, ChevronRight, BookOpen } from 'lucide-react';
import { useActiveSection } from '../hooks/useActiveSection';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navItems = [
    { label: 'Home', href: '/', icon: Home },
    ...(isHomePage ? [
      { label: 'Education', href: '#education', icon: GraduationCap },
      { label: 'Experience', href: '#experience', icon: Briefcase },
      { label: 'Projects', href: '#projects', icon: FolderGit2 },
      { label: 'Achievements', href: '#achievements', icon: Trophy },
      { label: 'Interests', href: '#interests', icon: Heart },
      { label: 'Impact & Volunteering', href: '#impact', icon: HandHeart },
      { label: 'Contact', href: '#contact', icon: Mail },
    ] : []),
    { label: 'Blog', href: '/blog', icon: BookOpen },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-50 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Navigation */}
      <nav className={`
        fixed top-0 right-0 h-screen w-[240px] bg-slate-900/95 backdrop-blur-sm border-l border-slate-800/50 
        flex flex-col z-40 transition-all duration-500 ease-in-out lg:translate-x-0 lg:left-0 lg:border-r
        ${isOpen ? 'translate-x-0 shadow-2xl' : 'translate-x-full lg:translate-x-0 lg:shadow-none'}
      `}>
        {/* Logo */}
        <div className="p-6 border-b border-slate-800/50">
          <Link to="/" className="relative group inline-flex items-center" onClick={() => setIsOpen(false)}>
            <div className="flex items-center space-x-1.5">
              <span className="text-lg font-bold text-blue-500 group-hover:text-blue-400 transition-all duration-300">
                Bahauddin
              </span>
              <span className="text-lg font-light text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                C.
              </span>
            </div>
            <div className="absolute inset-0 -m-3 border border-slate-800 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100" />
          </Link>
        </div>

        {/* Nav Items */}
        <div className="flex-1 overflow-y-auto py-6">
          <div className="px-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.href.startsWith('#') 
                ? activeSection === item.href.slice(1)
                : location.pathname === item.href;
              
              const NavLink = item.href.startsWith('#') ? 'a' : Link;
              
              return (
                <NavLink
                  key={item.label}
                  to={item.href.startsWith('#') ? undefined : item.href}
                  href={item.href.startsWith('#') ? item.href : undefined}
                  onClick={() => setIsOpen(false)}
                  className={`
                    relative group flex items-center gap-3 px-4 py-3 text-[14px] font-medium rounded-lg 
                    hover:bg-slate-800/50 transition-all duration-300
                    ${isActive ? 'bg-slate-800/50 border-slate-700/50' : ''}
                  `}
                >
                  <Icon className={`
                    w-5 h-5 transition-colors duration-300
                    ${isActive ? 'text-blue-400' : 'text-slate-400 group-hover:text-blue-400'}
                  `} />
                  <span className={`
                    relative z-10 transition-colors duration-300
                    ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}
                  `}>
                    {item.label}
                  </span>
                  <div className={`
                    absolute inset-0 rounded-lg border transition-colors duration-300
                    ${isActive ? 'border-slate-700/50' : 'border-transparent group-hover:border-slate-700/50'}
                  `} />
                  <ChevronRight className={`
                    absolute right-3 w-4 h-4 transition-all duration-300
                    ${isActive 
                      ? 'opacity-100 translate-x-0 text-blue-400' 
                      : 'opacity-0 -translate-x-2 text-slate-400 group-hover:opacity-100 group-hover:translate-x-0'
                    }
                  `} />
                </NavLink>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-800/50">
          <p className="text-sm text-slate-500 text-center">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden transition-opacity duration-500"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}