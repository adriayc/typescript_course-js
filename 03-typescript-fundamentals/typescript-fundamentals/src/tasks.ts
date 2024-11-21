const taskForm = document.querySelector<HTMLFormElement>('.form');
const formInput = document.querySelector<HTMLInputElement>('.form-input');

const taskListElement = document.querySelector<HTMLUListElement>('.list');

type Task = {
  description: string;
  isCompleted: boolean;
};

// Retrieve tasks from localStorage
const tasks: Task[] = loadTasks();

// Iterate tasks
// tasks.forEach((task) => renderTask(task));
tasks.forEach(renderTask);

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
    renderTask(task);
    //Update local storage
    updateStorage();

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

function renderTask(task: Task): void {
  // Li
  const taskElement = document.createElement('li');
  taskElement.textContent = task.description;
  // Checkbox
  const taskCheckbox = document.createElement('input');
  taskCheckbox.type = 'checkbox';
  taskCheckbox.checked = task.isCompleted;

  // Toggle checkbox
  taskCheckbox.addEventListener('change', () => {
    task.isCompleted = !task.isCompleted;
    updateStorage();
  });

  // Add checkbox in task
  taskElement.appendChild(taskCheckbox);
  // Add task in list
  taskListElement?.appendChild(taskElement);
}

function updateStorage(): void {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem('tasks');
  return storedTasks ? JSON.parse(storedTasks) : [];
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
