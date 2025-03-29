// API Constants
export const BASE_URL = 'https://reqres.in/api';

// Routes
export const ROUTES = {
  LANDING: '/welcome',
  LOGIN: '/login',
  USERS: '/users',
  EDIT_USER: '/users/:id/edit',
  ABOUT: '/about',
  SERVICES: '/services',
  BLOG: '/blog',
  CAREERS: '/careers',
  PRIVACY_POLICY: '/privacy-policy',
  TERMS: '/terms',
  COOKIE_POLICY: '/cookie-policy',
};

// Local Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  COOKIE_PREFERENCES: 'cookie_preferences',
  PRIVACY_ACCEPTED: 'privacy_accepted',
};

// Demo Credentials
export const DEMO_CREDENTIALS = {
  EMAIL: 'eve.holt@reqres.in',
  PASSWORD: 'cityslicka',
};

// Regex Patterns
export const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

// API Endpoints
export const ENDPOINTS = {
  LOGIN: '/login',
  USERS: '/users',
};

// Pagination
export const ITEMS_PER_PAGE = 6;

// Messages
export const MESSAGES = {
  LOGIN_SUCCESS: 'Login successful!',
  LOGIN_ERROR: 'Invalid credentials. Please try again.',
  USER_UPDATED: 'User updated successfully!',
  USER_DELETED: 'User deleted successfully!',
  GENERIC_ERROR: 'An error occurred. Please try again.',
  COOKIE_ACCEPTED: 'Cookie preferences saved!',
  PRIVACY_ACCEPTED: 'Privacy policy accepted!',
};

// Cookie Categories
export const COOKIE_CATEGORIES = {
  NECESSARY: 'necessary',
  ANALYTICS: 'analytics',
  MARKETING: 'marketing',
  PREFERENCES: 'preferences',
};

// Social Links
export const SOCIAL_LINKS = {
  GITHUB: 'https://github.com/Chetannadig',
  LINKEDIN: 'https://in.linkedin.com/company/employwise',
  TWITTER: 'https://twitter.com/EmployWise',
  WEBSITE: 'https://employwise.com/',
};