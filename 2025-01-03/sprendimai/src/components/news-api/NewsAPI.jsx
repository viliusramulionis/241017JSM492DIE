import { useState, useEffect } from 'react';

const NewsAPI = () => {
    const [data, setData] = useState([]);
    // Rakto paėmimas iš .env failo
    const API_KEY = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=tesla&apiKey=' + API_KEY)
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp.articles)
            setData(resp.articles)
        });
    }, []);


    return (
        <>
            <h1 className="mt-5">News</h1>
            <div className="row">
                {data.map((value, index) =>
                    value.urlToImage && 
                    <div className="col-12 col-md-4 mb-5" key={index}>
                        <a href={value.url} target="_blank">
                            <img src={value.urlToImage} />
                        </a>
                        <div className="d-flex justify-content-between">
                            <span>{value.source.name}</span>
                            <span>{new Date(value.publishedAt).toLocaleDateString('lt-LT')}</span>
                        </div>
                        <h4>{value.title}</h4>
                        <p>{value.description}</p>
                        <a 
                            href={value.url} 
                            target="_blank"
                            className="btn btn-secondary"
                        >
                            Skaityti plačiau
                        </a>
                    </div>
                )}
            </div>
        </>
    );
}

export default NewsAPI;