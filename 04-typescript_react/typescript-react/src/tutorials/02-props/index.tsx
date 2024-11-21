import { type PropsWithChildren } from 'react';

// Type Alias (With React.ReactNode)
// type ComponentProps = {
//   name: string;
//   id: number;
//   children?: React.ReactNode; // ? - Optional property
// };
// Type Alias (With type PropsWithChildren)
type ComponentProps = PropsWithChildren<{
  name: string;
  id: number;
}>;

function Component({ name, id, children }: ComponentProps) {
  // function Component(props: ComponentProps) {
  return (
    <div>
      {/* <h2>React & TypeScript</h2> */}
      {/* <h2>Props</h2> */}
      <h1>Name: {name}</h1>
      <h1>ID: {id}</h1>
      {children}
    </div>
  );
}

export default Component;
