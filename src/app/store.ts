import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import appReducer from '../features/counter/appSlice';
import cameraReducer from "../features/camera/cameraSlice";
export const store = configureStore({
  reducer: {
    app: appReducer,
    camera:cameraReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
