import { TRootActions } from '../typings/reducers';

export enum Types {
  Add = 'ADD_LIST',
  Reset = 'RESET_LIST',
}

export interface ITodoState {
  list: string[];
}

export const initTodoState: ITodoState = {
  list: [],
};

const todoReducer = (
  state: ITodoState = initTodoState,
  action: TRootActions,
): ITodoState => {
  switch (action.type) {
    case Types.Add:
      return {
        ...state,
        list: [...state.list, action.payload],
      };

    case Types.Reset:
      return initTodoState;

    default:
      return state;
  }
};

export default todoReducer;
