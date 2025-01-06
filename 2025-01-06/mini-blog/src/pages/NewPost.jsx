import { useNavigate } from 'react-router-dom';
import { extractFormData } from '../helpers/util.js';

const NewPost = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = extractFormData(e.target);
        let localData = localStorage.getItem('data');

        if(localData) {
            // Masyvo papildymas
            localData = JSON.parse(localData);

            localData.push(data);

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
            <h1 className="mb-5">Naujo įrašo kūrimas</h1>
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