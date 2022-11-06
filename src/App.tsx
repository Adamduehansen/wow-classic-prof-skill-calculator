import confetti from 'canvas-confetti';
import Calculator from './components/Calculator';

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

function App(): JSX.Element {
  function onChangeHandler(oldValue: number, newValue: number): void {
    localStorage.setItem(LOCAL_STORAGE_LEVEL, newValue.toString());
    if (oldValue >= newValue) {
      return;
    }
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }

  return (
    <div>
      <header>
        <h1 tabIndex={0}>
          World of Warcraft Classic Profession Skill Calculator
        </h1>
      </header>
      <main>
        <Calculator
          defaultValue={getLevelFromLocalStorageOrDefault()}
          onChange={onChangeHandler}
        />
      </main>
    </div>
  );
}

export default App;
