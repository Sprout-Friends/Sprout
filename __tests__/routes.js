const assert = require('assert');
const supertest = require('supertest');
const app = require('../server/server.js');

const request = supertest(app);

describe('db tests', () => {
  describe('users table', () => {
    describe('POST - users/register', () => {
      it('successfully creates a new user', async () => {
        const userInfo = {
          username: 'TestUsername1',
          first_name: 'JarJar',
          last_name: 'Binks',
          password: 'aNewHope',
        };

        await request
          .post('/users/register')
          .send(userInfo)
          .expect(200)
          .expect('Content-Type', 'application/json; charset=utf-8')
          .then((res) => {
            const { username, first_name, last_name } = res.body;
            assert(username === userInfo.username);
            assert(first_name === userInfo.first_name);
            assert(last_name === userInfo.last_name);
          });
      });
    });
  });
});
