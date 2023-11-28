import './App.css';

import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import Todo1 from './components/Todo1';
import Todo2 from './components/Todo2';

function App() {
  return (
    <div className="App">
      <Counter1></Counter1>
      <Todo1></Todo1>
      <Counter2></Counter2>
      <Todo2></Todo2>
    </div>
  );
}

export default App;
