import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  return (
    <button type='button' onClick={props.reset}>{props.children}</button>
  );
};

const Application = () => {
  const [name, setName] = useState('')
  const reset = () => {
    setName('');

  };

  return (
    <main>
      <input value={name} type='text' onChange={event => setName(event.target.value)}></input>
      <Button reset={reset}>Reset</Button>
      <h1>{!name ? '' : 'Hello ' + name}</h1>
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
