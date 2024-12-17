import { configureStore } from '@reduxjs/toolkit'
import savedReducer from '../features/saved/savedSlice';


export const store = configureStore({
    reducer: {
        saved: savedReducer,
    },
});