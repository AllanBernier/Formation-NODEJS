const {app, server} = require('../app')
const request = require('supertest');


describe('Testing out api router', () => { 
    
    it('Should return status code 200 and score when GET /game/score', async function(){
        const res = await request(app).get("/game/score");

        expect(res.status).toEqual(200)
        expect(res.body.win).toEqual( expect.any(Number))
        expect(res.body.lose).toEqual( expect.any(Number))
        expect(res.body.tie).toEqual( expect.any(Number))
    });

    it('Should return status code 200 and score when PUT /game/score', async function(){
        const res = await request(app)
            .put("/game/score")
            .set('Accept', 'application/json')
            .send({win: 5, lose:3, tie: 1});

        expect(res.status).toEqual(200)
        expect(res.body.win).toEqual( 5)
        expect(res.body.lose).toEqual( 3)
        expect(res.body.tie).toEqual( 1)
    });


    it('Should return status code 404 and score when POST /game/action', async function(){
        const res = await request(app)
            .post("/game/action")
        expect(res.status).toEqual(404)
    });

    it('Should return status code 200 and containt my action in response when POST /game/pierre', async function(){
        const res = await request(app)
            .post("/game/pierre")
        expect(res.status).toEqual(201)
        expect(res.text).toContain("pierre")
    });


    afterAll( ()=>{
        server.close();
    });

 })