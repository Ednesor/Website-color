import {createSlice} from "@reduxjs/toolkit";

type InitialStateType = {
    lang: string;
  }

const initialState= {
    lang: "english"
}

export const configSlice = createSlice({
    name: "config",
    initialState,
    reducers: {
        setLangEnglish: (state) => {
            state.lang = "english"
        },
        setLangSpanish: (state) => {
            state.lang = "spanish"
        }
    }
})

export const {setLangEnglish, setLangSpanish} = configSlice.actions;
export default configSlice.reducer;