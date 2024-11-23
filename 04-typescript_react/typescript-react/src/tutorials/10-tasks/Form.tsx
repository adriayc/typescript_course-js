import { useState } from 'react';
// Types
import { type Task } from './types';

function Form() {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) {
      alert('please enter a task');
      return;
    }
    // Add task
    console.log(text);
    setText('');
  };

  return (
    <form className="form task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="btn">
        add task
      </button>
    </form>
  );
}

export default Form;
