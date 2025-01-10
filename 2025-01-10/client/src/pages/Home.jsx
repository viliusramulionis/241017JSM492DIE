import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const [data, setData] = useState([]);
    const [alert, setAlert] = useState({});
 
    useEffect(() => {
        // fetch('/api')
        // .then(resp => resp.json())
        // .then(resp => setData(resp));

        axios.get('/api')
        // Aktyvuojama eilutė, jei statuso kodas 200
        .then(resp => setData(resp.data))
        // Bet kuriuo kitu gautu statuso kodu:
        .catch(err => setAlert({
            message: err.response.data,
            status: 'danger'
        }));
    }, []);

    return (
        <>
            <div className="container">
                <h1>Titulinis Puslapis</h1>
                {alert.message ? 
                    <div className={"mt-4 alert alert-" + alert.status}>
                        {alert.message}
                    </div>
                : data.map(value => 
                    <div key={value._id} className="row my-5">
                        <div className="col-12 col-md-4">
                            <Link to={"/post/" + value._id}>
                                <img src={value.photo} />
                            </Link>
                        </div>
                        <div className="col-12 col-md-8 mt-5 mt-md-0">
                            <Link to={"/post/" + value._id}>
                                <h3>{value.title}</h3>
                            </Link>
                            <p>{value.excerpt}</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Home;