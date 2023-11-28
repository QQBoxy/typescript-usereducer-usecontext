import { Reducer } from 'react';

import countReducer from './reducers/count';
import listReducer from './reducers/list';
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

export const rootReducer = combineReducers({
  list: listReducer,
  count: countReducer,
});

export type TRootReducer<S = TRootState, A = TRootActions> = Reducer<S, A>;
