import { app } from "../../main/app";
import request from "supertest";
import assert from "assert";
import { MoneyModel } from "../../main/models/moneyModel";
import MoneyService from "../../main/services/moneyService";

const req = request(app);

const mockGet = jest.fn();

beforeAll(()=>{
  MoneyService.prototype.getAllMoneys = mockGet;
  MoneyService.prototype.getMoney = mockGet;
})

const moneys: MoneyModel[] = [new MoneyModel(1, "tartaruga", 2)];

describe("Controller /moneys", () => {
  test("deveria retornar lista ", async () => {
    mockGet.mockReturnValue(moneys);
    const response = await req.get("/moneys");
    
    assert.deepEqual(response.body, moneys)
    assert.equal(response.statusCode, 200);
  });

  test("deveria retornar somente 1 money", async ()=>{
    mockGet.mockReturnValue(moneys[0]);
    const response = await req.get("/moneys/1");
    
    assert.equal(response.statusCode, 200);
    assert.deepEqual(response.body, moneys[0]);
  })

  test("Deveria criar um money", async ()=>{
    const moneyPost: MoneyModel = new MoneyModel(2,"cachorro", 5);
    
    const response = await req.post("/moneys").send(moneyPost).set('Accept', 'application/json');
    
    assert.equal(response.statusCode, 201);
  })

  test("Deveria deletar um money", async ()=>{
    const response = await req.delete("/moneys/1");
    
    assert.equal(response.statusCode, 202);
  })
});
