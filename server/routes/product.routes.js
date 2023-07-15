const ProductController = require('../controllers/product.controller')
module.exports = function(app){
    app.get('/', ProductController.hello)
    app.get('/api/products', ProductController.getAll);
    app.get('/api/products/:id', ProductController.getOne);
    app.post('/api/products', ProductController.newProduct);    
    app.put('/api/products/:id', ProductController.updateOne);
    app.delete('/api/products/:id', ProductController.deleteOne);
}