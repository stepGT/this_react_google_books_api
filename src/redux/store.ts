import { configureStore } from '@reduxjs/toolkit';
import books from '@redux/features/booksSlice';
import search from '@redux/features/searchSlice';

export const store = configureStore({
  reducer: { books, search },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
