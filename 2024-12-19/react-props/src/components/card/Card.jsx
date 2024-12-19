const Card = (props) => {
    return (
        <div className="card my-4">
            {props.nuotrauka 
                ? 
                <img 
                    src={props.nuotrauka} 
                    alt={props.pavadinimas} 
                    className="mb-4"
                />
                :
                `Nuotraukos nėra`
            }
            <h3>{props.pavadinimas}</h3>
            <p>{props.aprasymas}</p>
        </div>
    );
}

export default Card;