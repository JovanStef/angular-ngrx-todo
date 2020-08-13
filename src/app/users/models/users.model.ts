import { IAdress } from './adress.model';
import {ICompany} from './company.model';

export interface IUser {
  id: number;
  name: string;
  email: string;
  adress: IAdress;
  phone: number;
  website: string;
  company: ICompany;
}
