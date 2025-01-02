import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [image, setImage] = useState();
  const [refresh, setRefresh] = useState(false);
  const [data, setData] = useState([]);
  console.log('Rendered');

  useEffect(() => {
    // Nurodomi veiksmai kuriuos norime atlikti komponentui persikrovus 

    fetch('https://dog.ceo/api/breeds/image/random')
    .then(resp => resp.json())
    .then(resp => setImage(resp.message));
  }, [refresh])

  const updateArray = () => {
    data.push('Labas');
    // console.log(data);
    setData([...data]);
  }

  return (
    <>
      <h1>Labas Pasauli</h1>
      <img src={image} />
      {data}
      <div>
        <button onClick={() => setRefresh(!refresh)}>Perkrauti</button>
        <button onClick={updateArray}>Paspausk Mane</button>
      </div>
    </>
  )
}

export default App
