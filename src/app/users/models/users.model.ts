import { IAdress } from './adress.model';
import { ICompany } from './company.model';

export interface IUser {
  id: number;
  username: string;
  name: string;
  email: string;
  address: IAdress;
  phone: number;
  website: string;
  company: ICompany;
}
