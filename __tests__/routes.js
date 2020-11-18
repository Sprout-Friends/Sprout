const assert = require('assert');
const supertest = require('supertest');
const app = require('../server/server.js');
const db = require('../server/models/plantModels.js');

const request = supertest(app);

describe('db tests', () => {
  let userStore;

  // clear all database rows before starting
  beforeAll(async (done) => {
    await db.query('DELETE FROM session');
    await db.query('DELETE FROM plants');
    await db.query('DELETE FROM users');
    await db.query('DELETE FROM relationships');
    await db.query('DELETE FROM posts');
    done();
  });

  // clear all database rows after finishing
  afterAll(async (done) => {
    await db.query('DELETE FROM session');
    await db.query('DELETE FROM plants');
    await db.query('DELETE FROM users');
    await db.query('DELETE FROM relationships');
    await db.query('DELETE FROM posts');
    done();
  });

  describe('users table', () => {
    describe('POST - users/register', () => {
      it('successfully creates a new user', async () => {
        const userInfo = {
          email: 'test@starwars.com',
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
            const { email, first_name, last_name } = res.body;
            userStore = res.body;
            assert(email === userInfo.email);
            assert(first_name === userInfo.first_name);
            assert(last_name === userInfo.last_name);
          });
      });
    });

    describe('GET - users/login', () => {
      it('successfully logs in a user', async () => {
        const userInfo = {
          email: 'test@starwars.com',
          password: 'aNewHope',
        };
        await request
          .get('/users/login')
          .set(userInfo)
          .expect(200)
          .expect('Content-Type', 'application/json; charset=utf-8')
          .then((res) => {
            const { email, first_name, last_name } = res.body;
            assert(email === userInfo.email);
            assert(first_name === 'JarJar');
            assert(last_name === 'Binks');
          });
      });
    });
  });

  // THIS IS IN PROGRESS
  describe('plants table', () => {
    describe('POST', () => {
      it('successfully add 2 new plants', async () => {
        await request
          .post('/plants')
          .set({ userid: userStore._id })
          .send()
          .expect(200);
        await request
          .post('/plants')
          .set({ userid: userStore._id })
          .send()
          .expect(200)
          .expect('Content-Type', 'application/json; charset=utf-8')
          .then((res) => {
            const plantArray = res.body;
            assert(plantArray.length === 2);
          });
      });
    });
  });
});
