import {configureStore} from '@reduxjs/toolkit'
import currentUser from './reducers/currentUser'

export default store = configureStore({
    reducer:{
        currentUser: currentUser.reducer
    }
})