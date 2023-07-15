import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'

const ProductEdit = () => {
    const {id} = useParams();
    const navigator = useNavigate();
    const [product, setProduct] = useState({})
    const [formData, setFormData]= useState({})

    const getProduct = () => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res=>{
                setProduct(res.data)
                setFormData(res.data)
            })
            .catch(err=>console.log(err))
    }

    useEffect(getProduct,[])

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, formData)
            .then(res=>{
                console.log(res)
                setFormData({
                    title: "",
                    price: '',
                    description: ''
                })
                navigator(`/products/${id}`)
            }).catch(err=> console.log(err))
    }

    const handleChange = e => {
        const {name, value} = e.target
        setFormData((currentData)=>({...currentData, [name]:value}))
    }

    const deleteProduct = (productID) => {
        axios.delete(`http://localhost:8000/api/products/${productID}`)
            .then(res => {
                console.log(res)
                navigator('/products')
            }).catch(err=>console.log(err));
    }
    return (
        <div>
            <Link to={'/products'}>Back</Link>
            <hr/>
            <fieldset>
                <form onSubmit={handleSubmit}>
                    <label>Title: </label>
                    <input type="text" name='title' onChange={handleChange} value={formData.title} placeholder={product.title} />
                    <br/>
                    <label>Price </label>
                    <input type="number" min='0' step='0.01' name='price' onChange={handleChange} value={formData.price} placeholder={product.price} />
                    <br/>
                    <label>Description: </label>
                    <input type="text" name='description' onChange={handleChange} value={formData.description} placeholder={product.description} />
                    <br/>
                    <button>Update</button>
                </form>
            </fieldset>

            <p>{product.title}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <br/>
            <button onClick={(e)=>{deleteProduct(product._id)}}>
                Delete
            </button>
        </div>
    )
}

export default ProductEdit