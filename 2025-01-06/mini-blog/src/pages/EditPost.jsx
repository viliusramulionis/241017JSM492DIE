import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { extractFormData } from '../helpers/util.js';

const EditPost = () => {
    const [data, setData] = useState({});
    const navigate = useNavigate();
    const { indeksas } = useParams();

    useEffect(() => {
        let localData = localStorage.getItem('data');

        // Pasitikriname ar turime išsaugotą informaciją
        if(!localData)
            return;

        localData = JSON.parse(localData);

        setData(localData[indeksas]);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = extractFormData(e.target);
        let localData = localStorage.getItem('data');

        if(localData) {
            // Masyvo papildymas
            localData = JSON.parse(localData);

            // localData.push(data);
            localData[indeksas] = data;

            localStorage.setItem('data', JSON.stringify(localData));
        } else {
            // Masyvo sukūrimas
            localStorage.setItem('data', JSON.stringify([data]));
        }

        // Peradresavimo kūrimas
        navigate('/');
    }

    return (
        <>
            <h1 className="mb-5">Įrašo redagavimas</h1>
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