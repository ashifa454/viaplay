const { app } = require("../../server");
const superTest = require("supertest");
const appWithSuperTest = superTest(app);
describe('Film Trailer Endpoint', () => {
    it('GET film/trailer/:movie_name should return an array of youtube urls', async () => {
        const res = await appWithSuperTest.get("/film/trailer/arrival-2016");
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('data');
        expect(res.body.data.length).toBeGreaterThan(0)
    });
    it('GET film/trailer/:movie_name should return an 404 if movie does`nt exists', async () => {
        const res = await appWithSuperTest.get("/film/trailer/arrival-2015");
        expect(res.statusCode).toEqual(404);
    });
});