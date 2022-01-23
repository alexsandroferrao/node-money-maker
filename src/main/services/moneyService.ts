import { MoneyModel } from "../models/moneyModel";

const moneys: MoneyModel[] = [new MoneyModel(1, "tartaruga", 2)];

export function getAllMoneys(): MoneyModel[] {
  return moneys;
}

export function getMoney(id:number):MoneyModel{
    const index = moneys.findIndex(money => money.id == id);
    return moneys[index];
}

export function saveMoney(money: MoneyModel) {
  moneys.push(money);
}

export function deleteIdMoney(id: number) {
  const index = moneys.findIndex(money => money.id == id);
  delete moneys[index]
}
