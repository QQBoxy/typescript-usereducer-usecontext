import { Types } from '../reducers/counter';

export type counterActions = {
  addCount: (payload: number) => {
    type: Types.Add;
    payload: number;
  };
  resetCount: () => { type: Types.Reset };
};

export default counterActions;
