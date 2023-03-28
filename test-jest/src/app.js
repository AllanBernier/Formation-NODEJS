const express = require("express")
const app = express()



app.listen(3000, () =>{
    console.log("App listening on port 3000 !")
})

app.get("/", (req, res) =>{
    res.status(200).send("Hello World")
})

app.get("/json", (req, res) =>{
    res.status(200).json({name:"Hello World"})
})

module.exports = app