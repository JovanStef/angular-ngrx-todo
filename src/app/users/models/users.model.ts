import { IAdress } from './adress.model';
import { ICompany } from './company.model';

export interface IUser {
  id: number;
  image: string;
  username: string;
  name: string;
  email: string;
  address: IAdress;
  phone: number;
  website: string;
  company: ICompany;
}
