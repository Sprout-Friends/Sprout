const assert = require('assert');
const supertest = require('supertest');
const app = require('../server/server.js');
const db = require('../server/models/plantModels.js');

const request = supertest(app);

describe('db tests', () => {
  let userStore;
  let plantStore;

  // clear all database rows before starting
  beforeAll(async (done) => {
    await db.query('DELETE FROM posts');
    await db.query('DELETE FROM session');
    await db.query('DELETE FROM plants');
    await db.query('DELETE FROM users');
    await db.query('DELETE FROM relationships');
    done();
  });

  // clear all database rows after finishing
  afterAll(async (done) => {
    await db.query('DELETE FROM posts');
    await db.query('DELETE FROM session');
    await db.query('DELETE FROM plants');
    await db.query('DELETE FROM users');
    await db.query('DELETE FROM relationships');
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
            plantStore = res.body;
            assert(plantStore.length === 2);
          });
      });
    });

    describe('GET', () => {
      it('successfully get 2 plants for user', async () => {
        await request
          .get('/plants')
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

    describe('DELETE', () => {
      it('successfully delete 1 plant for user', async () => {
        await request
          .delete('/plants')
          .set({ userid: userStore._id, plantid: plantStore[0]._id })
          .send()
          .expect(200)
          .expect('Content-Type', 'application/json; charset=utf-8')
          .then((res) => {
            console.log(plantStore[0]._id);
            plantStore = res.body;
            console.log(plantStore);
            assert(plantStore.length === 1);
          });
      });
    });
  });
});
