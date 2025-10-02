import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setDisplay(String(digit));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? String(digit) : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  const clearDisplay = () => {
    setDisplay('0');
  };

  const clearAll = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const performOperation = (nextOperation) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      let newValue;

      switch (operation) {
        case '+':
          newValue = currentValue + inputValue;
          break;
        case '-':
          newValue = currentValue - inputValue;
          break;
        case '*':
          newValue = currentValue * inputValue;
          break;
        case '/':
          newValue = currentValue / inputValue;
          break;
        default:
          newValue = inputValue;
      }

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const handleEquals = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const currentValue = previousValue || 0;
      let newValue;

      switch (operation) {
        case '+':
          newValue = currentValue + inputValue;
          break;
        case '-':
          newValue = currentValue - inputValue;
          break;
        case '*':
          newValue = currentValue * inputValue;
          break;
        case '/':
          newValue = currentValue / inputValue;
          break;
        default:
          newValue = inputValue;
      }

      setDisplay(String(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  return (
    <div className="calculator">
      <div className="calculator-display">
        {display}
      </div>
      <div className="calculator-keypad">
        <div className="input-keys">
          <div className="function-keys">
            <button className="calculator-key key-clear" onClick={clearAll}>
              AC
            </button>
            <button className="calculator-key key-clear" onClick={clearDisplay}>
              C
            </button>
            <button className="calculator-key key-operation" onClick={() => performOperation('/')}>
              ÷
            </button>
          </div>
          <div className="digit-keys">
            <button className="calculator-key key-digit" onClick={() => inputDigit(7)}>
              7
            </button>
            <button className="calculator-key key-digit" onClick={() => inputDigit(8)}>
              8
            </button>
            <button className="calculator-key key-digit" onClick={() => inputDigit(9)}>
              9
            </button>
            <button className="calculator-key key-operation" onClick={() => performOperation('*')}>
              ×
            </button>
            <button className="calculator-key key-digit" onClick={() => inputDigit(4)}>
              4
            </button>
            <button className="calculator-key key-digit" onClick={() => inputDigit(5)}>
              5
            </button>
            <button className="calculator-key key-digit" onClick={() => inputDigit(6)}>
              6
            </button>
            <button className="calculator-key key-operation" onClick={() => performOperation('-')}>
              −
            </button>
            <button className="calculator-key key-digit" onClick={() => inputDigit(1)}>
              1
            </button>
            <button className="calculator-key key-digit" onClick={() => inputDigit(2)}>
              2
            </button>
            <button className="calculator-key key-digit" onClick={() => inputDigit(3)}>
              3
            </button>
            <button className="calculator-key key-operation" onClick={() => performOperation('+')}>
              +
            </button>
            <button className="calculator-key key-digit" onClick={() => inputDigit(0)}>
              0
            </button>
            <button className="calculator-key key-digit" onClick={inputDecimal}>
              .
            </button>
            <button className="calculator-key key-equals" onClick={handleEquals}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
