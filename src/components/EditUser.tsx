import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { ArrowLeft, User, Mail, Building, MapPin, Briefcase } from 'lucide-react';
import { updateUser } from '../store/slices/userSlice';
import { BASE_URL, ENDPOINTS, ROUTES, MESSAGES, EMAIL_REGEX } from '../constants';

interface UserData {
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
  job?: string;
  department?: string;
  location?: string;
}

const EditUser: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [activeSection, setActiveSection] = useState('personal');
  const [userData, setUserData] = useState<UserData>({
    first_name: '',
    last_name: '',
    email: '',
    avatar: '',
    job: '',
    department: '',
    location: '',
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${BASE_URL}${ENDPOINTS.USERS}/${id}`);
        setUserData({
          ...response.data.data,
          job: response.data.data.job || 'Software Engineer',
          department: response.data.data.department || 'Engineering',
          location: response.data.data.location || 'New York',
        });
      } catch (error) {
        toast.error(MESSAGES.GENERIC_ERROR);
        navigate(ROUTES.USERS);
      }
    };

    fetchUser();
  }, [id, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userData.first_name.trim() || !userData.last_name.trim()) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (!EMAIL_REGEX.test(userData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.put(`${BASE_URL}${ENDPOINTS.USERS}/${id}`, userData);
      dispatch(updateUser({ ...response.data, id: Number(id) }));
      toast.success(MESSAGES.USER_UPDATED);
      navigate(ROUTES.USERS);
    } catch (error) {
      toast.error(MESSAGES.GENERIC_ERROR);
      console.error('Error updating user:', error);
    } finally {
      setLoading(false);
    }
  };

  const sections = [
    { id: 'personal', label: 'Personal Info', icon: User },
    { id: 'work', label: 'Work Details', icon: Briefcase },
    { id: 'location', label: 'Location', icon: MapPin },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <button
              onClick={() => navigate(ROUTES.USERS)}
              className="flex items-center text-gray-600 hover:text-gray-900 mb-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Users
            </button>
            <h1 className="text-3xl font-bold text-gray-900">Edit User Profile</h1>
          </div>

          <div className="flex flex-col md:flex-row">
            {/* Left Sidebar */}
            <div className="md:w-64 p-6 bg-gray-50">
              <div className="flex justify-center mb-6">
                <div className="relative group">
                  <img
                    src={userData.avatar}
                    alt={`${userData.first_name} ${userData.last_name}`}
                    className="w-32 h-32 rounded-full object-cover ring-4 ring-purple-100 group-hover:ring-purple-200 transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-sm">Change Photo</span>
                  </div>
                </div>
              </div>

              <nav className="space-y-2">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                        activeSection === section.id
                          ? 'bg-purple-100 text-purple-700'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{section.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Main Content */}
            <form onSubmit={handleSubmit} className="flex-1 p-6">
              <div className="space-y-6">
                {/* Personal Info Section */}
                <div className={activeSection === 'personal' ? 'block' : 'hidden'}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        value={userData.first_name}
                        onChange={(e) => setUserData({ ...userData, first_name: e.target.value })}
                        className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        value={userData.last_name}
                        onChange={(e) => setUserData({ ...userData, last_name: e.target.value })}
                        className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        required
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={userData.email}
                        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                        className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Work Details Section */}
                <div className={activeSection === 'work' ? 'block' : 'hidden'}>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Job Title
                      </label>
                      <input
                        type="text"
                        value={userData.job}
                        onChange={(e) => setUserData({ ...userData, job: e.target.value })}
                        className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Department
                      </label>
                      <input
                        type="text"
                        value={userData.department}
                        onChange={(e) => setUserData({ ...userData, department: e.target.value })}
                        className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Location Section */}
                <div className={activeSection === 'location' ? 'block' : 'hidden'}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      value={userData.location}
                      onChange={(e) => setUserData({ ...userData, location: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end pt-6 border-t border-gray-200">
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 transition duration-200 disabled:opacity-50"
                  >
                    {loading ? 'Saving...' : 'Save Changes'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;