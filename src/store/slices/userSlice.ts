import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  job?: string;
  department?: string;
  location?: string;
}

interface UserState {
  users: User[];
  totalPages: number;
  currentPage: number;
  loading: boolean;
  error: string | null;
  hasMore: boolean;
}

const initialState: UserState = {
  users: [],
  totalPages: 1,
  currentPage: 1,
  loading: false,
  error: null,
  hasMore: true,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<{ users: User[]; total_pages: number }>) => {
      // Append new users instead of replacing
      const newUsers = action.payload.users.map(user => ({
        ...user,
        job: ['Software Engineer', 'Product Manager', 'UI Designer', 'Data Analyst'][
          Math.floor(Math.random() * 4)
        ],
        department: ['Engineering', 'Product', 'Design', 'Analytics'][
          Math.floor(Math.random() * 4)
        ],
        location: ['New York', 'London', 'Singapore', 'Berlin'][
          Math.floor(Math.random() * 4)
        ],
      }));
      
      // Filter out duplicates when appending
      const existingIds = new Set(state.users.map(user => user.id));
      const uniqueNewUsers = newUsers.filter(user => !existingIds.has(user.id));
      state.users = [...state.users, ...uniqueNewUsers];
      
      state.totalPages = action.payload.total_pages;
      state.hasMore = state.currentPage < action.payload.total_pages;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    updateUser: (state, action: PayloadAction<User>) => {
      const index = state.users.findIndex(user => user.id === action.payload.id);
      if (index !== -1) {
        // Preserve additional fields when updating
        const existingUser = state.users[index];
        state.users[index] = {
          ...existingUser,
          ...action.payload,
        };
      }
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
    resetUsers: (state) => {
      state.users = [];
      state.currentPage = 1;
      state.hasMore = true;
    },
  },
});

export const {
  setUsers,
  setCurrentPage,
  setLoading,
  setError,
  updateUser,
  deleteUser,
  resetUsers,
} = userSlice.actions;
export default userSlice.reducer;