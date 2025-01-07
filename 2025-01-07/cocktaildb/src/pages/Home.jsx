import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = ({ keyword, setKeyword }) => {
    const input = useRef();
    const [data, setData] = useState([]);

    useEffect(() => {
        if(keyword === '')
            return;
        
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + keyword)
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp.drinks);
            setData(resp.drinks)
        });
    }, [keyword]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log(input.current.value);

        if(input.current.value === '') {
            
            return;
        }

        setKeyword(input.current.value);
        localStorage.setItem('keyword', input.current.value);
    }

    return (
        <>
            <h1>Home</h1>
            <form 
                className="input-group my-5"
                onSubmit={handleSubmit}
            >
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Please enter cocktail name"
                    ref={input}
                    required
                />
                <button className="btn btn-primary">Search</button>
            </form>
            <div className="row">
                {data.map(value => 
                    <div key={value.idDrink} className="col-12 col-md-4 mb-3">
                        <Link to={"/single/" + value.idDrink}>
                            <img src={value.strDrinkThumb} alt="" />
                        </Link>
                        <Link to={"/single/" + value.idDrink}>
                            <h4 className="mt-3">{value.strDrink}</h4>
                        </Link>
                    </div>
                )}
            </div>
        </>
    )
}

export default Home;