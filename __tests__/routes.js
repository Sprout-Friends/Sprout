const request = require('supertest');
const assert = require('assert');
const app = require('../server/server.js');
const db = require('../server/models/plantModels.js');

const server = 'http://localhost:3000';

describe('db unit tests', () => {
  describe('/', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', () => request(server)
        .get('/')
        .expect('Content-Type', /text\/html/)
        .expect(200));
    });
  });

  // describe('users table', () => {
  //   it('successfully creates a new user', () => {
  //     const userInfo = expect(2 + 2).toEqual(4);
  //   });
  // });

  // describe('check 2+2', () => {
  //   it('writes a valid marketList to the JSON file', () => {
  //     expect(2 + 2).toEqual(4);
  //   });
  // });

  // describe('check 2+2', () => {
  //   it('writes a valid marketList to the JSON file', () => {
  //     expect(2 + 2).toEqual(4);
  //   });
  // });
});
