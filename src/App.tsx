import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { store } from './store';
import { ROUTES } from './constants';
import PrivateRoute from './components/PrivateRoute';
import Landing from './components/Landing';
import LoginForm from './components/LoginForm';
import UserList from './components/UserList';
import EditUser from './components/EditUser';
import Footer from './components/Footer';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            <Routes>
              <Route path={ROUTES.LANDING} element={<Landing />} />
              <Route path={ROUTES.LOGIN} element={<LoginForm />} />
              <Route path="/" element={<Navigate to={ROUTES.LANDING} replace />} />
              <Route
                path={ROUTES.USERS}
                element={
                  <PrivateRoute>
                    <UserList />
                  </PrivateRoute>
                }
              />
              <Route
                path={ROUTES.EDIT_USER}
                element={
                  <PrivateRoute>
                    <EditUser />
                  </PrivateRoute>
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
          </div>
          <Footer />
        </div>
        <Toaster position="top-right" />
      </Router>
    </Provider>
  );
}

export default App;