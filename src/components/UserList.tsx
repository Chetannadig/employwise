import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { Pencil, Trash2, Search, LogOut, MapPin, Briefcase } from 'lucide-react';
import { RootState } from '../store';
import { setUsers, setCurrentPage, setLoading, deleteUser, resetUsers } from '../store/slices/userSlice';
import { logout } from '../store/slices/authSlice';
import { BASE_URL, ENDPOINTS, ROUTES, MESSAGES } from '../constants';

const UserList: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users, currentPage, loading, hasMore } = useSelector((state: RootState) => state.users);
  const [searchTerm, setSearchTerm] = useState('');
  const [loadingMore, setLoadingMore] = useState(false);

  const fetchUsers = useCallback(async (page: number) => {
    if (page === 1) {
      dispatch(resetUsers());
    }
    
    dispatch(setLoading(true));
    try {
      const response = await axios.get(`${BASE_URL}${ENDPOINTS.USERS}?page=${page}`);
      dispatch(setUsers({
        users: response.data.data,
        total_pages: response.data.total_pages
      }));
    } catch (error) {
      toast.error(MESSAGES.GENERIC_ERROR);
      console.error('Error fetching users:', error);
    } finally {
      dispatch(setLoading(false));
      setLoadingMore(false);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage, fetchUsers]);

  const handleLoadMore = () => {
    if (!loadingMore && hasMore) {
      setLoadingMore(true);
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`${BASE_URL}${ENDPOINTS.USERS}/${id}`);
      dispatch(deleteUser(id));
      toast.success(MESSAGES.USER_DELETED);
    } catch (error) {
      toast.error(MESSAGES.GENERIC_ERROR);
      console.error('Error deleting user:', error);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate(ROUTES.LOGIN);
  };

  const filteredUsers = users.filter(user => 
    user.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.job?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.department?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.location?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  {users.length} Users
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center px-4 py-2 text-sm text-red-600 hover:text-red-700 transition-colors duration-200"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </button>
            </div>

            {/* Search Bar */}
            <div className="mt-4 relative">
              <input
                type="text"
                placeholder="Search users by name, email, job, department, or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* User Grid */}
          {loading && users.length === 0 ? (
            <div className="p-8 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {filteredUsers.map(user => (
                  <div
                    key={user.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transform hover:scale-105 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative">
                      <img
                        src={user.avatar}
                        alt={`${user.first_name} ${user.last_name}`}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-0 right-0 mt-2 mr-2 space-x-1">
                        <button
                          onClick={() => navigate(`${ROUTES.USERS}/${user.id}/edit`)}
                          className="p-2 bg-white/90 text-blue-600 rounded-full hover:bg-blue-50 transition-colors duration-200"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(user.id)}
                          className="p-2 bg-white/90 text-red-600 rounded-full hover:bg-red-50 transition-colors duration-200"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {user.first_name} {user.last_name}
                      </h3>
                      <p className="text-gray-600 mb-2">{user.email}</p>
                      
                      {/* Additional User Details */}
                      <div className="space-y-2 mt-4">
                        <div className="flex items-center text-gray-600">
                          <Briefcase className="w-4 h-4 mr-2" />
                          <span>{user.job}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <div className="w-4 h-4 mr-2">🏢</div>
                          <span>{user.department}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{user.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More Button */}
              {hasMore && (
                <div className="flex justify-center p-6 border-t border-gray-200">
                  <button
                    onClick={handleLoadMore}
                    disabled={loadingMore}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition duration-200 disabled:opacity-50"
                  >
                    {loadingMore ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Loading...
                      </div>
                    ) : (
                      'Load More Users'
                    )}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserList;