
const Product = require("../model/Product")


const showView = (req, res) =>{
    const product = Product.find()
    .then((result) => res.render("showProduct", {products: result}))
    .catch((err) => res.render("showProduct", {message: "product not found"}));
}

const editView = (req, res) =>{

    const product = Product.findById(req.params.id)
    .then((result) => res.render("editProduct", {model: result}))
    .catch((err) => res.render("editProduct", {message: "product not found"}));
}

const createView = (req, res) =>{
    res.render("createProduct", {model: {}})    
}

const deleteView = (req, res) =>{
    res.render("deleteProduct", {model: {id: req.params.id}})    
}

const addProduct = (req, res) => {

    console.log(req.body)

    Product.create(req.body)
    .then((result) => res.redirect('/show') )
    .catch((err) => res.redirect('/create') )
}


module.exports = {
    showView,
    deleteView,
    createView,
    editView,
    addProduct
}