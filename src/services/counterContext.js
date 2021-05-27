import { createContext } from 'react';

// creates the context. It's good practice to pass an initial value that matches what will be provided
// this is a mock object with fake values for counter and setCounter.
const counterContext = createContext({
  counter: 0,
  setCounter: () => {},
});

export default counterContext;
