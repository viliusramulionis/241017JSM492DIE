import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const SinglePost = () => {
    const { indeksas } = useParams();
    const [data, setData] = useState({});
    
    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem('data'));

        setData(localData[indeksas]);
    }, []);

    return (
        <>
            <h1 className="mb-5">{data.title}</h1>
            <div>
                {data.description?.split('\n').map((value, index) => 
                    <span key={index}>
                        {value} <br />
                    </span>
                )}
            </div>
        </>
    );
}

export default SinglePost;