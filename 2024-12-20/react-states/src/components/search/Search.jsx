import { useState } from 'react';

const Search = () => {
    const [text, setText] = useState('Labas Pasauli');

    // const handleChange = () => {
    //     setText()
    // }

    return (
        <div className="my-5">  
            <input 
                type="text" 
                className="form-control mb-3" 
                onChange={(e) => setText(e.target.value)}
            />
            <h2>{text}</h2>
        </div>
    );
}

export default Search;