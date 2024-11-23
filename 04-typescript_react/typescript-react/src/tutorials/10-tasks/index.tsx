// Types
import { type Task } from './types';
// Components
import Form from './Form';
import List from './List';
import { useState } from 'react';

function Component() {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <section>
      {/* <h2>React & TypeScript</h2> */}
      {/* <h2>Tasks</h2> */}
      <Form />
      <List />
    </section>
  );
}

export default Component;
