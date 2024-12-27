const Cart = ({ setShowCart }) => {
    return (
        <>
            <h1>Krepselis</h1>
            <button onClick={() => setShowCart(false)}>Atgal į sąrašą</button>
        </>
    );
}

export default Cart