import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import ShuffleText from './ShuffleText';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Neural Networks with React Three Fiber',
    excerpt: 'Dive deep into creating interactive 3D neural network visualizations using React Three Fiber and modern web technologies.',
    category: 'AI/ML',
    readTime: '8 min',
    date: '2024-02-15',
    featured: true
  },
  {
    id: '2',
    title: 'The Future of Full-Stack Development',
    excerpt: 'Exploring emerging trends in full-stack development, from edge computing to AI-powered code generation.',
    category: 'Development',
    readTime: '6 min',
    date: '2024-02-10'
  },
  {
    id: '3',
    title: 'Optimizing React Performance at Scale',
    excerpt: 'Advanced techniques for building performant React applications that handle millions of users.',
    category: 'React',
    readTime: '10 min',
    date: '2024-02-05'
  },
  {
    id: '4',
    title: 'AI Workflow Automation Best Practices',
    excerpt: 'Learn how to implement efficient AI-powered workflows that boost productivity and reduce manual tasks.',
    category: 'AI/ML',
    readTime: '7 min',
    date: '2024-01-28'
  }
];

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="blog" 
      className="py-20 relative"
    >
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-4">
          BLOG <span className="text-primary">INSIGHTS</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Sharing knowledge, code tips, and industry trends from the world of development and AI
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {blogPosts.map((post, index) => (
          <a
            key={post.id}
            href={`/blog/${post.id}`}
            className={`block group cursor-pointer transition-all duration-300 hover:scale-105 ${
              post.featured ? 'md:col-span-2' : ''
            } ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Card className="h-full hover:shadow-xl hover:shadow-primary/20 border-muted-foreground/20">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline" className="text-primary border-primary/50">
                    {post.category}
                  </Badge>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  <ShuffleText>{post.title}</ShuffleText>
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-primary font-medium group-hover:gap-3 transition-all duration-300">
                  Read More
                  <ArrowRight 
                    size={16} 
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                  />
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>

      <div className="text-center mt-12">
        <a 
          href="/blog"
          className="inline-block px-8 py-4 bg-primary/10 border border-primary/30 rounded-lg text-primary font-medium hover:bg-primary/20 transition-all duration-300 hover:scale-105"
        >
          View All Posts
        </a>
      </div>
    </section>
  );
};

export default Blog;