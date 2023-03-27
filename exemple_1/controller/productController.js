


const products = [
    {id:1, name:"Truc", price:108},
    {id:2, name:"Autre Truc", price:208},
    {id:3, name:"Bidule", price:508}
]
let maxId = 3

const getProducts = (req, res) =>{
    res.send(products)
}
const getProduct = (req, res) =>{
    const id = Number(req.params.id)
    const product = products.find(product => product.id === id)
    if (!product){
        res.status(404).send("Product not found")
    }
    res.json(product)
}
const createProduct = (req, res) =>{
    maxId++
    const newProduct = {
        id: maxId,
        name: req.body.name,
        price: req.body.price
    }
    products.push(newProduct)
    res.status(201).json(newProduct)
}
const updateProduct = (req, res) =>{
    const id = Number(req.params.id)
    const index = products.findIndex(product => product.id === id)
    const newProduct = {
        id: id,
        name: req.body.name,
        price: req.body.price
    }
    products[index] = newProduct
    res.send("Product Updated")
}

const deleteProduct = (req, res) =>{
    const id = Number(req.params.id)
    const index = products.findIndex(product => product.id === id)
    products.splice(index,1)
    res.send("Product Deleted")
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}