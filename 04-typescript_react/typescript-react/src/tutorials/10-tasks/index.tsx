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

  const toggleTask = ({ id }: { id: string }): void => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      })
    );
  };

  return (
    <section>
      {/* <h2>React & TypeScript</h2> */}
      {/* <h2>Tasks</h2> */}
      <Form addTask={addTask} />
      <List tasks={tasks} toggleTask={toggleTask} />
    </section>
  );
}

export default Component;
