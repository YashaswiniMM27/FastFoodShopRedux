import { ORDER_PIZZA } from "./pizzaType"

export function OrderPizza(number){
    return{
        type: ORDER_PIZZA,
        payload: number
    }
}