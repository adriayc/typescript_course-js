import { useReducer } from 'react';
// Reducer
import { initialState, counterReducer } from './reducer';

function Component() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      {/* <h2>React & TypeScript</h2> */}
      {/* <h2>Reducer</h2> */}
      <h2>Count: 0</h2>
      <h2>Status: Active</h2>

      <div className="btn-container">
        <button
          type="button"
          className="btn"
          onClick={() => console.log('increment')}
        >
          Increment
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => console.log('decrement')}
        >
          Decrement
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => console.log('reset')}
        >
          Reset
        </button>
      </div>
      <div className="btn-container">
        <button
          type="button"
          className="btn"
          onClick={() => console.log('set status to active')}
        >
          Set Status to Active
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => console.log('set status to inactive')}
        >
          Set Status to Inactive
        </button>
      </div>
    </div>
  );
}

export default Component;
