import { useState } from 'react';

const Quantity = () => {
    const [quantity, setQuantity] = useState(0);

    const handlePlus = () => {
        setQuantity(quantity + 1);
    }

    const handleMinus = () => {
        setQuantity(quantity - 1);
    }

    return(
        <>
            <button onClick={handleMinus}>Minus</button>
            <h1>{quantity}</h1>
            <button onClick={handlePlus}>Plius</button>
        </>
    );
}

export default Quantity;