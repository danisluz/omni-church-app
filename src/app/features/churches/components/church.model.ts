import { Address } from "src/app/core/models/address.model";

export interface Church {
  id?: number;
  name: string;
  email: string;
  cnpj: string;
  phone: string;
  address: Address;
  createdAt: string;
  updatedAt: string;
}
