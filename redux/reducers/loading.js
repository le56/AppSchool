import { createSlice } from "@reduxjs/toolkit";

const Loading = createSlice({
    name:'Loading',
    initialState: false,
    reducers:{
        changeLoading(state, action){
            state = action.payload
        }
    }
})
export default Loading