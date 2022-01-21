import req from 'supertest'
import app from '../main/app'

var request = require("supertest").agent(app.listen());

test('Testando se a aplicacao está disponível', async () => {
    request.ge
  const res = await req(app).get('/')
  expect(res.text).toBe('Boas vindas ao money maker, para buscar um recurso /moneys')
})