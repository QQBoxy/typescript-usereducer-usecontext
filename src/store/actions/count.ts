import { Types } from '../reducers/count';

export type countActions = {
  addCount: (payload: number) => {
    type: Types.Add;
    payload: number;
  };
  resetCount: () => { type: Types.Reset };
};

export default countActions;
