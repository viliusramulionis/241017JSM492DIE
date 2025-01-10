import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { extractFormData } from '../helpers/util.js';

const EditPost = () => {
    const [data, setData] = useState({});
    const [alert, setAlert] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios.get('/api/' + id)
        // Aktyvuojama eilutė, jei statuso kodas 200
        .then(resp => setData(resp.data))
        // Bet kuriuo kitu gautu statuso kodu:
        .catch(err => setAlert({
            message: err.response.data,
            status: 'danger'
        }));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = extractFormData(e.target);

        axios.post('/api', data)
        .then(resp => {
            setAlert({
                message: resp.data,
                status: 'success'
            });
            
            // Peradresavimo kūrimas
            setTimeout(() => {
                navigate('/admin');
            }, 3000);
        })
        .catch(err => setAlert({
            message: err.response.data,
            status: 'danger'
        }));
    }

    return (
        <>
            <h1 className="mb-5">Įrašo redagavimas</h1>
            
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
                        defaultValue={data.title}
                    />
                </div>
                <div className="mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        name="photo"
                        placeholder="Įveskite nuotraukos adresą"
                        required
                        defaultValue={data.photo}
                    />
                </div>
                <div className="mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        name="excerpt"
                        placeholder="Įveskite trumpą aprašymą"
                        required
                        defaultValue={data.excerpt}
                    />
                </div>
                <div className="mb-3">
                    <textarea 
                        className="form-control" 
                        name="description"
                        placeholder="Įveskite pilną aprašymą"
                        required
                        defaultValue={data.description}
                    />
                </div>
                <div className="mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        name="author"
                        placeholder="Įveskite straipsnio autorių"
                        required
                        defaultValue={data.author}
                    />
                </div>
                <div>
                    <button className="btn btn-primary">Talpinti</button>
                </div>
            </form>
        </>
    );
}

export default EditPost;