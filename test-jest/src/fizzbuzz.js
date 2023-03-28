const play = (number) => {
    let res = ""

    if (number % 3 == 0){
        res += "fizz"
    }
    if (number % 5 == 0){
        res += "buzz"
    }

    return res ? res : number
}


module.exports = {
    play
}