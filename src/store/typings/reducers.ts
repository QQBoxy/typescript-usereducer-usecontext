import countActions from '../actions/count';
import listActions from '../actions/list';
import initCountState from '../reducers/count';
import initListState from '../reducers/list';

export const rootState = {
  list: initListState,
  count: initCountState,
};

export type TRootState = typeof rootState;

export type rootActions = {
  list: listActions;
  count: countActions;
};

export type ActionsMap<A> = {
  [K in keyof A]: A[K] extends Record<keyof A[K], (...arg: never[]) => infer R>
    ? R
    : never;
}[keyof A];

export type TRootActions = ActionsMap<rootActions>;
