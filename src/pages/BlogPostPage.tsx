import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';

const blogContent: Record<string, any> = {
  '1': {
    title: 'Building Neural Networks with React Three Fiber',
    category: 'AI/ML',
    readTime: '8 min',
    date: '2024-02-15',
    content: `
# Building Neural Networks with React Three Fiber

Creating interactive 3D neural network visualizations has never been more accessible thanks to React Three Fiber. In this comprehensive guide, we'll explore how to build stunning neural network representations that users can interact with in real-time.

## Getting Started

React Three Fiber is a React renderer for Three.js that allows us to write Three.js applications in a declarative manner. When combined with neural network concepts, we can create educational and visually appealing demonstrations.

\`\`\`jsx
import { Canvas } from '@react-three/fiber'
import { Sphere, Line } from '@react-three/drei'

function NeuralNode({ position, connections }) {
  return (
    <group position={position}>
      <Sphere args={[0.1]} material-color="hotpink" />
      {connections.map((connection, i) => (
        <Line
          key={i}
          points={[position, connection.target]}
          color="white"
          lineWidth={connection.weight}
        />
      ))}
    </group>
  )
}
\`\`\`

## Creating Dynamic Connections

The magic happens when we start animating the connections between nodes. We can represent the flow of information through the network using animated particles or changing line opacity.

## Performance Considerations

When dealing with large networks, performance becomes crucial. We'll cover:
- Instance rendering for multiple nodes
- Level-of-detail optimization
- Efficient update patterns

## Conclusion

React Three Fiber opens up incredible possibilities for creating educational AI visualizations. The combination of React's component model with Three.js power makes complex 3D scenes manageable and maintainable.
    `
  },
  '2': {
    title: 'The Future of Full-Stack Development',
    category: 'Development',
    readTime: '6 min',
    date: '2024-02-10',
    content: `
# The Future of Full-Stack Development

The landscape of full-stack development is evolving rapidly. From edge computing to AI-powered code generation, developers need to stay ahead of emerging trends to remain competitive.

## Edge Computing Revolution

Edge computing is fundamentally changing how we think about application architecture. Instead of centralized servers, we're moving towards distributed computing that happens closer to users.

\`\`\`javascript
// Edge function example
export default async function handler(request) {
  const userLocation = request.geo.country
  
  // Process data at the edge
  const response = await processNearUser(userLocation)
  
  return new Response(JSON.stringify(response), {
    headers: { 'content-type': 'application/json' }
  })
}
\`\`\`

## AI-Powered Development

AI is becoming an integral part of the development process:
- Code completion and generation
- Automated testing
- Performance optimization
- Bug detection and fixing

## The Rise of TypeScript

TypeScript has become the standard for enterprise applications, providing:
- Type safety
- Better developer experience
- Improved maintainability
- Enhanced tooling

## Conclusion

The future belongs to developers who embrace these changes and continuously adapt their skills. The full-stack developer of tomorrow will be part architect, part AI trainer, and part performance engineer.
    `
  },
  '3': {
    title: 'Optimizing React Performance at Scale',
    category: 'React',
    readTime: '10 min',
    date: '2024-02-05',
    content: `
# Optimizing React Performance at Scale

When your React application serves millions of users, every millisecond matters. This guide covers advanced optimization techniques that can make the difference between a sluggish app and a lightning-fast user experience.

## Memory Management

Large applications often suffer from memory leaks. Here's how to prevent them:

\`\`\`jsx
// Bad: Memory leak
useEffect(() => {
  const subscription = observable.subscribe(handleData)
  // Missing cleanup!
}, [])

// Good: Proper cleanup
useEffect(() => {
  const subscription = observable.subscribe(handleData)
  return () => subscription.unsubscribe()
}, [])
\`\`\`

## Bundle Splitting Strategies

Code splitting isn't just about lazy loading routes. We can split based on:
- User roles
- Feature flags
- Device capabilities
- Geographic regions

## Virtual Scrolling

For large lists, virtual scrolling is essential:

\`\`\`jsx
import { FixedSizeList as List } from 'react-window'

function VirtualList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      <Item data={items[index]} />
    </div>
  )
  
  return (
    <List
      height={600}
      itemCount={items.length}
      itemSize={50}
    >
      {Row}
    </List>
  )
}
\`\`\`

## State Management at Scale

As applications grow, state management becomes critical:
- Use Zustand for simple state
- Redux Toolkit for complex state
- React Query for server state
- Jotai for atomic state management

## Conclusion

Performance optimization is an ongoing process. Profile regularly, measure everything, and always prioritize user experience over developer convenience.
    `
  },
  '4': {
    title: 'AI Workflow Automation Best Practices',
    category: 'AI/ML',
    readTime: '7 min',
    date: '2024-01-28',
    content: `
# AI Workflow Automation Best Practices

Implementing AI-powered workflows can dramatically improve productivity, but only when done correctly. This guide covers the essential practices for building robust, maintainable AI automation systems.

## Start Small, Scale Gradually

Begin with simple, well-defined tasks:

\`\`\`python
# Simple email classification workflow
def classify_email(email_content):
    result = ai_model.predict(email_content)
    
    if result.confidence > 0.8:
        return result.category
    else:
        # Fall back to human review
        return queue_for_human_review(email_content)
\`\`\`

## Data Quality First

AI is only as good as your data:
- Implement data validation pipelines
- Monitor data drift
- Maintain training data quality
- Regular model retraining

## Error Handling and Fallbacks

Always have backup plans:

\`\`\`javascript
async function processWithAI(input) {
  try {
    const aiResult = await aiService.process(input)
    
    if (aiResult.confidence < threshold) {
      // Fall back to rule-based system
      return ruleBasedProcessor(input)
    }
    
    return aiResult
  } catch (error) {
    // Graceful degradation
    return defaultProcessor(input)
  }
}
\`\`\`

## Monitoring and Observability

Track everything:
- Model performance metrics
- Processing times
- Error rates
- User satisfaction

## Human-in-the-Loop

Keep humans involved:
- Review edge cases
- Provide feedback
- Handle exceptions
- Continuous training

## Conclusion

Successful AI workflow automation requires careful planning, robust error handling, and continuous monitoring. Start small, focus on data quality, and always keep humans in the loop.
    `
  }
};

