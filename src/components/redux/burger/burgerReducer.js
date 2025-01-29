import { ORDER_BURGER } from "./burgerType"

const initialState = {
    burgerBuns: 2000
}

const burgerReducer = (state = initialState, action) => {
    switch(action.type){
        case ORDER_BURGER:
            return{
                ...state,
                burgerBuns: state.burgerBuns - (action.payload * 2)
            }
        default:
            return state
    }
}

export default burgerReducer;