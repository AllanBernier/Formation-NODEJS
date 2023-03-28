const app = require('../src/app')
const request = require('supertest');


describe('Testing our api router', () => { 
    
    beforeAll( ()=>{
        console.log("Before All")
    });

    afterAll( ()=>{
        console.log("After All")
    });

    beforeEach( ()=>{
        console.log("Before Each")
    });

    afterEach( ()=>{
        console.log("After Each")
    });


    it('It should return 200 on GET /', () => {
        return request(app)
            .get("/")
            .expect(200)
            .expect(function(res) {
                res.body = 'Hello World';
              })
    });

    it('It should return Json on GET /json', async function() {
        const response = await request(app)
            .get('/json')
            .set('Accept', 'application/json')

            expect(response.status).toBe(200);
            expect(response.body.name).toBe('Hello World');
    });
});