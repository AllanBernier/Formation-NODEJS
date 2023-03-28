
const express = require("express")
const app = express()
const product_router = require('./router/productRouter')
const task_router = require('./router/taskRouter')
const game_router = require('./router/gameRouter')

const server = app.listen(3000, () => {
    console.log("App listening on port 3000 !")
})

app.use(express.json())

app.use('/product',product_router)
app.use('/task',task_router)
app.use('/game',game_router)



module.exports = {
    app,
    server 
}























