import * as graphql from "@nestjs/graphql";
import { CustomerService } from "./customer.service";

export class CustomerResolver {
  constructor(protected readonly service: CustomerService) {}
}
