import type { Reducer } from 'react';

import type { rootActions, rootState } from '../index';

type ActionsMap<A> = {
  [K in keyof A]: A[K] extends Record<keyof A[K], (...arg: never[]) => infer R>
    ? R
    : never;
}[keyof A];

export type TRootState = typeof rootState;

export type TRootActions = ActionsMap<rootActions>;

export type TRootReducer<S = TRootState, A = TRootActions> = Reducer<S, A>;
