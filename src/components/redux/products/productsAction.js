import axios from "axios";
import { FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from "./productsType";

export function fetchRequest(){
    return{
        type: FETCH_REQUEST
    }
}

export function fetchSuccess(products){
    return{
        type: FETCH_SUCCESS,
        payload: products
    }
}

export function fetchError(error){
    return{
        type: FETCH_ERROR,
        payload: error
    }
}

export function fetchProducts(){
    return (dispatch) => {
        dispatch(fetchRequest())
        axios.get("https://fakestoreapi.com/products")
        .then(res => {
            const products = res.data.map(product => product.title)
            dispatch(fetchSuccess(products))
        })
        .catch(error => {
            const errorMessage = error.message;
            dispatch(fetchError(errorMessage));
            console.error("API Error:", errorMessage);
        })
    }
}