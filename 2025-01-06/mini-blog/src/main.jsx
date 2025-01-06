import './index.css'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewPost from './pages/NewPost';
import SinglePost from './pages/SinglePost';
import EditPost from './pages/EditPost';
import Admin from './pages/Admin';
import Header from './components/header/Header';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/new-post" element={<NewPost />} />
        <Route path="/post/:indeksas" element={<SinglePost />} />
        <Route path="/edit-post/:indeksas" element={<EditPost />} />

        <Route path="*" element={<h1>Toks puslapis nerastas</h1>} />
      </Routes>
    </div>
  </BrowserRouter>
)

// CRUD
// CREATE 
// READ
// UPDATE
// DELETE