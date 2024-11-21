import { useState } from 'react';

function Component() {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');

  // Change Event
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  return (
    <section>
      {/* <h2>React & TypScript</h2> */}
      {/* <h2>Events</h2> */}
      <h2>events example</h2>
      <form className="form">
        <input
          type="text"
          className="form-input mb-1"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <input
          type="email"
          className="form-input mb-1"
          value={email}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </section>
  );
}

export default Component;
