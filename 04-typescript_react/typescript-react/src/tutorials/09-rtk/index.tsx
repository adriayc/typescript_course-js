function Component() {
  return (
    <div>
      {/* <h2>React & TypeScript</h2> */}
      {/* <h2>Redux Toolkit</h2> */}
      <h2>Count: 0</h2>
      <h2>Status: Pending</h2>

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
          onClick={() => console.log('active')}
        >
          Set Status to Active
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => console.log('inactive')}
        >
          Set Status to Inactive
        </button>
      </div>
    </div>
  );
}

export default Component;
