import { configureStore } from "@reduxjs/toolkit";
import pizzaReducer from '../feature/pizza/pizzaSlice'
import burgerReducer from '../feature/burger/burgerSlice'
import productReducer from '../feature/products/productSlice'

const store1 = configureStore({
    reducer:{
        pizza: pizzaReducer,
        burger: burgerReducer,
        product: productReducer
    }
})

export default store1