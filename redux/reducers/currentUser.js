import {createSlice} from "@reduxjs/toolkit"

const currentUser = createSlice({
    name:'user',
    initialState: null,
    reducers:{
        addCurrentUser(state, action){
            state = action.payload
        }
    }
}) 

export default currentUser;