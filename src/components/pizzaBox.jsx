import { useSelector, useDispatch } from "react-redux"
import { OrderPizza } from "./redux/pizza/pizzaActions"
import { useState } from "react";

function PizzaBox() {
    const [number, setNumber] = useState(0)

    const pizzaBase = useSelector(state => state.pizza.pizzaBase);

    const dispatch = useDispatch();

    return (
        <div className='container'>
            <h2 className="text">Number of pizza bases available - {pizzaBase}</h2>
            <input type="number" className="input" placeholder="How many Pizzas would you like?" value={number} onChange={e => setNumber(e.target.value)} />
            <button className="btn" onClick={() => {dispatch(OrderPizza(Number(number)))}}>Order Pizza</button>
        </div>
    )
}
export default PizzaBox;