import React, { useState, useMemo } from 'react';
import { Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data';
import BlogNavbar from '../components/BlogNavbar';

const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

const groupPostsByYear = (posts: typeof blogPosts) => {
  return posts.reduce((acc, post) => {
    const year = new Date(post.date).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {} as Record<number, typeof blogPosts>);
};

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = searchQuery === '' || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesTags = selectedTags.length === 0 || 
        selectedTags.every(tag => post.tags.includes(tag));
      
      return matchesSearch && matchesTags;
    });
  }, [searchQuery, selectedTags]);

  const groupedPosts = useMemo(() => {
    return groupPostsByYear(filteredPosts);
  }, [filteredPosts]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <BlogNavbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedTags([])}
            className={`
              px-3 py-1.5 rounded-full text-sm font-medium transition-all
              ${selectedTags.length === 0
                ? 'bg-blue-500 text-white'
                : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50'}
            `}
          >
            all posts
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`
                px-3 py-1.5 rounded-full text-sm font-medium transition-all
                ${selectedTags.includes(tag)
                  ? 'bg-blue-500 text-white'
                  : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50'}
              `}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="space-y-12">
          {Object.entries(groupedPosts)
            .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
            .map(([year, posts]) => (
              <div key={year}>
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-2xl font-bold text-white">{year}</h2>
                  <div className="flex-1 h-px bg-slate-800"></div>
                </div>
                <div className="space-y-8">
                  {posts.map(post => (
                    <Link 
                      key={post.id}
                      to={`/blog/${post.id}`}
                      className="block group"
                    >
                      <article className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3">
                          <img 
                            src={post.author.avatar} 
                            alt={post.author.name}
                            className="w-6 h-6 rounded-full"
                          />
                          <span className="text-sm text-slate-400">{post.author.name}</span>
                          <span className="text-slate-600">•</span>
                          <div className="flex items-center gap-1 text-sm text-slate-400">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                          {post.title}
                        </h3>
                        
                        <p className="text-slate-400 mb-4">
                          {post.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {post.tags.map(tag => (
                            <span 
                              key={tag}
                              className="px-2 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}