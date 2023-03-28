const fizzbuzz = require("../src/fizzbuzz")


describe('Test de la metchode fizz buzz', () => { 
    
    it('Should return 1 when send 1', () => {
        // when( fizzbuzz.play( any.Number ) ).thenReturn("fizz")
        expect(fizzbuzz.play(1)).toBe(1)
    })
    it('Should return 8 when send 8', () => {
        expect(fizzbuzz.play(8)).toBe(8)
    })
    it('Should return fizz when send 3', () => {
        expect(fizzbuzz.play(3)).toBe("fizz")
    })
    it('Should return fizz when send 3', () => {
        expect(fizzbuzz.play(3)).toBe("fizz")
    })
    it('Should return fizz when send 12', () => {
        expect(fizzbuzz.play(12)).toBe("fizz")
    })
    it('Should return buzz when send 5', () => {
        expect(fizzbuzz.play(5)).toBe("buzz")
    })
    it('Should return buzz when send 10', () => {
        expect(fizzbuzz.play(10)).toBe("buzz")
    })
    it('Should return buzz when send 15', () => {
        expect(fizzbuzz.play(15)).toBe("fizzbuzz")
    })
    it('Should return buzz when send 45', () => {
        expect(fizzbuzz.play(45)).toBe("fizzbuzz")
    })
})