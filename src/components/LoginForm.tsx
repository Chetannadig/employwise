import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { Users } from 'lucide-react';
import { setToken } from '../store/slices/authSlice';
import { BASE_URL, ROUTES, ENDPOINTS, MESSAGES, EMAIL_REGEX, DEMO_CREDENTIALS } from '../constants';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!email || !EMAIL_REGEX.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }
    
    if (!password) {
      toast.error('Please enter your password');
      return;
    }

    // Validate against demo credentials
    if (email !== DEMO_CREDENTIALS.EMAIL || password !== DEMO_CREDENTIALS.PASSWORD) {
      toast.error('Invalid credentials. Please use the demo credentials provided below.');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(`${BASE_URL}${ENDPOINTS.LOGIN}`, {
        email,
        password,
      });

      dispatch(setToken(response.data.token));
      toast.success(MESSAGES.LOGIN_SUCCESS);
      navigate(ROUTES.USERS);
    } catch (error) {
      toast.error(MESSAGES.LOGIN_ERROR);
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-blue-100 p-3 rounded-full mb-4">
            <Users className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
          <p className="text-gray-600 mt-2">Please sign in to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="eve.holt@reqres.in"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition duration-200 disabled:opacity-50"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>Demo credentials:</p>
          <p>Email: {DEMO_CREDENTIALS.EMAIL}</p>
          <p>Password: {DEMO_CREDENTIALS.PASSWORD}</p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;