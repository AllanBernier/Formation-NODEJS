const express = require("express")
const router = express.Router()
const {    
    showView,
    deleteView,
    createView,
    editView,
    addProduct } = require("../controller/productController")



router.get("/", (req, res)=>{
    res.render("index")
})

router.get("/show", showView)
router.get("/edit/:id", editView)
router.get("/create", createView)
router.get("/delete/:id", deleteView)

router.use(express.json())
router.post("/create", addProduct)
router.post("/delete/:id", deleteProduct)
router.post("/edit/:id", editProduct)


module.exports = router