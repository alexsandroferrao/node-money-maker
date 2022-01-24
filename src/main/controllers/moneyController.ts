import {
  Body,
  Delete,
  Get,
  HttpCode,
  JsonController,
  Param,
  Post,
} from "routing-controllers";
import { Controller, Route, SuccessResponse } from "tsoa";
import { MoneyModel } from "../models/moneyModel";

import  MoneyService  from "../services/moneyService";
@JsonController("/moneys")
@Route('/moneys')
export class MoneyController extends Controller{
  moneyService: MoneyService = new MoneyService();


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
  @SuccessResponse("201", "Created") 
  post(@Body() money: MoneyModel) {
    this.moneyService.saveMoney(money);
    return "ok";
  }

  @Delete("/:id")
  @HttpCode(202)
  @SuccessResponse("202", "Accepted") 
  delete(@Param("id") id: number) {
    this.moneyService.deleteIdMoney(id);
    return "deletado";
  }
}
