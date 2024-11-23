// Types
import { type Task } from './types';
// Components
import Form from './Form';
import List from './List';
import { useState } from 'react';

function Component() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task): void => {
    setTasks([...tasks, task]);
  };

  return (
    <section>
      {/* <h2>React & TypeScript</h2> */}
      {/* <h2>Tasks</h2> */}
      <Form addTask={addTask} />
      <List />
    </section>
  );
}

export default Component;
