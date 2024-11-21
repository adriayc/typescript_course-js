// Props - Type Alias/Interface
// Type Alias
type ComponentProps = {
  name: string;
  id: number;
};

// Interface
// interface ComponentProps {
//   name: string;
//   id: number;
// }

function Component({ name, id }: ComponentProps) {
  // function Component(props: ComponentProps) {
  return (
    <div>
      {/* <h2>React & TypeScript</h2> */}
      {/* <h2>Props</h2> */}
      <h1>Name: {name}</h1>
      <h1>ID: {id}</h1>
      {/* <h1>Name: {props.name}</h1> */}
      {/* <h1>ID: {props.id}</h1> */}
    </div>
  );
}

export default Component;
