import { useState } from 'react'
import './TicTacToe.css';

function TicTacToe() {
    const [buttons, setButtons] = useState()
    const [ended, setEnded] = useState(false);
    const [x, setX] = useState(true);
    console.log('Rendered', x)
    const start = () => {
        const data = []

        for(let i = 0; i < 9; i++) {
            data.push(
                <button 
                    key={i} 
                    onClick={handleClick}
                ></button>
            )
        }

        setButtons(data);
    }

    const handleClick = (e) => {
        if(x) {
            e.target.textContent = 'x';
            setX(false)
        } else {
            e.target.textContent = '0';
            setX(true)
        }
    }

    return (
        <>
            <h1>Kryžiukai nuliukai</h1>
            <button 
                className="btn btn-primary"
                onClick={start}
            >Pradėti</button>
            <div className="zaidimas">
                {buttons}
            </div>
            
        </>
    );
}

export default TicTacToe;