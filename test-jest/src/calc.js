const evalExpr = (expr) => {
   
    if (expr.length > 1){

        var number_1 = parseInt( expr.charAt(0))
        var number_2 = parseInt( expr.charAt(2))
        var operateur = expr.charAt(1)

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

    return parseInt(expr);
}

module.exports = {
    evalExpr
}