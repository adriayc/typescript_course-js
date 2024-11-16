// EXCESS PROPERTY CHECK
function createStudent(student: { id: number; name: string }): void {
  console.log(`Welcome to the course ${student.name.toUpperCase()}`);
}

const newStudent = {
  id: 5,
  name: 'anna',
  email: 'anna@gmail.com', // No Chow error, property does not exist
};

createStudent(newStudent);
createStudent({ id: 1, name: 'bob', email: 'bob@gmail.com' }); // Show Error, property does not exist
