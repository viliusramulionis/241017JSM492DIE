import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contacts from './pages/Contacts';
import Header from './components/header/Header';
import './index.css'

console.log('Persikrove');

createRoot(document.getElementById('root')).render(
  // Nurodome kokį routerį naudosime, nes galime naudoti ne vieną tuo pačiu metu
  <BrowserRouter>
    <div className="container">
      <Header />
      <Routes>
        {/* Routes komponento viduje privalo būti įvardijami tik <Route> komponentai */}
        <Route path="/" element={ <Home /> } />
        <Route path="/apie-mus" element={ <AboutUs /> } />
        <Route path="/kontaktai" element={ <Contacts /> } />
      </Routes>
    </div>
  </BrowserRouter>
)
