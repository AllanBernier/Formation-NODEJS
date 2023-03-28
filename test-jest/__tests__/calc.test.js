const calc = require("../src/calc")

describe('Test de la methore evalExpr', () => { 
    
    it('Should return 1 when send 1', () => {
        expect(calc.evalExpr('1')).toBe(1)
    })

    it('Should return 8 when send 8', () => {
        expect(calc.evalExpr('8')).toBe(8)
    })

    it('Should return 2 when send 1+1 ', () => {
        expect(calc.evalExpr('1+1')).toBe(2)
    })
    it('Should return 10 when send 1+9 ', () => {
        expect(calc.evalExpr('1+9')).toBe(10)
    })

    it('Should return 5 when send 8-3 ', () => {
        expect(calc.evalExpr('8-3')).toBe(5)
    })

    it('Should return 15 when send 5-3 ', () => {
        expect(calc.evalExpr('5*3')).toBe(15)
    })

    it('Should return 2 when send 6/3 ', () => {
        expect(calc.evalExpr('6/3')).toBe(2)
    })

    it('Should return 10 when send 6+3+1 ', () => {
        expect(calc.evalExpr('6+3+1')).toBe(10)
    })

    it('Should return 18 when send 6*3/1 ', () => {
        expect(calc.evalExpr('6*3/1')).toBe(18)
    })

    it('Should return 10 when send 8-3+5 ', () => {
        expect(calc.evalExpr('8-3+5')).toBe(10)
    })

    it('Should return 9 when send 8-3+5+7+1/2 ', () => {
        expect(calc.evalExpr('8-3+5+7+1/2')).toBe(9)
    })

    it('Should return 50 when send 8*3*4+5-1/2 ', () => {
        expect(calc.evalExpr('8*3*4+5-1/2')).toBe(50)
    })

    it('Should return undefined when send 8.8 ', () => {
        expect(calc.evalExpr('8.8')).toBe(undefined)
    })

}); 