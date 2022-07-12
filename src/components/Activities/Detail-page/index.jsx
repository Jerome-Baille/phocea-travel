import { useParams } from "react-router-dom";
import data from '../../../assets/data.json'
import { Link } from "react-router-dom";

const ActivitiesDetailPage = () => {
    const { id } = useParams();

  return (
    <section className="booking-detail">
        <div className="booking-container">
            <h1>{data.activities[id].name}</h1>
            <p>
                {   data.activities[id].description? 
                    data.activities[id].description : 
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis tortor eget neque ultricies volutpat quis non elit. Quisque sodales vel felis et facilisis. Morbi augue elit, venenatis sit amet lobortis et, auctor sit amet libero. Curabitur vestibulum, quam in ornare aliquam, neque nunc scelerisque nisi, ac aliquam lorem quam et felis. Donec molestie ex nec est viverra, sed vulputate turpis suscipit. Mauris risus orci, feugiat non ligula eget, consectetur condimentum tortor. Curabitur lobortis sapien ligula, eget porttitor urna auctor nec. Praesent et urna at nulla molestie fermentum. Aliquam at egestas nibh, nec ultrices sem. Vestibulum hendrerit placerat nunc quis porta. Suspendisse mollis eros eu venenatis accumsan. Praesent non venenatis sem. Suspendisse imperdiet, elit a tincidunt finibus, ante dolor pretium nunc, fringilla vestibulum leo quam vitae tortor. Curabitur sed ex et dui mattis venenatis.'
                }
            </p>
            <div className="main-btn-container">
                <Link to="/" className='main-btn'>Retour à l'accueil</Link>
            </div>
        </div>
        <div className="img-container">
            <img src={data.activities[id].imgUrl} alt={data.activities[id].imgAlt} />
        </div>
    </section>
  );
}

export default ActivitiesDetailPage;