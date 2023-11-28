import React from 'react';

import { Store } from '../store/configureStore';
import { Types } from '../store/reducers/count';

function Count2() {
  const { state, dispatch } = React.useContext(Store);
  return (
    <div className="Count2">
      <button
        onClick={() => {
          dispatch({
            type: Types.Add,
            payload: 1,
          });
        }}
      >
        Click count 2
      </button>
      {state.count.count}
    </div>
  );
}

export default Count2;
