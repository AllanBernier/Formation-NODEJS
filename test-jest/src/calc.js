const evalExpr = (expr) => {
   
    if (expr.length > 1){
        var result = parseInt( expr.charAt(0))
        
        for (let i = 1; i < (expr.length - 1); i+=2) {
            var operateur = expr.charAt(i)
            var next = parseInt( expr.charAt(i+1))
            result = operation(result, operateur, next)
        }
        return result
    }

    return parseInt(expr);
}


const operation = (number_1, operateur, number_2) => {
    switch (operateur) {
        case '+':
            return number_1 + number_2;
        case '-':
            return number_1 - number_2;
        case '*':
            return number_1 * number_2;
        case '/':
            return number_1 / number_2;
        default:
            break;
    }
}


module.exports = {
    evalExpr
}