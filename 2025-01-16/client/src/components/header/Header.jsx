import { Link } from 'react-router-dom';
import axios from 'axios';

const Header = ({ user, setUser }) => {
    const handleLogout = () => {
        axios.get('/api/logout')
        .then(resp => setUser(false));
    }

    return (
        <header>
            <div className="container">
                <nav>
                    <ul className="nav nav-pills card-header-pills">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>

                        { user ? 
                            <>
                                <li className="nav-item">
                                    <Link to="/users" className="nav-link">Users</Link>
                                </li>
                                <li className="nav-item">
                                    <Link 
                                        to="/"
                                        className="nav-link"
                                        onClick={handleLogout}    
                                    >Logout</Link>
                                </li>
                            </>
                            :
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">Login</Link>
                            </li>
                        }
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;