import React, { useState } from 'react';

type Person = {
  name: string;
};

function Component() {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');

  // Change Event
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  // Form Event
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // const formData = new FormData(e.target as HTMLFormElement);

    const data = Object.fromEntries(formData);
    console.log(data);

    const text = formData.get('text') as string;
    // const person: Person = { name: text };
    const person: Person = { name: data.text as string };
  };

  return (
    <section>
      {/* <h2>React & TypScript</h2> */}
      {/* <h2>Events</h2> */}
      <h2>events example</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input mb-1"
          name="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <input
          type="email"
          className="form-input mb-1"
          name="email"
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