const BlogPostPage = () => {
  const { id } = useParams();
  const post = blogContent[id || ''];

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground font-sans">
        <Header />
        <main className="container mx-auto px-4 lg:px-8 xl:px-16 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <Link to="/blog" className="text-primary hover:underline">
              Return to Blog
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      <main className="container mx-auto px-4 lg:px-8 xl:px-16 py-20">
        <div className="flex items-center gap-4 mb-8">
          <Link 
            to="/blog" 
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
        </div>

        <article className="max-w-4xl mx-auto">
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <Badge variant="outline" className="text-primary border-primary/50">
                {post.category}
              </Badge>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric',
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  {post.readTime}
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {post.title}
            </h1>
          </header>

          <div className="prose prose-lg max-w-none prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-code:text-primary prose-pre:bg-muted prose-pre:border prose-pre:border-muted-foreground/20">
            {post.content.split('\n').map((line: string, index: number) => {
              if (line.startsWith('# ')) {
                return <h1 key={index} className="text-3xl font-bold mt-8 mb-4">{line.substring(2)}</h1>;
              }
              if (line.startsWith('## ')) {
                return <h2 key={index} className="text-2xl font-semibold mt-6 mb-3">{line.substring(3)}</h2>;
              }
              if (line.startsWith('```')) {
                const isClosing = line === '```';
                return isClosing ? 
                  <div key={index} className="mb-4"></div> : 
                  <pre key={index} className="bg-muted p-4 rounded-lg border border-muted-foreground/20 mt-4 mb-4 overflow-x-auto"><code>{line.substring(3)}</code></pre>;
              }
              if (line.startsWith('- ')) {
                return <li key={index} className="ml-4">{line.substring(2)}</li>;
              }
              if (line.trim() === '') {
                return <br key={index} />;
              }
              return <p key={index} className="mb-4 leading-relaxed">{line}</p>;
            })}
          </div>
        </article>
      </main>
    </div>
  );
};

export default BlogPostPage;