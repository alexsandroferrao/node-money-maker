import {
  Body,
  Delete,
  Get,
  HttpCode,
  JsonController,
  Param,
  Post,
} from "routing-controllers";
import { MoneyModel } from "../models/moneyModel";

import  MoneyService  from "../services/moneyService";
@JsonController("/moneys")
export class MoneyController {
  moneyService: MoneyService;

  constructor() {
    this.moneyService = new MoneyService();
  }

  @Get()
  getAll() {
    return this.moneyService.getAllMoneys();
  }

  @Get("/:id")
  getOne(@Param("id") id: number) {
    return this.moneyService.getMoney(id);
  }

  @Post()
  @HttpCode(201)
  post(@Body() money: MoneyModel) {
    this.moneyService.saveMoney(money);
    return "ok";
  }

  @Delete("/:id")
  @HttpCode(202)
  delete(@Param("id") id: number) {
    this.moneyService.deleteIdMoney(id);
    return "deletado";
  }
}
