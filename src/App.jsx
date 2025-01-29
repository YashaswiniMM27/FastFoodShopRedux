import PizzaBox from "./components/pizzaBox"
import { Provider } from "react-redux"
import store from "./components/redux/store"
import BurgerBox from "./components/burgerBox"
import ProductsContainer from "./components/ProductsContainer"


function App() {

  return (
    <>
    <Provider store={store}>
      <PizzaBox/>
      <BurgerBox/>
      <ProductsContainer/>
    </Provider>
    </>
  )
}

export default App
