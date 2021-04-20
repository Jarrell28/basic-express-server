'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest'); // mock request engine
const mockRequest = supertest(server); // start and initialize our server in memory (for testing)

describe('WEB SERVER:', () => {

  it('should respond with a 404 on not found', async () => {
    return mockRequest.get('/no-thing').then(data => {
      expect(data.status).toBe(404);
    });
  });

  it('should respond with a 500 on an error', async () => {
    // TODO
    const response = await mockRequest.get('/badRequest');
    expect(response.status).toBe(500);
  });

  it('should respond properly to a GET: /hello', async () => {
    const response = await mockRequest.get('/hello');
    expect(response.status).toBe(200); // test for status code
    // HINT: test for shape/type of data
    expect(typeof response.text).toBe('string'); // test your output
  });

  it('should respond properly to a GET: /person with name parameter', async () => {
    const response = await mockRequest.get('/person?name=jarrell');
    expect(response.status).toBe(200); // test for status code
  });


});