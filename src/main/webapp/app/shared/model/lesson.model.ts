import { ICourse } from 'app/shared/model/course.model';
import { ICustomer } from 'app/shared/model/customer.model';

export interface ILesson {
  id?: number;
  name?: string | null;
  desc?: string | null;
  price?: number | null;
  course?: ICourse | null;
  customer?: ICustomer | null;
}

export const defaultValue: Readonly<ILesson> = {};
