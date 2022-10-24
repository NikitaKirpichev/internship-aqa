const supertest = require('supertest');
const { expect } = require('chai');

const request = supertest('https://catfact.ninja/');

describe('Catfact API test', function(){

    describe('/fact path', () => {
        it('GET /fact', () =>{
            return request.get('fact').then((res) => {
                expect(res.body).to.not.empty;
                
                expect(res.body.fact).to.not.be.empty;
                expect(res.body.fact).to.be.a('string');
    
                expect(res.body.length).to.be.a('number');
                expect(res.body.length).to.be.above(0);
            })
        })
    
        it('GET /fact (with query params)', () => {
            return request.get('fact?max_length=500').then((res) =>{
                expect(res.body).to.not.empty;
                
                expect(res.body.fact).to.not.be.empty;
                expect(res.body.fact).to.be.a('string');
    
                expect(res.body.length).to.be.a('number');
                expect(res.body.length).to.be.above(0);
            })
        })
    
        it('GET /fact (with wrong query params)', () => {
            return request.get('fact?max_length=0').then((res) => {
                expect(res.body).to.be.empty;
            })
        })
    })
    
    describe('/facts path', () => {
        it('GET /facts', () => {
            return request.get('facts').then((res) =>{
                expect(res.body).to.not.be.empty;
    
                expect(res.body.data).to.not.be.empty;
                expect(res.body.data).to.be.a('array');
            })
        })
    
        it('GET /facts (with query params)', () => {
            return request.get('facts?max_length=500&limit=500').then((res) =>{
                expect(res.body).to.not.be.empty;
    
                expect(res.body.data).to.not.be.empty;
                expect(res.body.data).to.be.a('array');
            })
        })
        


        describe('GET /facts (with wrong query params)',() => {

            it('1st test', () => {
                return request.get('facts?max_length=0&limit=0').then((res) => {
                    expect(res.status).equal(500)
                })
            })

            it('2nd test', () => {
                return request.get('facts?max_length=500&limit=0').then((res) => {
                    expect(res.status).equal(500)
                })
            })

            it('3rd test', () => {
                return request.get('facts?max_length=0&limit=500').then((res) => {
                    expect(res.body).to.not.be.empty;
                    expect(res.body.data).to.be.empty;
                })
            })

        })

    })

    describe('/breeds path', () => {
        it('/GET breed', () => {
            return request.get('breeds').then((res) => {
                expect(res.body).to.not.be.empty;
                expect(res.body.data).to.not.be.empty;
                expect(res.body.data).to.be.a('array');
            })
        })

        it('/GET breed (with query params)', () => {
            return request.get('breeds?limit=50').then((res) => {
                expect(res.body).to.not.be.empty;
                expect(res.body.data).to.not.be.empty;
                expect(res.body.data).to.be.a('array');
            })
        })

        it('/GET breed (with wrong query params)', () => {
            return request.get('breeds?limit=-1').then((res) => {
                expect(res.body).to.not.be.empty;
                expect(res.body.code).equal(404);
            })
        })
    })


    describe('Negative tests', function(){
        it('404 error', function(){
            return request.get('wrong_path').then((res) => {
                expect(res.body.message).equal('Not Found')
                expect(res.body.code).equal(404)
            })
        })
    })
})