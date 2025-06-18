import React, { useState } from 'react';
import './CounterPage.css'

const CounterPage: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = (): void => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = (): void => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div className="content-section counter-section">
      <h2>Counter</h2>
      <div className="counter-controls">
        <button onClick={decrement} className="btn btn-decrement">
          Decrement
        </button>
        <span className="count-display">{count}</span>
        <button onClick={increment} className="btn btn-increment">
          Increment
        </button>
      </div>
    </div>
  );
};

export default CounterPage;
