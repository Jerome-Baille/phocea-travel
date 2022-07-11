import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
    return (
    <header className="header">
        <Link to="/">
            <h1 className='logo-title'>Phocéa Travel</h1>
        </Link>
        <nav>
            <ul>
                <li>
                    <Link to="/#booking" aria-label="Go to all the accomodations">
                        Hébergements
                    </Link>
                </li>
                <li>
                    <Link to="/#activities" aria-label="Go to all the activities">
                        Activités
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default Header;