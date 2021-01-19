import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface CounterState {
  user: object|null,
  selectedImage:string|null
}

const initialState: CounterState = {
  user: null,
  selectedImage:null
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<object>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    selectImage: (state, action: PayloadAction<string>) => {
      state.selectedImage = action.payload;
    },
    resetImage: (state) => {
      state.selectedImage = null;
    },
  },
});

export const { login,logout,selectImage,resetImage } = appSlice.actions;


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
// @ts-ignore
export const selectUser = (state: RootState) => state.app.user;
export const selectSelectedImage = (state: RootState) => state.app.selectedImage;

export default appSlice.reducer;
