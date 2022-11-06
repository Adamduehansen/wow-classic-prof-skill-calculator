import { useState } from 'react';
import calculateSkill from '../lib/calculateSkill';

interface Props {
  defaultValue: number;
  onChange: (oldValue: number, newValue: number) => void;
}

function Calculator({ defaultValue, onChange }: Props): JSX.Element {
  const [level, setLevel] = useState(defaultValue);
  const [result, setResult] = useState(calculateSkill(level));

  return (
    <>
      <div>
        <label htmlFor='level-range'>Level</label>
        <input
          type='range'
          id='level-range'
          min='1'
          max='80'
          autoFocus
          value={level}
          onChange={(event): void => {
            const value = parseInt(event.target.value, 0);
            onChange(level, value);
            setLevel(value);
            setResult(calculateSkill(value));
          }}
        />
        {level}
      </div>
      <p>
        Your profession levels should be at <strong>{result}</strong>
      </p>
    </>
  );
}

export default Calculator;
