const taskForm = document.querySelector<HTMLFormElement>('.form');
const formInput = document.querySelector<HTMLInputElement>('.form-input');

const taskListElement = document.querySelector<HTMLUListElement>('.list');

type Task = {
  description: string;
  isCompleted: boolean;
};

const tasks: Task[] = [];

taskForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const taskDescription = formInput?.value;
  if (taskDescription) {
    const task: Task = {
      description: taskDescription,
      isCompleted: false,
    };
    // Add task to list
    addTask(task);
    // Render tasks
    //Update local storage

    // Set default value
    formInput.value = '';
    return;
  }
  alert('Please enter task description');
});

function addTask(task: Task): void {
  tasks.push(task);
  console.log(tasks);
}

// function createTask(event: SubmitEvent) {
//   event.preventDefault();
//   const taskDescription = formInput?.value;
//   if (taskDescription) {
//     console.log(taskDescription);

//     // Set default value
//     formInput.value = '';
//     return;
//   }
//   alert('Please enter task description');
// }

// taskForm?.addEventListener('submit', createTask);
