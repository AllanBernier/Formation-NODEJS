
const service = require("../service/gameService")

const getScore = (req, res) =>{
    res.json( service.getScore() )
}
const play = (req, res) =>{
    res.send(service.play(req.params.action))
}
const updateScore = (req, res) =>{

    let score = service.updateScore(
        req.body.win,
        req.body.lose,
        req.body.tie
    ) 

    res.json(score)
}
const resetScore = (req, res) =>{
    service.updateScore(0,0,0) 
    res.send("Reset score")
}


module.exports = {
    getScore,
    play,
    updateScore,
    resetScore
}