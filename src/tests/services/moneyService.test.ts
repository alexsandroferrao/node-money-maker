import { MoneyModel } from "../../main/models/moneyModel";
import assert from 'assert'
import MoneyService from "../../main/services/moneyService";

const elefantinho: MoneyModel = new MoneyModel(9, "elefantinho", 100);
const formiga: MoneyModel = new MoneyModel(10, "formiguinha", 109);


describe("Validando moneyService", () => {
  test("Deve fazer todo crud no service", () => {
    const service = new MoneyService();
    
    service.saveMoney(elefantinho);
    service.saveMoney(formiga);

    const umMoney = service.getMoney(9)
    const todosMoneys = service.getAllMoneys();

    assert.equal(umMoney, elefantinho);
    assert.equal(todosMoneys.length, 2)
    
    service.deleteIdMoney(9);
  });
});
