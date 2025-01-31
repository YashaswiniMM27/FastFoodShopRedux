import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { customer_choice, pizza_order } from './pizzaSlice'

function PizzaView() {
    const [number, setNumber] = useState(0)

    const pizzaBase = useSelector(state => state.pizza.pizzaBase)

    const dispatch = useDispatch()

    return (
        <div className='container'>
            <h2 className='text'>Number of Pizza Base available - {pizzaBase}</h2>
            <input type="number" className="input" placeholder="How many Pizzas would you like?" value={number} onChange={(e) => {setNumber(e.target.value)}}/>
            <button className='btn' onClick={() => dispatch(customer_choice(number))} >Customer Choice</button>
            <button className='btn' onClick={() => dispatch(pizza_order())}>Order Pizza</button>
        </div>
    )
}

export default PizzaView