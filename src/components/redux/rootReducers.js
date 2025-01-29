import { combineReducers } from "redux";
import pizzaReducer from "./pizza/pizzaReducer";
import burgerReducer from "./burger/burgerReducer";
import ProductReducer from "./products/productsReducer";

export const rootReducer = combineReducers(
    {
        pizza: pizzaReducer,
        burger: burgerReducer,
        products: ProductReducer
    }
)