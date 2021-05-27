import React, { useContext } from 'react';
import counterContext from '../../services/counterContext';

// destructure in the function params for easy-read syntax
const ButtonComponent = ({ text }) => {
  // useContext gives us access to the provided information.
  // we can destructure only the elements that we need.
  const { setCounter } = useContext(counterContext)

  const clickHandler = () => {
    if (text === '+') {
      return setCounter(oldCounter => oldCounter + 1)
    } else if (text === '-') {
      return setCounter(oldCounter => oldCounter - 1)
    } else {
      return () => {};
    }
  }

  return (
    <div>
      <button onClick={clickHandler}>
        {text}
      </button>
    </div>
  );
}

export default ButtonComponent;
