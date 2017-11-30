import assert from 'assert';
import supertest from 'supertest';
import app from '../../dist/app';

describe('description', function() {
    describe('GET /does/not/exist', function() {
        it('should throw an error', function (done) {
            supertest.agent(app)
                .get('/does/not/exist')
                .expect(404)
                .expect('Content-Type', /json/)
                .expect((res) => {
                    assert.equal(res.body.status, 'error');
                    assert.equal(res.body.message, 'Not Found');
                })
                .end(done);
        });
    });
});
