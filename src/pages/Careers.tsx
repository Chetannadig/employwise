import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Briefcase, GraduationCap, Globe, ArrowRight } from 'lucide-react';

const Careers: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Build the future of workforce management with us. We're looking for passionate individuals who want to make a difference.
            </p>
          </div>
        </div>
      </div>

      {/* Why Join Us Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Join EmployWise?</h2>
            <p className="mt-4 text-lg text-gray-600">
              Be part of a team that's transforming how businesses manage their workforce
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation First',
                description: 'Work with cutting-edge technologies and shape the future of HR tech',
                icon: <Globe className="w-8 h-8 text-purple-600" />,
              },
              {
                title: 'Growth & Learning',
                description: 'Continuous learning opportunities and career development paths',
                icon: <GraduationCap className="w-8 h-8 text-purple-600" />,
              },
              {
                title: 'Global Impact',
                description: 'Make a difference in how companies worldwide manage their workforce',
                icon: <Users className="w-8 h-8 text-purple-600" />,
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Open Positions</h2>
          
          <div className="grid gap-6">
            {[
              {
                title: 'Senior Software Engineer',
                department: 'Engineering',
                location: 'Remote',
                type: 'Full-time',
              },
              {
                title: 'Product Manager',
                department: 'Product',
                location: 'New York',
                type: 'Full-time',
              },
              {
                title: 'UX Designer',
                department: 'Design',
                location: 'London',
                type: 'Full-time',
              },
              {
                title: 'Data Scientist',
                department: 'Analytics',
                location: 'Remote',
                type: 'Full-time',
              },
            ].map((position, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0"
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{position.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                      {position.department}
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {position.location}
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                      {position.type}
                    </span>
                  </div>
                </div>
                <button className="group flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors">
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Don't See Your Perfect Role?</h2>
            <p className="text-lg text-purple-100 mb-8">
              We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
              Submit Your Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;