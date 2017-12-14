import request from 'supertest'

import app from '../../server/app'

describe('GET /api', () => {
  it('should return Welcome to NODE ES6 response', done => {
    request(app)
      .get('/api')
      .expect('Welcome to NODE ES6')
      .end(done)
  })
})

describe('GET /', () => {
  it('should return 200 response', done => {
    request(app)
      .get('/')
      .expect(200)
      .end(done)
  })
})
