const List = (props) => {
    // if(props.items) {
    //     return (
    //         <ul>
    //             {props.items.map(value => <li>{value}</li>)}
    //         </ul>
    //     );
    // }
    
    // Kiekvienas elementas generuojamas iš masyvo privalo turėti unikalų key propsą
    // Kitu atveju gausite įspėjimą

    return props.items && (
        <ul className="list-group">
            {props.items.map((value, index) => 
                <li 
                    className="list-group-item"
                    key={index}
                >{value}</li>
            )}
        </ul>
    );
}

export default List;