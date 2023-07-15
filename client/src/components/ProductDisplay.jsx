import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'

const ProductDisplay = () => {
    const {id} = useParams();
    const navigator = useNavigate();

    const [product, setProduct]= useState({})

    const getProduct = () => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res=>{setProduct(res.data)})
            .catch(err=>console.log(err))
    }

    useEffect(getProduct,[])

    return (
        <div>
            <Link to={'/products'}>Back</Link>
            <hr/>
            <p>{product.title}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    )
}

export default ProductDisplay