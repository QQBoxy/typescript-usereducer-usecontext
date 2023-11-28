import React from 'react';

import { Store } from '../store/configureStore';
import { Types } from '../store/reducers/todo';

function Todo1() {
  const { state, dispatch } = React.useContext(Store);
  return (
    <div>
      <button
        onClick={() => {
          dispatch({
            type: Types.Add,
            payload: 'Hello',
          });
        }}
      >
        Add Hello
      </button>
      {state.todo.list.join(', ')}
    </div>
  );
}

export default Todo1;
