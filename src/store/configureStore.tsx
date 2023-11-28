import { createContext, Dispatch, useMemo, useReducer } from 'react';

import useReducerLogger from '../hooks/useReducerLogger';
import { rootReducer, rootState } from './index';
import { TRootActions, TRootState } from './typings/reducers';

export const Store = createContext<{
  state: TRootState;
  dispatch: Dispatch<TRootActions>;
}>({
  state: rootState,
  dispatch: () => '',
});

const StoreProvider = ({ children }: { children: JSX.Element }) => {
  const loggedReducer = useReducerLogger(rootReducer);

  const [state, dispatch] = useReducer(
    import.meta.env.DEV ? loggedReducer : rootReducer,
    rootState,
  );

  const store = useMemo(() => ({ state, dispatch }), [state]);

  return <Store.Provider value={store}>{children}</Store.Provider>;
};

export default StoreProvider;
