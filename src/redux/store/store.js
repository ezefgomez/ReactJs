import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter'
import { cartReducer } from '../../components/CartReducer/CartReducer';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        cart: cartReducer,
    },
})