import React from 'react';
import { Users, BarChart, Shield, Globe, Clock, Database, Cloud, Settings } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'HR Management',
      description: 'Comprehensive employee data management and HR workflow automation.',
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: 'Analytics & Reporting',
      description: 'Advanced analytics and customizable reports for data-driven decisions.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Compliance Management',
      description: 'Stay compliant with automated updates and documentation.',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Workforce',
      description: 'Manage international teams with localized compliance.',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Time Tracking',
      description: 'Accurate time tracking and attendance management.',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Security',
      description: 'Enterprise-grade security for your sensitive data.',
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Integration',
      description: 'Seamless integration with your existing tools.',
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Custom Solutions',
      description: 'Tailored solutions for your unique needs.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Comprehensive workforce management solutions tailored to your organization's needs
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-purple-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose EmployWise?</h2>
            <p className="mt-4 text-lg text-gray-600">
              Experience the difference with our comprehensive suite of features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Easy Integration',
                description: 'Seamlessly integrate with your existing tools and workflows.',
                image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
              },
              {
                title: 'Real-time Analytics',
                description: 'Make data-driven decisions with powerful analytics.',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
              },
              {
                title: '24/7 Support',
                description: 'Get help whenever you need it with our dedicated support team.',
                image: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&w=800&q=80',
              },
            ].map((feature, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "EmployWise has transformed how we manage our global workforce. The platform is intuitive and powerful.",
                author: "John Smith",
                role: "HR Director, Tech Corp",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80"
              },
              {
                quote: "The analytics features have helped us make better decisions about our workforce planning.",
                author: "Sarah Chen",
                role: "CEO, Innovation Inc",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
              },
              {
                quote: "Outstanding customer support and continuous platform improvements. Highly recommended!",
                author: "Mike Johnson",
                role: "COO, Global Solutions",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;