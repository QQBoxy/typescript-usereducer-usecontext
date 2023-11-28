import { createContext, Dispatch, useMemo, useReducer } from 'react';

// import useReducerLogger from '~/hooks/useReducerLogger';
import { rootReducer } from './index';
import { rootState, TRootActions, TRootState } from './typings/reducers';

export const ReduxStore = createContext<{
  state: TRootState;
  dispatch: Dispatch<TRootActions>;
}>({
  state: rootState,
  dispatch: () => '',
});

const StoreProvider = ({ children }: { children: JSX.Element }) => {
  //   const loggedReducer = useReducerLogger(rootReducer);

  const [state, dispatch] = useReducer(rootReducer, rootState);

  //   const [state, dispatch] = useReducer(
  //     process.env.NODE_ENV === 'development' ? loggedReducer : rootReducer,
  //     rootState,
  //   );

  const store = useMemo(() => ({ state, dispatch }), [state]);

  return <ReduxStore.Provider value={store}>{children}</ReduxStore.Provider>;
};

export default StoreProvider;
