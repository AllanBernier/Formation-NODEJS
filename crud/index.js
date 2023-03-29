const express = require("express")
const app = express()
const path = require("path")
const product_router = require("./router/productRouter")
const mongoose = require("mongoose")
require("dotenv").config()
const cors = require("cors");



mongoose.connect(process.env.MONGO_URI)
.then((result) => app.listen(process.env.PORT, ()=>{
    console.log("App listening on port 3000 !")
}))
.catch((err) => console.log("Connected to db failed"))
const corsOption = {
    origin: ['http://localhost:5432'],
};

app.use(cors(corsOption))


app.set("view engine", "ejs")
app.set("views", path.join(__dirname,"views") )
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.use(product_router)