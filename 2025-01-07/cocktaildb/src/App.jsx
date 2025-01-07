
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Single from './pages/Single';
import Category from './pages/Category';

const App = () => {
    const [keyword, setKeyword] = useState('');
    
    useEffect(() => {
        const localKeyword = localStorage.getItem('keyword');

        if(localKeyword) {
            setKeyword(localKeyword)
        }
    }, []);

    return (
      <BrowserRouter>
        <div className="mt-5 container">
          <Routes>
            <Route path="/" element={<Home setKeyword={setKeyword} keyword={keyword} />} />
            <Route path="/single/:id" element={<Single />} />
            <Route path="/category/:id" element={<Category />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }

  export default App;