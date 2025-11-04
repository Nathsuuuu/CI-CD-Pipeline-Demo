const app = require('./app');
const request = require('supertest');

describe('GET /api/health', () => {
  it('should return status OK', async () => {
    const response = await request(app).get('/api/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('OK');
  });
});