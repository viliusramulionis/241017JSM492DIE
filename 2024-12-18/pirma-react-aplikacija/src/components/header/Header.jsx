// CSS Stiliaus priskyrimas:
import './Header.css';
import logo from './Logo.svg';

export default function Header() {
    // JSX sintaksės taisyklės:
    // Kiekvienas komponentas privalo grąžinti vieną elementą
    // Failai kuriuose yra grąžinamas JSX kodas turi turėti galūnę .jsx
    // <> - Fragmentas nurodomas, norint grąžinti tik vieną elementą
    // Tarp {} - Įjungiama javascript sintaksė
    return (
        <>
            <header className="d-flex">
                <img src={logo} alt={'Stringas1' + 'Stringas2'} />
                <nav>
                    <ul className="d-flex">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">History</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}