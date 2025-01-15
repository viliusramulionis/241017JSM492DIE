import axios from 'axios';
import './App.css'

function App() {

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kuomet norime persiusti failo duomenis, siunciame formdata objekta is karto!
    const data = new FormData(e.target);

    axios.post('/api', data)
      .then(resp => console.log(resp));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="text" className="form-control" name="first_name" />
        </div>
        <div className="mb-3">
          <input type="file" className="form-control" name="nuotrauka" />
        </div>
        <button className="btn btn-primary">Įkelti</button>
      </form>
    </>
  )
}

export default App
