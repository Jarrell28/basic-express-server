const validatorMiddleware = require('../src/middleware/validator.js');

const { server } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('validator middleware', () => {

    let consoleSpy;
    //Must fill in param data for the mock test
    let req = {
        query: {
            name: "jarrell"
        }
    };
    let res = {};
    let next = jest.fn();

    beforeEach(() => {
        // Attach to the console (take it over)
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(() => {
        // Put the console back
        consoleSpy.mockRestore();
    });

    it('properly logs some req parameter', async () => {
        validatorMiddleware(req, res, next);
        expect(consoleSpy).toHaveBeenCalled();
    });

    it('properly moves to the next middleware', () => {
        validatorMiddleware(req, res, next);
        // toHaveBeenCalled() is not enough, we need to make sure it was called with no args
        expect(next).toHaveBeenCalledWith();
    });

})