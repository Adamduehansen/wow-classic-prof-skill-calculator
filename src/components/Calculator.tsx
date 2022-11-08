import { useState } from 'react';
import calculateSkill from '../lib/calculateSkill';
import classes from './Calculator.module.css';

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
        <label htmlFor='level-range' className='block'>
          Level: <span className='text-blue-500'>{level}</span>
        </label>
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
          className={classes.slider}
        />
      </div>
      <p>
        Your profession levels should be at{' '}
        <strong className='text-blue-500'>{result}</strong>
      </p>
    </>
  );
}

export default Calculator;
