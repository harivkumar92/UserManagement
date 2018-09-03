const request = require("supertest");
const app = require("../app");

describe('GET /role', function(){
    it('respond with a JSON list of user records', function(done){
        request(app)
        .get('/role')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
        });
    });

//Check role_name must be provided condition
describe('POST /role', function () {
    var data = {
        "role_status": "inactive"
    };
    it('respond with password required', function (done) {
        request(app)
            .post('/role')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(203)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

//Check new role created
describe('POST /role', function () {
    var data = {
        "role_name": "Admin",
        "role_status": "inactive"
    };
    it('respond with password required', function (done) {
        request(app)
            .post('/role')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

describe('GET /role/:id', function () {
    it('respond with json record not found', function (done) {
        request(app)
            .get('/role/someid')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404) //expecting HTTP status code
            .expect('{"Message":"Searching for record","Record":"There is no record by that id"}') // expecting content value
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

//Get if id is present
describe('GET /role/:id', function () {
    it('respond with json record not found', function (done) {
        request(app)
            .get('/role/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200) //expecting HTTP status code
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

//Patch If id='1' is available
describe('PATCH /role/:id', function () {
    var data = {
        "role_name": "Admin",
        "role_status": "inactive" 
    };
    it('respond with json record not found', function (done) {
        request(app)
            .patch('/role/1')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200) //expecting HTTP status code
            .expect('{"Message":"Record updated"}') // expecting content value
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

//Patch If id is not available
describe('PATCH /role/:id', function () {
    var data = {
        "role_name": "Admin",
        "role_status": "inactive" 
    };
    it('respond with json record not found', function (done) {
        request(app)
            .patch('/role/someid')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404) //expecting HTTP status code
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

//Delete if user id is present
describe('DELETE /role/:idpresent', function () {
    it('respond with json record not found', function (done) {
        request(app)
            .get('/role/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200) //expecting HTTP status code
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

//Delete if user id is not present
describe('DELETE /role/:idnotpresent', function () {
    it('respond with json record not found', function (done) {
        request(app)
            .get('/role/someid')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404) //expecting HTTP status code
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});