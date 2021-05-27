import { useState } from 'react';
import './App.css';
import CounterContext from './services/counterContext';
import ButtonComponent from './components/ButtonComponent/ButtonComponent';
import CounterComponent from './components/CounterComponent/CounterComponent';

const App = () => {
  // my counter state! Counter is the variable value and setCounter is the function used to update it.
  // NEVER MUTATE THE STATE!!!!
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      {/* the provider gives access to the value to any child component */}
      {/* the value can only hold one value, but we can wrap any element in arrays or objects to pass 2 or more properties*/}
      <CounterContext.Provider value={{ counter, setCounter }}>
        {/* none of these elements need props now ✌🏼 */}
        <ButtonComponent text="+" />
        {counter ? <CounterComponent /> : null}
        <ButtonComponent text="-" />
      </CounterContext.Provider>
    </div>
  );
};

export default App;
