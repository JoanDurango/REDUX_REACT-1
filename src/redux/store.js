import { configureStore } from '@reduxjs/toolkit';
import { counterReducer, userReducer } from './slice';

//Crear el store
const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer
    }
});

export default store;