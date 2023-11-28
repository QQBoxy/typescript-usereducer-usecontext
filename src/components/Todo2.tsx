import React from 'react';

import { Store } from '../store/configureStore';
import { Types } from '../store/reducers/todo';

function Todo2() {
  const { state, dispatch } = React.useContext(Store);
  return (
    <div>
      <button
        onClick={() => {
          dispatch({
            type: Types.Add,
            payload: 'Hi',
          });
        }}
      >
        Add Hi
      </button>
      {state.todo.list.join(', ')}
    </div>
  );
}

export default Todo2;
