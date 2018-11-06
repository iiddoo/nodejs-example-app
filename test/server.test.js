const request = require('supertest');
const { expect } = require('chai');

const server = require('../server');

const friend = {
    name: 'Test Friend',
    description: 'TestFriend description',
};

beforeEach(() => {
    process.env.MONGO_FRIENDS_COLLECTION = 'test-friends';
});

describe('Server', () => {
    describe('Server is up', () => {
        it('Should responds to /api', done => {
            request(server)
                .get('/api')
                .expect(200,done);
        });
        it('Should return 404 error', done => {
            request(server)
                .get('/whatever')
                .expect(404, done);
        });
    });

    describe('POST /api/friend', () => {
        it('Should add new friend', done => {
            request(server)
                .post('/api/friend')
                .send(friend)
                .expect(201)
                .expect(res => {
                    expect(res.body).to.include(friend);
                })
                .end(done);
        });
        it('Should NOT add new friend with invalid name', done => {
            request(server)
                .post('/api/friend')
                .send({
                    name: {},
                    description: 'Invalid name'
                })
                .expect(500, done);
        });
        it('Should NOT add new friend with invalid description', done => {
            request(server)
                .post('/api/friend')
                .send({
                    name: 'Invalid description',
                    description: {}
                })
                .expect(500, done);
        });
        it('Should NOT add new friend with missing name', done => {
            request(server)
                .post('/api/friend')
                .send({
                    description: 'Missing name'
                })
                .expect(500, done);
        });
        it('Should NOT add new friend with missing descritption', done => {
            request(server)
                .post('/api/friend')
                .send({
                    name: 45
                })
                .expect(500, done);
        });
    });
});