import { useState } from 'react'
import './TicTacToe.css';

function TicTacToe() {
    const [start, setStart] = useState(false)
    const [winner, setWinner] = useState();
    const [x, setX] = useState(true);
    
    const handleClick = (e) => {
        if(x) {
            e.target.textContent = 'x';
            setX(false)
        } else {
            e.target.textContent = '0';
            setX(true)
        }

        const data = document.querySelectorAll('button');

        const winningPos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8], 
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for(const pos of winningPos) { 
            if( 
                data[pos[0]].textContent !== '' &&
                data[pos[0]].textContent === data[pos[1]].textContent && 
                data[pos[1]].textContent === data[pos[2]].textContent
            ) {
                setWinner(data[pos[0]].textContent);
            }
        }
    }

    return (
        <>
            <h1>Kryžiukai nuliukai</h1>
            <button 
                className="btn btn-primary"
                onClick={() => setStart(true)}
            >Pradėti</button>
            {!winner && start && 
                <div className="zaidimas">
                    <button onClick={handleClick}></button>
                    <button onClick={handleClick}></button>
                    <button onClick={handleClick}></button>
                    <button onClick={handleClick}></button>
                    <button onClick={handleClick}></button>
                    <button onClick={handleClick}></button>
                    <button onClick={handleClick}></button>
                    <button onClick={handleClick}></button>
                    <button onClick={handleClick}></button>
                </div>
            }

            {winner && 
                <h2>Laimėtojas yra {winner}</h2>
            }
            
        </>
    );
}

export default TicTacToe;