import { useDispatch, useSelector } from "react-redux";
import { OrderBurger } from "./redux/burger/burgerAction";
import { useState } from "react";

function BurgerBox() {
    const [number, setNumber] = useState(0)

    const burgerBuns = useSelector(state => state.burger.burgerBuns)

    const dispatch = useDispatch();

    return (
        <div className='container'>
            <h2 className="text">Number of Burger buns available - {burgerBuns}</h2>
            <input type="number" className="input" placeholder="How many Burgers would you like?" value={number} onChange={e => setNumber(e.target.value)} />
            <button className="btn" onClick={() => {dispatch(OrderBurger(Number(number)))}}>Order Burger</button>
        </div>
    )
}
export default BurgerBox;