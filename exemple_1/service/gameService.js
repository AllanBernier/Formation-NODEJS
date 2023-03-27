const score = {
    win : 0,
    lose : 0,
    tie : 0
}

const listPlays = ["pierre","feuille","sciseaux"]

const getScore = () => {
    return score
}

const updateScore = (win, lose, tie) => {
    score.win = win
    score.lose = lose
    score.tie = tie
    return score
}

const play = (action) => {


    const ind_j = listPlays.indexOf(action)
    const ind_s = Math.floor( Math.random() * 3)
    const act_s = listPlays[ind_s]

    let result = ""

    if (ind_j == ind_s){
        result = "égalité"
    } else {
        if ((ind_j + 1) % 3 == ind_s){
            result = "défaite"
        } else{
            result = "victoire"
        }    
    }
    return "Vous avez jouer " + action + ", le serveur a jouer " + act_s + " vous avez fait '"+ result +"'"

}



module.exports = {
    getScore,
    updateScore,
    play
}