import req from 'supertest'
import { app } from '../main/app';

test('Testando se a aplicacao está disponível', async () => {
  const res = await req(app).get('/moneys')
  expect(res.statusCode).toBe(200)
})