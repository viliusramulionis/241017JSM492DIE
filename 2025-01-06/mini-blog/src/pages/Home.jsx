import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem('data')));
    }, []);

    return (
        <>
            <div className="container">
                <h1>Titulinis Puslapis</h1>
                
                {data.map((value, index) => 
                    <div key={index} className="row my-5">
                        <div className="col-12 col-md-4">
                            <Link to={"/post/" + index}>
                                <img src={value.photo} />
                            </Link>
                        </div>
                        <div className="col-12 col-md-8 mt-5 mt-md-0">
                            <Link to={"/post/" + index}>
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