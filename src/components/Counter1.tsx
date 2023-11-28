import React from 'react';

import { Store } from '../store/configureStore';
import { Types } from '../store/reducers/counter';

function Counter1() {
  const { state, dispatch } = React.useContext(Store);
  return (
    <div>
      <button
        onClick={() => {
          dispatch({
            type: Types.Add,
            payload: 1,
          });
        }}
      >
        Click count +1
      </button>
      {state.counter.count}
    </div>
  );
}

export default Counter1;
