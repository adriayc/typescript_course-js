// CHALLENGE - TUPLE AND ENUM
enum UserRole {
  Admin,
  Manager,
  Employee,
}

type User = {
  id: number;
  name: string;
  role: UserRole;
  contact: [string, string];
};

function createUser(user: User): User {
  return user;
}

const user: User = createUser({
  id: 1,
  name: 'john',
  role: UserRole.Admin,
  contact: ['john@gmail.com', '123-456-789'],
});

console.log(createUser(user));
