import { CheckBtn, ClearBtn, Container, Result, Textarea } from 'App.styled';
import { useState } from 'react';

const App = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = event => {
    setText(event.target.value);
  };

  const handleButtonClick = () => {
    const splittedWords = text.split(' ');
    const charCountArray = [];

    for (let word of splittedWords) {
      const letters = word.split('');
      for (let char of letters) {
        if (charCountArray[char]) {
          charCountArray[char] += 1;
        } else {
          charCountArray[char] = 1;
        }
      }
    }

    let firstUniqueLetter = '';

    for (let word of splittedWords) {
      const letters = word.split('');
      for (let char of letters) {
        if (charCountArray[char] === 1) {
          firstUniqueLetter = char;
          break;
        }
      }

      if (firstUniqueLetter) {
        break;
      }
    }

    setResult(firstUniqueLetter);
  };

  const handleButtonReset = () => {
    setText('');
  };

  return (
    <Container>
      <Textarea
        value={text}
        onChange={handleInputChange}
        placeholder="Введіть текст"
      />
      <CheckBtn onClick={handleButtonClick}>Перевірити</CheckBtn>
      <ClearBtn onClick={handleButtonReset}>Очистити</ClearBtn>
      <Result>Перший унікальний символ: {result}</Result>
    </Container>
  );
};

export default App;
