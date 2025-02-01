import PizzaBox from "./components/pizzaBox"
import { Provider } from "react-redux"
import store from "./components/redux/store"
import BurgerBox from "./components/burgerBox"
import ProductsContainer from "./components/ProductsContainer"
import PizzaView from "../feature/pizza/pizzaView"
import BurgerView from "../feature/burger/burgerView"
import store1 from "../app/store"
import ProductsView from "../feature/products/productsView"


function App() {

  return (
    <>
    {/* Store using plain redux */}
    <Provider store={store}>
      <PizzaBox/>
      <BurgerBox/>
      <ProductsContainer/>
    </Provider>


  {/* Store using redux toolkit*/}
    <Provider store={store1}>
      <PizzaView/>
      <BurgerView/>
      <ProductsView/>
    </Provider>
    </>
  )
}

export default App
