import Logo from "../logo/Logo";
import Navigation from "../navigation/Navigation";
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="d-flex align-items-center justify-content-between">
                    <Logo />
                    <Navigation />
                </div>
            </div>
        </header>
    );
}

export default Header