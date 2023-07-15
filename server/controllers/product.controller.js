const Product = require('../models/product.model')
module.exports = {
    hello : (req, res) => {
        res.json({message: "Hello World"});
    },
    getAll: (req, res) => {
        Product.find()
            .then(products=>{res.json(products)})
            .catch(err=>res.status(400).json(err))
    },
    getOne: (req, res) => {
        Product.findOne({_id: req.params.id})
            .then(product=>{
                res.json(product)
            }).catch(err=>res.status(400).json(err))
    },
    newProduct: (req, res) => {
        Product.create(req.body)
        .then(newProduct => {
            res.json(newProduct)
        }).catch(err=>{
            res.status(400).json(err)
        })
    },
    updateOne: (req, res) => {
        Product.findOneAndUpdate(
                {_id: req.params.id}, 
                req.body,
                {new: true, runValidators: true} )
            .then(product=>{
                res.json(product)
            }).catch(err=>res.status(400).json(err))
    },
    deleteOne: (req, res) => {
        Product.deleteOne({_id: req.params.id})
            .then(product=>{
                res.json(product)
            }).catch(err=>res.status(400).json(err))
    }
}