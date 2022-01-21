import req from 'supertest'
import app from '../main/app'

test('[GET] /', async () => {
  const res = await req(app).get('/')
  expect(res.text).toBe('Hello World!')
})