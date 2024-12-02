// Component return
// function Component() {
// function Component(): JSX.Element {
function Component(): JSX.Element | null | string {
  return null; // Error if only JSX.Element is returned
  return 'Hello'; // Error if only JSX.Element is returned
  return (
    <div>
      <h2>React & TypeScript</h2>
      <h2>Return Type</h2>
    </div>
  );
}

export default Component;
