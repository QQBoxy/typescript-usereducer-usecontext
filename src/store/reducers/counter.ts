import { TRootActions } from '../typings/reducers';

export enum Types {
  Add = 'ADD_COUNT',
  Reset = 'RESET_COUNT',
}

export interface ICounterState {
  count: number;
}

export const initCounterState: ICounterState = {
  count: 0,
};

const counterReducer = (
  state: ICounterState = initCounterState,
  action: TRootActions,
): ICounterState => {
  switch (action.type) {
    case Types.Add:
      return {
        ...state,
        count: state.count + action.payload,
      };

    case Types.Reset:
      return initCounterState;

    default:
      return state;
  }
};

export default counterReducer;
