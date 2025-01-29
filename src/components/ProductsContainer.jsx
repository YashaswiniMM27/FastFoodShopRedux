import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from "./redux/products/productsAction"

function ProductsContainer() {

    const productsData = useSelector(state => state.products);
    console.log(productsData);
    

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    

    return (
        <div>
            {productsData.loading && <div>Loading...</div>}
            {productsData.error && <div style={{ color: "red" }}>Error: {productsData.error}</div>}
            {productsData.products && <div>{productsData.products.map((title, index) => <p key={index}>{title}</p>)}</div>}
        </div>
    )
}

export default ProductsContainer