import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, ArrowRight, CheckCircle, Zap, Shield, Globe } from 'lucide-react';
import { ROUTES } from '../constants';

const Landing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Navigation */}
      <nav className="px-6 py-4 backdrop-blur-md bg-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Users className="w-8 h-8 text-white" />
            <span className="text-2xl font-bold text-white">EmployWise</span>
          </div>
          <button
            onClick={() => navigate(ROUTES.LOGIN)}
            className="px-6 py-2 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 backdrop-blur-lg transition-all duration-300"
          >
            Login
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Transform Your
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                Workforce Management
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              Experience the future of HR management with our AI-powered platform.
              Streamline operations, boost productivity, and empower your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate(ROUTES.LOGIN)}
                className="group flex items-center justify-center space-x-2 px-8 py-4 bg-white text-purple-900 rounded-lg font-semibold text-lg hover:bg-purple-100 transition-all duration-300 transform hover:scale-105"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
              <a
                href="https://employwise.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                <Globe className="w-5 h-5" />
                <span>Learn More</span>
              </a>
            </div>
          </div>

          {/* 3D Cards Grid */}
          <div className="grid grid-cols-2 gap-4 perspective-1000">
            {[
              {
                title: "AI-Powered Insights",
                description: "Make data-driven decisions",
                image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=400&q=80",
                delay: "0",
              },
              {
                title: "Team Analytics",
                description: "Track performance metrics",
                image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=400&q=80",
                delay: "100",
              },
              {
                title: "Smart Automation",
                description: "Streamline workflows",
                image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=400&q=80",
                delay: "200",
              },
              {
                title: "Global Compliance",
                description: "Stay legally compliant",
                image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=400&q=80",
                delay: "300",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="group relative h-48 rounded-xl overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:rotate-y-12"
                style={{ animationDelay: `${card.delay}ms` }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent p-4 flex flex-col justify-end">
                  <h3 className="text-white font-semibold">{card.title}</h3>
                  <p className="text-gray-300 text-sm">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {[
            {
              title: 'Smart Analytics',
              description: 'AI-powered insights for better decision making',
              icon: <Zap className="w-8 h-8 text-purple-400" />,
            },
            {
              title: 'Enterprise Security',
              description: 'Bank-grade security for your sensitive data',
              icon: <Shield className="w-8 h-8 text-purple-400" />,
            },
            {
              title: 'Global Compliance',
              description: 'Stay compliant with international regulations',
              icon: <CheckCircle className="w-8 h-8 text-purple-400" />,
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "500+", label: "Enterprise Clients" },
            { number: "50M+", label: "Employees Managed" },
            { number: "99.9%", label: "Uptime SLA" },
            { number: "24/7", label: "Support" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;