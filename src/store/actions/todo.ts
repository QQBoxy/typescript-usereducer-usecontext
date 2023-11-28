import { Types } from '../reducers/todo';

export type todoActions = {
  addList: (payload: string) => {
    type: Types.Add;
    payload: string;
  };
  resetList: () => { type: Types.Reset };
};

export default todoActions;
