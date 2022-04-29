import {configureStore} from '@reduxjs/toolkit'
import currentUser from './reducers/currentUser'
import Loading from './reducers/loading'

export default store = configureStore({
    reducer:{
        currentUser: currentUser.reducer,
        loading: Loading.reducer,
    }
})