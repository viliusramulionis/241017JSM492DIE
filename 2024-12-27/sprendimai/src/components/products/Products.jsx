const Products = ({ setShowCart, setKrepselis, krepselis }) => {
    
    return (
        <>
            <h1>Produktai</h1>
            <button onClick={() => {
                // Pridedame i krepselio masyva duomenis
                // Patikrinimas ar jau tokia preke egzistuoja
                setShowCart(true)
                
                // Papildymo sukūrimas
                // krepselis.push("Pirma")
                // setKrepselis(krepselis)

                setKrepselis((ankstesneReiksme) => {
                    ankstesneReiksme.push("Pirma")
                    return ankstesneReiksme;
                });

            }}>Į krepšelį</button>
        </>
    );
}

export default Products