// TYPE ALIAS
type User = { id: number; name: string; isActive: boolean };
// export type User = { id: number; name: string; isActive: boolean };

// const john: { id: number; name: string; isActive: boolean } = {
const john: User = {
  id: 1,
  name: 'john',
  isActive: true,
};
// const susan: { id: number; name: string; isActive: boolean } = {
const susan: User = {
  id: 1,
  name: 'susan',
  isActive: false,
};

// function createUser(user: { id: number; name: string; isActive: boolean }): { id: number; name: string; isActive: boolean } {
function createUser(user: User): User {
  console.log(`Hello there ${user.name.toUpperCase()}!!!`);
  return user;
}
