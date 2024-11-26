import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-3xl font-bold mb-12 relative inline-block">
      <span className="bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">
        {children}
      </span>
      <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full opacity-50" />
    </h2>
  );
}