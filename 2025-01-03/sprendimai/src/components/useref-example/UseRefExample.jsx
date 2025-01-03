import { useState, useRef } from 'react';
import './UseRefExample.css';

const UseRefExample = () => {
    const [bg, setBg] = useState('white');
    const [value, setValue] = useState('');
    const element = useRef();
    const input = useRef();
    
    console.log('Rendered')

    return (
        <>
            <form 
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log(input.current.value)

                    // const formdata = new FormData(e.target);
                    // const data = {}

                    // for(const value of formdata.entries()) {
                    //     data[value[0]] = value[1];            
                    // }

                    // console.log(data);
                }}
                className="my-5 input-group"
            >
                <input 
                    type="text" 
                    ref={input} 
                    className="form-control" 
                    onChange={(e) => setValue(e.target.value)}
                    name="value"
                />
                <button className="btn btn-primary">Siųsti</button>
            </form>

            <div className="box d-flex">
                <div>
                    <a
                        href="#"
                        className="btn btn-primary"
                        onClick={(e) => {
                            // Paimama ketvirto div bloko textContent reikšmė:
                            console.log(element.current.textContent);
                            setBg('red')
                        }}
                    >Paspausk Mane</a>
                </div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div
                    style={{
                        backgroundColor: bg
                    }}
                    ref={element}
                >4</div>
                <div>5</div>
            </div>
        </>
    );
}

export default UseRefExample;