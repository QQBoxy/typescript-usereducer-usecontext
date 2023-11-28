import { TRootActions } from '../typings/reducers';

export enum Types {
  Add = 'ADD_LIST',
  Reset = 'RESET_LIST',
}

export interface IListState {
  list: string[];
}

export const initListState: IListState = {
  list: [],
};

const listReducer = (state = initListState, action: TRootActions): IListState => {
  switch (action.type) {
    case Types.Add:
      return {
        ...state,
        list: [...state.list, action.payload],
      };

    case Types.Reset:
      return initListState;

    default:
      return state;
  }
};

export default listReducer;
