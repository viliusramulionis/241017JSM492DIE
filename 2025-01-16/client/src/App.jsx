import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home';
import Login from './pages/Login';
import Users from './pages/Users';
import Header from './components/header/Header';
import axios from 'axios';

const App = () => {
    // Vartotojo duomenys kuriuos tikriname
    const [user, setUser] = useState();

    // Kai perkrauname narsykle
    useEffect(() => {
        axios.get('/api/check-auth')
        .then(resp => {
            console.log(resp);
            setUser(resp.data)
        })
        .catch(err => console.log(err));
    }, []);

    return (
        <BrowserRouter>
            <Header user={user} setUser={setUser} />
            
            <div className="container mt-5">
                {user &&
                    <div className="mb-3">Sveiki, {user?.firstName}</div>
                }
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login setUser={setUser} />} />
                    {user &&
                        <Route path="/users" element={<Users />} />
                    }

                    <Route path="*" element={<h3>404 Puslapis nerastas</h3>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;