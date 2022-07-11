import { Link } from 'react-router-dom'

const SubmitAHotel = () => {
    return (
        <section id="Contact">
            <h2>Soumettre votre hotel</h2>

            <div className="contact-form">
                <form action="">
                    <label htmlFor="name">
                        <input type="text" className="form-control" id="name" placeholder="Nom de votre hôtel" />
                    </label>
                    <label htmlFor="address">
                        <input type="text" className="form-control" id="name" placeholder="Adresse de votre hôtel" />
                    </label>
                    <label htmlFor="email">
                        <input type="email" className="form-control" id="email" placeholder="Votre email" />
                    </label>
                    <label htmlFor="message">
                        <textarea className="form-control" id="message" rows="3" placeholder="Votre message"></textarea>
                    </label>
                    <input type="submit" className='main-btn' value="SEND" />
                </form>
            </div>

            <Link to="/" className='main-btn'>Retour à l'accueil</Link>
        </section>
    )
}
export default SubmitAHotel