import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';
import BlogPost from './pages/BlogPost';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="flex flex-col lg:flex-row">
            <Navbar />
            <main className="flex-1 lg:pl-[240px]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Home />
              </div>
            </main>
          </div>
        } />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}