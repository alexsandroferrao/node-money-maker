export class MoneyModel {
  id: number;
  animal: string;
  valor: number;

  constructor(id: number, animal: string, valor: number) {
    this.id = id;
    this.animal = animal;
    this.valor = valor;
  }
}
