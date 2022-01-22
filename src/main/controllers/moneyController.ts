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

import {
  deleteIdMoney,
  getAllMoneys,
  getMoney,
  saveMoney,
} from "../services/moneyService";

@JsonController("/moneys")
export class MoneyController {
  @Get()
  getAll() {
    return getAllMoneys();
  }

  @Get("/:id")
  getOne(@Param("id") id: number) {
    return getMoney(id);
  }

  @Post()
  @HttpCode(201)
  post(@Body() money: MoneyModel) {
    saveMoney(money);
    return "ok";
  }

  @Delete("/:id")
  @HttpCode(202)
  delete(@Param("id") id: number) {
    deleteIdMoney(id);
    return "deletado";
  }
}
