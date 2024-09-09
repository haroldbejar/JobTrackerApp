import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import applicationReducer from "./slices/ApplicationsSlices";
import authReducer from "./slices/AuthSlice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["usernane", "isAuthenticated"],
};

const persistConfig = {
  key: "root",
  storage,
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedReducer = persistReducer(persistConfig, applicationReducer);

export const store = configureStore({
  reducer: {
    applications: persistedReducer,
    auth: persistedAuthReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
