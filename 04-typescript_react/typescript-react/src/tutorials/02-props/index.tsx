// Props - inline
function Component({ name, id }: { name: string; id: number }) {
  return (
    <div>
      {/* <h2>React & TypeScript</h2> */}
      {/* <h2>Props</h2> */}
      <h1>Name: {name}</h1>
      <h1>ID: {id}</h1>
    </div>
  );
}

export default Component;
