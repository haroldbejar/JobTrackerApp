import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface AuthState {
  isAuthenticated: boolean;
  username: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  username: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ username: string; password: string }>
    ) => {
      const { username, password } = action.payload;

      const storedUser = localStorage.getItem("user");
      const user = storedUser ? JSON.parse(storedUser) : null;

      if (user && user.username === username && user.password === password) {
        state.isAuthenticated = true;
        state.username = username;
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.username = null;
    },
    register: (
      state,
      action: PayloadAction<{ username: string; password: string }>
    ) => {
      const { username, password } = action.payload;

      localStorage.setItem("user", JSON.stringify({ username, password }));
      state.isAuthenticated = true;
      state.username = username;
    },
  },
});

export const { login, logout, register } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
