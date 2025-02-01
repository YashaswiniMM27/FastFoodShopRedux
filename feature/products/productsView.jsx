import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from './productSlice'

function ProductsView() {

    const productsData = useSelector(state => state.product)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <div className='container'>
            <h2>List of Product Titles</h2>
            {productsData.loading && <div>Loading...</div>}
            {productsData.error && <div style={{ color: "red" }}>Error: {productsData.error}</div>}
            {productsData.products && <div>{productsData.products.map((title, index) => <li key={index}>{title}</li>)}</div>}
        </div>
    )
}

export default ProductsView