import React from 'react';
import { Calendar, User, Clock, ChevronRight } from 'lucide-react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: 'The Future of HR Technology',
      excerpt: 'Exploring emerging trends in HR tech and their impact on workforce management.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
      author: 'Sarah Johnson',
      date: 'March 15, 2024',
      readTime: '5 min read',
      category: 'Technology',
    },
    {
      title: 'Building an Inclusive Workplace',
      excerpt: 'Best practices for creating a diverse and inclusive work environment.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      author: 'Michael Chen',
      date: 'March 12, 2024',
      readTime: '4 min read',
      category: 'Culture',
    },
    {
      title: 'Remote Work Best Practices',
      excerpt: 'Tips and strategies for managing remote teams effectively.',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80',
      author: 'Emily Rodriguez',
      date: 'March 10, 2024',
      readTime: '6 min read',
      category: 'Management',
    },
    {
      title: 'Data-Driven HR Decisions',
      excerpt: 'Leveraging analytics for better HR strategy and decision-making.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      author: 'Alex Thompson',
      date: 'March 8, 2024',
      readTime: '7 min read',
      category: 'Analytics',
    },
    {
      title: 'Employee Engagement Strategies',
      excerpt: 'Proven methods to boost employee engagement and satisfaction.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
      author: 'Lisa Wang',
      date: 'March 5, 2024',
      readTime: '5 min read',
      category: 'Employee Experience',
    },
    {
      title: 'HR Compliance Updates 2024',
      excerpt: 'Latest compliance requirements and how to stay ahead.',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
      author: 'David Miller',
      date: 'March 1, 2024',
      readTime: '8 min read',
      category: 'Compliance',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">EmployWise Blog</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Insights and trends in HR technology and workforce management
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-purple-600 mb-3">
                  <span className="px-3 py-1 bg-purple-100 rounded-full">{post.category}</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
                <button className="mt-4 flex items-center text-purple-600 hover:text-purple-700 transition-colors">
                  Read More
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-8">
              Get the latest insights and trends delivered to your inbox
            </p>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 transition duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;