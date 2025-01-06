import { useState } from 'react';
import { extractFormData, random } from './helpers/util.js';

function App() {
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = extractFormData(e.target);

    let pool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    
    if(data.numbers === 'on') {
      pool += '0123456789';
    }

    if(data.symbols === 'on') {
      pool += '!@#$%^&*()_+';
    }

    console.log(data);

    let result = '';

    for(let i = 0; i < data.length; i++) {
      result += pool[random(0, pool.length - 1)];
    }

    setPassword(result);    
  }

  return (
    <>
      <div className="container mt-5" style={{ maxWidth: 768 }}>
        <h1 className="text-center">Need a Password? Try our strong password generator</h1>
        <p className="text-center">Generate secure, random password for free and stay safe online.</p>
        <h6>Generated password:</h6>
        <div className="generated-password">
          {password}
        </div>
        <form 
          className="d-flex justify-content-between text-center"
          onSubmit={handleSubmit}
        >
            <div className="d-flex align-items-center gap-3">
              <label>Length</label>
              <input 
                type="number" 
                defaultValue="17" 
                className="form-control"  
                name="length"
              />
            </div>
            <div>
              <input 
                type="checkbox" 
                className="form-check-input"
                name="numbers"
                id="numbers"
              />
              <label className="d-block" htmlFor="numbers">Numbers</label>
            </div>
            <div>
              <input 
                type="checkbox" 
                className="form-check-input"
                name="symbols"
                id="symbols"
              />
              <label className="d-block" htmlFor="symbols">Symbols</label>
            </div>
            <button className="btn btn-primary">Generate</button>
        </form>
      </div>
    </>
  )
}

export default App
