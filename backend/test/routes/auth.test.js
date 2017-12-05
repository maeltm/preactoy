import _ from 'lodash';
import assert from 'assert';
import supertest from 'supertest';
import app from '../../dist/app';

describe('route::auth', function() {
    let client;
    before(() => {
        client = supertest.agent(app);
    });

    describe('POST /auth/register', function() {
        it('should succeed to register a new user', function(done) {
            done();
            // client
            //     .post('/api/auth/register')
            //     .send({
            //         username: 'testUser',
            //         password: 'testPassword'
            //     })
            //     .expect(201)
            //     .expect('Content-Type', /json/)
            //     .expect((res) => {
            //         assert.equal(res.body.status, 'success');
            //         assert.ok(_.isString(res.body.token));
            //     })
            //     .end(done);
        });

        it('should fail with special character username', function(done) {
            client
                .post('/api/auth/register')
                .send({
                    username: '$$$$$',
                    password: 'testPassword'
                })
                .expect(400)
                .expect('Content-Type', /json/)
                .expect((res) => {
                    assert.equal(res.body.status, 'error');
                    assert.equal(res.body.message, 'bad username');
                })
                .end(done);
        });

        it('should fail with too short password', function(done) {
            client
                .post('/api/auth/register')
                .send({
                    username: 'testUser',
                    password: '0'
                })
                .expect(400)
                .expect('Content-Type', /json/)
                .expect((res) => {
                    assert.equal(res.body.status, 'error');
                    assert.equal(res.body.message, 'bad password');
                })
                .end(done);
        });

        it('should fail with already exist username');
    });

    describe('POST /auth/login', function() {
        it('should succeed to login');
        it('should fail with invalid password');
        it('should fail with not exist user');

        it('should fail with special character username', function(done) {
            client
                .post('/api/auth/login')
                .send({
                    username: '$$$$$',
                    password: 'testPassword'
                })
                .expect(400)
                .expect('Content-Type', /json/)
                .expect((res) => {
                    assert.equal(res.body.status, 'error');
                    assert.equal(res.body.message, 'bad username');
                })
                .end(done);
        });

        it('should fail with too short password', function(done) {
            client
                .post('/api/auth/login')
                .send({
                    username: 'testUser',
                    password: '0'
                })
                .expect(400)
                .expect('Content-Type', /json/)
                .expect((res) => {
                    assert.equal(res.body.status, 'error');
                    assert.equal(res.body.message, 'bad password');
                })
                .end(done);
        });
    });

    describe('GET /auth/me', function() {
        it('should succeed to get user info');
    });

    describe('GET /auth/logout', function() {
        it('should succeed to invalidate token');
    });


});
