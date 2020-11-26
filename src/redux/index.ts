import { configureStore, combineReducers } from '@reduxjs/toolkit';

import actions from './actions';

const combinedReducers = combineReducers({ actions });

export const store = configureStore({
  reducer: combinedReducers,
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof combinedReducers>;
