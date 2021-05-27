import React, { useEffect, useContext } from 'react';
import styles from './CounterComponent.module.css'
import counterContext from '../../services/counterContext';

const CounterComponent = () => {
  const {counter, setCounter} = useContext(counterContext);

  // componentDidMount
  useEffect(() => {
    console.log('I have been mounted')
  }, [])

  // componentDidUpdate
  useEffect(() => {
    console.log('updating the component', counter)
  }, [counter]);

  // componentWillUnmount
  useEffect(() => {
    // will execute normally
    console.log('I will unmount in the future')
    const timer = setTimeout(() => {
      console.log('in the set timeout');
    }, 3000);

    // will execute only on tear down
    return () => {
      clearInterval(timer);
      console.log('I have been unmounted 😢')
    }

    // if we pass a dependency, it will clean on each update.
  }, [])

  return (
    <div className={styles.counter}>
      {counter}
      <button onClick={() => setCounter(0)}>reset</button>
    </div>
  );
}

export default CounterComponent;
