import { useState } from 'react';
import calculateSkill from './lib/calculateSkill';

function App() {
  const [level, setLevel] = useState(10);
  const [result, setResult] = useState(calculateSkill(10));

  return (
    <div>
      <header>
        <h1 tabIndex={0}>
          World of Warcraft Classic Profession Level Assistant
        </h1>
      </header>
      <main>
        <div>
          <label htmlFor='level-range'>Level</label>
          <input
            type='range'
            id='level-range'
            min='1'
            max='80'
            value={level}
            onChange={(event) => {
              const value = parseInt(event.target.value, 0);
              setLevel(value);
              setResult(calculateSkill(value));
            }}
          />
          {level}
        </div>
        <p>
          Your profession levels should be at <strong>{result}</strong>
        </p>
      </main>
    </div>
  );
}

export default App;
