import { IAddress } from 'app/shared/model/address.model';
import { ILesson } from 'app/shared/model/lesson.model';

export interface ICourse {
  id?: number;
  name?: string | null;
  phoneNumber?: string | null;
  email?: string | null;
  address?: IAddress | null;
  lessons?: ILesson[] | null;
}

export const defaultValue: Readonly<ICourse> = {};
