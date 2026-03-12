process.env.NODE_ENV = 'test'

const test = require('node:test')
const assert = require('node:assert/strict')
const supertest = require('supertest')
const app = require('../app')

test('GET / returns Hello World HTML', async () => {
  const response = await supertest(app).get('/hello')

  assert.equal(response.status, 200)
  assert.equal(response.text, '<h1>Hello World!</h1>')
})
