import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { CustomerService } from "./customer.service";

@swagger.ApiTags("customers")
@common.Controller("customers")
export class CustomerController {
  constructor(protected readonly service: CustomerService) {}
}
