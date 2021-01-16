import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface CounterState {
    cameraImage: String|null;
}

const initialState: CounterState = {
    cameraImage: null,
};

export const cameraSlice = createSlice({
    name: 'camera',
    initialState,
    reducers: {
        setCameraImage: (state, action: PayloadAction<String|null>) => {
            state.cameraImage =action.payload;
        },
        resetCameraImage:(state)=>{
            state.cameraImage=null
        }
    },
});

export const { setCameraImage,resetCameraImage } = cameraSlice.actions;


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
// @ts-ignore
export const selectCameraImage = (state: RootState) => state.camera.cameraImage;

export default cameraSlice.reducer;
