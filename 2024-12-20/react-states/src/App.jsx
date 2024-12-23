import { useState } from 'react';
import './App.css'

function App() {
  let [index, setIndex] = useState(0);

  // Funkcija skirta įvykio registravimui
  const handleClick = (e) => {
    console.log('Veikia')
    
    
    setIndex(++index); // index = 0
    // index = 1
    // index++;

    // console.log(index)

    // QUERY SELECTORIAUS NEBENAUDOJAME
    // document.querySelector('h1').textContent = index;
  }

  return (
    <>
      <h1>{index}</h1>
      <button onClick={handleClick}>Paspausk mane</button>
    </>
  )
}

export default App