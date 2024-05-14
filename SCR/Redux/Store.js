import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/Counterslice';
import userReducer from './slices/UserSlice';
import { createEntityAdapter } from '@reduxjs/toolkit';
import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQuery } from '@reduxjs/toolkit/query';

const usersAdapter = createEntityAdapter();

const initialState = usersAdapter.getInitialState();

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users',
      transformResponse: (response) => usersAdapter.setAll(initialState, response),
    }),
  }),
});

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

export default store;