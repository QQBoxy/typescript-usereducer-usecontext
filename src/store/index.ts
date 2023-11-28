import { Reducer } from 'react';

import counterActions from './actions/counter';
import todoActions from './actions/todo';
import counterReducer, { initCounterState } from './reducers/counter';
import todoReducer, { initTodoState } from './reducers/todo';
import { TRootActions, TRootState } from './typings/reducers';

const combineReducers = <S = TRootState>(reducers: {
  [K in keyof S]: TRootReducer<S[K]>;
}): TRootReducer<S> => {
  return (state, action) => {
    // Build the combined state
    return (Object.keys(reducers) as Array<keyof S>).reduce(
      (prevState, key) => ({
        ...prevState,
        [key]: reducers[key](prevState[key], action),
      }),
      state,
    );
  };
};

export const rootState = {
  todo: initTodoState,
  counter: initCounterState,
};

export type rootActions = {
  todo: todoActions;
  counter: counterActions;
};

export const rootReducer = combineReducers({
  todo: todoReducer,
  counter: counterReducer,
});

export type TRootReducer<S = TRootState, A = TRootActions> = Reducer<S, A>;
