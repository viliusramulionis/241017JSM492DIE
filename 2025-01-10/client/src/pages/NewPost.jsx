import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { extractFormData } from '../helpers/util.js';

const NewPost = () => {
    const navigate = useNavigate();
    const [alert, setAlert] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = extractFormData(e.target);
        
        // SUNKESNIS KELIAS NAUDOJANT FETCH FUNKCIJA:
        // fetch('/api/', {
        //     body: JSON.stringify(data),
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        // .then(resp => resp.json())
        // .then(resp => console.log(resp));
        
        axios.post('/api', data)
        .then(resp => {
            setAlert({
                message: resp.data,
                status: 'success'
            });
            
            // Peradresavimo kūrimas
            setTimeout(() => {
                navigate('/');
            }, 3000);
        })
        .catch(err => setAlert({
            message: err.response.data,
            status: 'danger'
        }));
    }

    return (
        <>
            <h1 className="mb-5">Naujo įrašo kūrimas</h1>

            {alert.message && 
                <div className={"mt-4 alert alert-" + alert.status}>
                    {alert.message}
                </div>
            }

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        name="title"
                        placeholder="Įveskite įrašo pavadinimą"
                        required
                    />
                </div>
                <div className="mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        name="photo"
                        placeholder="Įveskite nuotraukos adresą"
                        required
                    />
                </div>
                <div className="mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        name="excerpt"
                        placeholder="Įveskite trumpą aprašymą"
                        required
                    />
                </div>
                <div className="mb-3">
                    <textarea 
                        className="form-control" 
                        name="description"
                        placeholder="Įveskite pilną aprašymą"
                        required
                    />
                </div>
                <div className="mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        name="author"
                        placeholder="Įveskite straipsnio autorių"
                        required
                    />
                </div>
                <div>
                    <button className="btn btn-primary">Talpinti</button>
                </div>
            </form>
        </>
    );
}

export default NewPost;