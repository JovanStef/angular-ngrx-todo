import { IGeo } from './geo.model';

export interface IAdress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}
