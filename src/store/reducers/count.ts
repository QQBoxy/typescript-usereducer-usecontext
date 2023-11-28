import { TRootActions } from '../typings/reducers';

export enum Types {
  Add = 'ADD_COUNT',
  Reset = 'RESET_COUNT',
}

export interface ICountState {
  count: number;
}

export const initCountState: ICountState = {
  count: 0,
};

const countReducer = (
  state: ICountState = initCountState,
  action: TRootActions,
): ICountState => {
  switch (action.type) {
    case Types.Add:
      return {
        ...state,
        count: state.count + action.payload,
      };

    case Types.Reset:
      return initCountState;

    default:
      return state;
  }
};

export default countReducer;
