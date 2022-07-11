import { Link } from 'react-router-dom'
import lost from '../../assets/images/lost.jpg'

const Error404 = () => {
    return (
        <section id="errorPage">
            <div className="img-container">
                <img src={lost} alt="lost illustration" />
            </div>
            <div className='error-text-container'>
                <h1>404</h1>
                <h2>Page introuvable</h2>
                <p>Votre voyage vous a mené vers une destination inconnue. Cliquez sur le bouton ci-dessous pour revenir sur la page d'accueil.</p>
                
                <button className='main-btn'>
                    <Link to="/">Suivez-moi</Link>
                </button>

            </div>
        </section>
    )
}

export default Error404;