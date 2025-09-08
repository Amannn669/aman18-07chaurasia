import React from 'react';
import Header from '@/components/Header';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ShuffleText from '@/components/ShuffleText';

const blogPosts = [
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

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      <main className="container mx-auto px-4 lg:px-8 xl:px-16 py-20">
        <div className="flex items-center gap-4 mb-8">
          <Link 
            to="/#blog" 
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            BLOG <span className="text-primary">POSTS</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on development, AI, and technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.id}
              className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 border-muted-foreground/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Link to={`/blog/${post.id}`}>
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
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                    <ShuffleText>{post.title}</ShuffleText>
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BlogPage;