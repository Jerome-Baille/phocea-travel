import { HashLink as Link } from 'react-router-hash-link';
import data from '../../assets/data.json';

const Footer = () => {
    return (
        <footer>
            {Object.keys(data.footers).map((footer, index) => (
                <ul key={index} className='footer-list'>
                    <h3>{data.footers[footer].name}</h3>

                    {Object.keys(data.footers[footer].elements).map((element, index) => (
                        <li key={index}>
                            <Link to={data.footers[footer].elements[element].url}>{data.footers[footer].elements[element].description}</Link>
                        </li>
                    ))}
                </ul>   
            ))}
        </footer>
    )
}

export default Footer;