import { createSlice } from "@reduxjs/toolkit";
import { pizza_order } from "../pizza/pizzaSlice";

const initialState = {
    burgerBuns: 2000
}

const burgerSlice = createSlice({
    name: 'burger',
    initialState,
    reducers:{
        burger_order: (state) => {
            state.burgerBuns -= 2
        },
        customer_choice: (state, action) => {
            state.burgerBuns -= (action.payload * 2)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(pizza_order, (state) => {
            state.burgerBuns -= 2
        })
    }
})

export default burgerSlice.reducer
export const {burger_order, customer_choice} = burgerSlice.actions