import { configureStore } from "@reduxjs/toolkit";
import configReducer from "./features/configSlice";

export const store = configureStore({
    reducer: {
        configReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch