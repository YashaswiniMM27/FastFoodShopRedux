import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { burger_order } from './burgerSlice'
import { customer_choice } from '../burger/burgerSlice'

function BurgerView() {
    const [number, setNumber] = useState(0)
    

    const burgerBuns = useSelector(state => state.burger.burgerBuns)

    const dispatch = useDispatch()


    return (
        <div className='container'>
            <h2 className='text'>Number of Burger Buns available - {burgerBuns}</h2>
            <input type="number" className="input" placeholder="How many Burgers would you like?" value={number} onChange={(e) => {setNumber(e.target.value)}}/>
            <button className='btn' onClick={() => dispatch(customer_choice(number))} >Customer Choice</button>
            <button className='btn' onClick={() => dispatch(burger_order())} >Order Burger</button>
        </div>
    )
}

export default BurgerView