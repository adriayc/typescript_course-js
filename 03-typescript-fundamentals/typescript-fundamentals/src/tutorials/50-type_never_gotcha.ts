// TYPE "NEVER" GOTCHA
type Student = {
  name: string;
  study: () => void;
};

type User = {
  name: string;
  login: () => void;
};

type Person = Student | User;

const person: Person = {
  name: 'anna',
  // study: () => console.log('study...'), // Student
  login: () => console.log('login...'), // User
};

function isStudent(person: Person): person is Student {
  // return 'study' in person;
  return (person as Student).study !== undefined;
}

if (isStudent(person)) {
  person.study();
} else {
  person.login(); // Error, 'login' is type never (Not exist)
}
