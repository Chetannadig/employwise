import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { STORAGE_KEYS } from '../../constants';

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  token: localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN),
  isAuthenticated: !!localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, action.payload);
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
    },
  },
});

export const { setToken, logout } = authSlice.actions;
export default authSlice.reducer;