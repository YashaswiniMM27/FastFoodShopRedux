import PizzaBox from "./components/pizzaBox"
import { Provider } from "react-redux"
import store from "./components/redux/store"
import BurgerBox from "./components/burgerBox"


function App() {

  return (
    <>
    <Provider store={store}>
      <PizzaBox/>
      <BurgerBox/>
    </Provider>
    </>
  )
}

export default App
