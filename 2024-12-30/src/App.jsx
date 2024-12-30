import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [image, setImage] = useState();
  const [refresh, setRefresh] = useState(false);

  console.log('Rendered');

  useEffect(() => {
    // Nurodomi veiksmai kuriuos norime atlikti komponentui persikrovus 

    fetch('https://dog.ceo/api/breeds/image/random')
    .then(resp => resp.json())
    .then(resp => setImage(resp.message));
  }, [refresh])

  return (
    <>
      <h1>Labas Pasauli</h1>
      <img src={image} />
      <div>
        <button onClick={() => setRefresh(!refresh)}>Perkrauti</button>
      </div>
    </>
  )
}

export default App
