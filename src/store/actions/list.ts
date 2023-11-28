import { Types } from '../reducers/list';

export type listActions = {
  addList: (payload: string) => {
    type: Types.Add;
    payload: string;
  };
  resetList: () => { type: Types.Reset };
};

export default listActions;
