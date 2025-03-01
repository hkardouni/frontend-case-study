import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import { api } from './api';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;