import { MoneyModel } from "../models/moneyModel";
export default class MoneyService {

  moneys: MoneyModel[] = [];

  getAllMoneys(): MoneyModel[] {
    return this.moneys;
  }

  getMoney(id: number): MoneyModel {
    const index = this.moneys.findIndex((money) => money.id == id);
    return this.moneys[index];
  }

  saveMoney(money: MoneyModel) {
    this.moneys.push(money);
  }

  deleteIdMoney(id: number) {
    const index = this.moneys.findIndex((money) => money.id == id);
    this.moneys.splice(index);
  }
}
