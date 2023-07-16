import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ProductList = (props) => {
    // functio to remove from display, not db
    const {removeFromDom} = props

    const deleteProduct = (productID) => {
        axios.delete(`http://localhost:8000/api/products/${productID}`)
            .then(res => {
                removeFromDom(productID)
            }).catch(err=>console.log(err));
    }

    return (
        <>
            <h2>All Products:</h2>
            {
                props.products.map((product,idx) => {
                    return <p key={idx}>
                        <Link to={'/products/'+product._id}>
                            {product.title} - ${product.price}
                        </Link>
                        ---
                        <Link to={`/products/${product._id}/edit`}>
                            <button>Edit</button>
                        </Link>
                        ---
                        <button onClick={(e)=>{deleteProduct(product._id)}}>
                            Delete
                        </button>
                    </p>
                })
            }
        </>
    )
}

export default ProductList