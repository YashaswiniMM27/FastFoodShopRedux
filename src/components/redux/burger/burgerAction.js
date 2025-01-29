import { ORDER_BURGER } from "./burgerType";

export function OrderBurger(number){
    return{
        type: ORDER_BURGER,
        payload: number
    }
}