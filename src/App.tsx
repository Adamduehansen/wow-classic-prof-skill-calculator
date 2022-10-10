import { useState } from 'react';
import calculateSkill from './lib/calculateSkill';

const LOCAL_STORAGE_LEVEL = 'LOCAL_STORAGE_LEVEL';
const DEFAULT_LEVEL = 10;

function getLevelFromLocalStorageOrDefault(): number {
  const storedLevel = localStorage.getItem(LOCAL_STORAGE_LEVEL);
  if (storedLevel) {
    return parseInt(storedLevel);
  } else {
    return DEFAULT_LEVEL;
  }
}

function App() {
  const [level, setLevel] = useState(getLevelFromLocalStorageOrDefault());
  const [result, setResult] = useState(calculateSkill(level));

  return (
    <div>
      <header>
        <h1 tabIndex={0}>
          World of Warcraft Classic Profession Skill Calculator
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
              localStorage.setItem(LOCAL_STORAGE_LEVEL, value.toString());
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
