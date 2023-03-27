const express = require("express")
const router = express.Router()

const {
    getScore,
    play,
    updateScore,
    resetScore
} = require("../controller/gameController");


router.get('/score', getScore)

router.post('/:action', play)

router.put('/score', updateScore)

router.delete('/score', resetScore)

module.exports = router

