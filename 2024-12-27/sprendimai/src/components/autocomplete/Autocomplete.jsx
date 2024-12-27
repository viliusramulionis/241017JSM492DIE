import { useState } from 'react'

function Autocomplete() {
  const [phrase, setPhrase] = useState('')

  const data = [
      'What to watch',
      'What is my IP',
      'When is Mother\'s Day 2024',
      'How many weeks in a year',
      'How many days until Christmas',
      'How to screenshot on Mac',
      'What time is it',
      'How many ounces in a gallon',
      'When is Easter 2024',
      'How many ounces in a cup'
  ];

  return (
    <>
      <div className="container">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Enter your search phrase"
          onChange={(e) => setPhrase(e.target.value)}
        />
        <ul className="list-group mt-3">
          {phrase !== '' ? data
            .filter(value => value.toLowerCase().includes(phrase.toLowerCase()))
            .map((value, index) => 
              <li key={index} className="list-group-item">{value}</li>
            )
            : ''
          }
        </ul>
      </div>
    </>
  )
}

export default Autocomplete
