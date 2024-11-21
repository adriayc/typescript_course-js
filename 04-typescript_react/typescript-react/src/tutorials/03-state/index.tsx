import { useState } from 'react';

function Component() {
  // useState (Hooks)
  const [text, setText] = useState('shakeAndBake');
  //   const { text, setText } = useState<string>('shakeAndBake');
  const [number, setNumber] = useState(1);
  //   const [number, setNumber] = useState<number>(1);
  const [list, setList] = useState<string[]>([]);

  return (
    <div>
      <h2 className="mb-1">React & TypeScript</h2>
      {/* <h2>State</h2> */}
      <button
        type="button"
        className="btn btn-center"
        onClick={() => {
          setText('typescript');
          //   setText(1); // Error
          setNumber(23);
          setList(['hello', 'world']);
          //   setList([1, 3]); // Error
        }}
      >
        click me
      </button>
    </div>
  );
}

export default Component;
