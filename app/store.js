import { configureStore } from "@reduxjs/toolkit";
import pizzaReducer from '../feature/pizza/pizzaSlice'
import burgerReducer from '../feature/burger/burgerSlice'

const store1 = configureStore({
    reducer:{
        pizza: pizzaReducer,
        burger: burgerReducer
    }
})

export default store1