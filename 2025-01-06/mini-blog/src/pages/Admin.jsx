import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem('data')));
    }, []);

    const handleDelete = (id) => {
        let localData = localStorage.getItem('data');
        localData = JSON.parse(localData);

        localData.splice(id, 1);

        localStorage.setItem('data', JSON.stringify(localData));

        setData(localData);
    }

    return (
        <>
            <div className="container">
                <h1>Administratoriaus Puslapis</h1>
                
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Pavadinimas</th>
                            <th>Trumpas Aprašymas</th>
                            <th>Autorius</th>
                            <th>Veiksmai</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((value, index) => 
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{value.title}</td>
                                <td>{value.excerpt}</td>
                                <td>{value.author}</td>
                                <td>   
                                    <div className="d-flex gap-3">
                                        <Link 
                                            to={"/edit-post/" + index}
                                            className="btn btn-warning"
                                        >Redaguoti</Link>
                                        <button 
                                            className="btn btn-danger"
                                            onClick={() => handleDelete(index)}
                                        >Ištrinti</button>
                                    </div>
                                </td>                                
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Home;