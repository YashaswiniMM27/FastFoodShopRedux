import { combineReducers } from "redux";
import pizzaReducer from "./pizza/pizzaReducer";
import burgerReducer from "./burger/burgerReducer";

export const rootReducer = combineReducers(
    {
        pizza: pizzaReducer,
        burger: burgerReducer
    }
)