type ProfileCartProps = {
  type: 'basic' | 'advanced';
  name: string;
  email?: string;
};

function Component(props: ProfileCartProps) {
  const { type, name, email } = props;

  const alertType = type === 'basic' ? 'success' : 'danger';
  const className = `alert alert-${alertType}`;

  return (
    <article className={className}>
      {/* <h2>React & TypeScript</h2> */}
      {/* <h2>Challenge</h2> */}
      <h2>user: {name}</h2>
      {email && <h2>email: {email}</h2>}
    </article>
  );
}

export default Component;
