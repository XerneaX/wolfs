import { IAddress } from 'app/shared/model/address.model';
import { ILesson } from 'app/shared/model/lesson.model';

export interface ICustomer {
  id?: number;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  email?: string | null;
  address?: IAddress | null;
  lessons?: ILesson[] | null;
}

export const defaultValue: Readonly<ICustomer> = {};
