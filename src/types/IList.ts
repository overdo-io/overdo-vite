import { ITask } from './ITask';

export type IList = {
  id: string;
  name: string;
  lexorank?: string;
  tasks: ITask[];
};

export type CreateListDTO = Omit<IList, 'id' | 'tasks'>;

export type EditListDTO = Partial<CreateListDTO>;
