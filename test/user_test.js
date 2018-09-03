const request = require("supertest");
const app = require("../app");

describe('GET /user', function(){
    it('respond with a JSON list of user records', function(done){
        request(app)
        .get('/user')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
        });
    });

//if ID is not present
describe('GET /user/:id', function () {
    it('respond with json record not found', function (done) {
        request(app)
            .get('/user/someid')
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

//if ID=1 is present
describe('GET /user/:id', function () {
    it('respond with json record not found', function (done) {
        request(app)
            .get('/user/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200) //expecting HTTP status code
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

//Check password cannot be NULL condition
describe('POST /user', function () {
    var data = {
        "user_email": "emaildummy",
        "user_phone": "512231"
    };
    it('respond with password required', function (done) {
        request(app)
            .post('/user')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(203)
            .expect('{"Message":"Error while inserting record","Input":"user_password cannot be null"}')
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

describe('POST /user', function () {
    var data = {
        "user_email": "emaildummy",
        "user_phone": "512231",
        "user_password": "passdummy"
    };
    it('respond with password required', function (done) {
        request(app)
            .post('/user')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .expect('{"Message":"New user created","Record":{"user_email":"emaildummy","user_phone":"512231","user_password":"passdummy"}}')
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

//Patch If id='1' is available
describe('PATCH /user/:id', function () {
    var data = {
        "user_email": "emaildummy",
        "user_phone": "512231",
        "user_password": "asdas"
    };
    it('respond with json record not found', function (done) {
        request(app)
            .patch('/user/1')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200) //expecting HTTP status code
            .expect('{"Message":"Record updated with hashed password"}') // expecting content value
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

//Patch if id is not available
describe('PATCH /user/:id', function () {
    var data = {
        "user_email": "emaildummy",
        "user_phone": "512231",
        "user_password": "asdas"
    };
    it('respond with json record not found', function (done) {
        request(app)
            .patch('/user/someid')
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

//Patch if id='1' is available, and password is NULL
describe('PATCH /user/:id', function () {
    var data = {
        "user_email": "emaildummy",
        "user_phone": "512231",
        "user_password": ""
    };
    it('respond with json record not found', function (done) {
        request(app)
            .patch('/user/1')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(203) //expecting HTTP status code
            .expect('{"Message":"Error while inserting record","Input":"user_password cannot be null"}')
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

//Delete if user id is present
describe('DELETE /user/:idpresent', function () {
    it('respond with json record not found', function (done) {
        request(app)
            .get('/user/1')
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
describe('DELETE /user/:idnotpresent', function () {
    it('respond with json record not found', function (done) {
        request(app)
            .get('/user/someid')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404) //expecting HTTP status code
            .expect('{"Message":"Searching for record","Record":"There is no record by that id"}')
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});