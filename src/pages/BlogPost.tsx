import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Tag } from 'lucide-react';
import { blogPosts } from '../data';
import BlogNavbar from '../components/BlogNavbar';

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === id);

  const relatedPosts = useMemo(() => {
    if (!post) return [];
    
    return blogPosts
      .filter(p => 
        p.id !== post.id && // Exclude current post
        p.tags.some(tag => post.tags.includes(tag)) // Has at least one matching tag
      )
      .slice(0, 3); // Limit to 3 related posts
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Post not found</h1>
          <Link 
            to="/blog" 
            className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <BlogNavbar />
      
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to all posts
        </Link>

        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <img 
                src={post.author.avatar} 
                alt={post.author.name}
                className="w-6 h-6 rounded-full"
              />
              <span>{post.author.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map(tag => (
            <span 
              key={tag}
              className="px-2.5 py-1 text-sm font-medium bg-blue-500/20 text-blue-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="prose prose-invert prose-blue max-w-none">
          {post.image && (
            <div className="mb-8">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-64 sm:h-96 object-cover rounded-lg"
              />
            </div>
          )}
          
          <div className="text-slate-300 leading-relaxed space-y-6">
            {post.content}
          </div>
        </div>

        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-8 border-t border-slate-800">
            <h2 className="text-2xl font-bold text-white mb-6">Related Posts</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map(relatedPost => (
                <Link 
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="group"
                >
                  <article className="h-full bg-slate-800/50 rounded-lg p-4 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center gap-2 text-sm text-slate-400 mb-3">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={relatedPost.date}>
                          {new Date(relatedPost.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </time>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      
                      <p className="text-sm text-slate-400 mb-4 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>

                      <div className="mt-auto flex flex-wrap gap-2">
                        {relatedPost.tags.map(tag => (
                          <span 
                            key={tag}
                            className="px-2 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}