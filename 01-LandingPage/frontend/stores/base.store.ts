import { configureStore } from '@reduxjs/toolkit'
import windowStore from './window.store'
import sideMenuStore from '@/stores/sideMenu.store'

export const store = configureStore({
  reducer: {
    ...windowStore.reducer,
    ...sideMenuStore.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
