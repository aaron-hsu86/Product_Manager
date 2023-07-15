import React, {useState} from 'react'
import axios from 'axios'

const ProductForm = (props) => {
    const {createProduct} = props
    const [ formData, setFormData ] = useState({
        title: "",
        price: '',
        description: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', formData)
            .then(res=>{
                console.log(res)
                setFormData({
                    title: "",
                    price: '',
                    description: ''
                })
                // reroute back to main to refresh data
                createProduct();
            }).catch(err=> console.log(err))
    }

    const handleChange = e => {
        const {name, value} = e.target
        setFormData((currentData)=>({...currentData, [name]:value}))
    }


    return (
        <>
            <fieldset>
                <form onSubmit={handleSubmit}>
                <label>Title: </label>
                <input type="text" name='title' onChange={handleChange} value={formData.title} />
                <br/>
                <label>Price </label>
                <input type="number" min='0' step='0.01' name='price' onChange={handleChange} value={formData.price} />
                <br/>
                <label>Description: </label>
                <input type="text" name='description' onChange={handleChange} value={formData.description} />
                <br/>
                <button>Create</button>
                </form>
            </fieldset>
        </>
    )
}

export default ProductForm