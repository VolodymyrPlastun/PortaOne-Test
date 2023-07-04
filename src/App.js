import { Container, Textarea, Button, Result } from "App.styled";
import { useState } from "react";

const App = () => {
    const [text, setText] = useState('');
    const [result, setResult] = useState('');
  
    const handleInputChange = (event) => {
      setText(event.target.value);
    };
  
    const handleButtonClick = () => {
        const splittedWords = text.split(" ");
        let charCountMap = {};
      
        for (let word of splittedWords) {
          const letters = word.split("");
          for (let char of letters) {
            if (charCountMap[char]) {
              charCountMap[char] += 1;
            } else {
              charCountMap[char] = 1;
            }
          }
        }
      
        let firstUniqueLetter = '';
      
        for (let word of splittedWords) {
          const letters = word.split("");
          for (let char of letters) {
            if (charCountMap[char] === 1) {
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

  return (
    <Container>
    <Textarea value={text} onChange={handleInputChange} placeholder="Введіть текст" />
    <Button onClick={handleButtonClick}>Перевірити</Button>
    <Result>Перший унікальний символ: {result}</Result>
  </Container>
  )
}

export default App;
