import { useState, useEffect } from 'react';

const Cart = ({ setShowCart, data, setCart }) => {
    const [totals, setTotals] = useState(0);

    useEffect(() => {
        setTotals(data.reduce((suma, dabartineReiksme) => suma + dabartineReiksme.quantity * dabartineReiksme.price, 0));
    }, [data]);


    // let suma = 0;
    
    // for(const reiksme of data) {
    //     suma += reiksme.price;
    // }

    const removeProduct = (id) => {
        setCart(prev => {
            let index = prev.findIndex(value => value.id === id);
            prev.splice(index, 1);

            return [...prev];
        });
    }

    return (
        <>
            <h1>Krepšelis</h1>
            <button 
                className="btn btn-warning"
                onClick={() => setShowCart(false)}
            >Atgal į sąrašą</button>
            <div className="row mt-5">
                <div className="col-12 col-md-8">
                    {data.map((value, index) => 
                        <div className="row" key={value.id}>
                            <div className="col">
                                <img src={value.image} alt="" width="150" />
                            </div>
                            <div className="col">
                                <h5>{value.title}</h5>
                            </div>
                            <div className="col">
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    style={{ width: 100 }} 
                                    defaultValue={value.quantity} 
                                    onChange={(e) => {
                                        data[index].quantity = +e.target.value
                                        setCart([...data])
                                    }}
                                />
                            </div>
                            <div className="col">
                                <strong className="fs-5">${value.price.toFixed(2)}</strong>
                            </div>
                            <div className="col">
                                <button 
                                    className="btn btn-danger"
                                    onClick={() => removeProduct(value.id)}
                                >Remove</button>
                            </div>
                        </div>
                    )}
                </div>
                <div className="col-12 col-md-4">
                    <h3>Iš viso: ${totals.toFixed(2)}</h3>
                </div>
            </div>
        </>
    );
}

export default Cart;