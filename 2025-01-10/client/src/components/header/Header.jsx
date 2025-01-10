import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <header className="text-bg-dark d-flex justify-content-center py-3 mb-5">
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <Link to="/" className="nav-link text-white">Titulinis</Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin" className="nav-link text-white">Administratorius</Link>
                </li>
                <li className="nav-item">
                    <Link to="/new-post" className="nav-link text-white">Naujas įrašas</Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;