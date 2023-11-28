import React from 'react';

import { Store } from '../store/configureStore';
import { Types } from '../store/reducers/counter';

function Counter2() {
  const { state, dispatch } = React.useContext(Store);
  return (
    <div>
      <button
        onClick={() => {
          dispatch({
            type: Types.Add,
            payload: 2,
          });
        }}
      >
        Click count +2
      </button>
      {state.counter.count}
    </div>
  );
}

export default Counter2;
