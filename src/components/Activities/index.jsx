import { HashLink as Link } from 'react-router-hash-link';
import data from '../../assets/data.json';

const Activities = () => {
  return (
    <section id="activities">
        <h2>Activités à Marseille</h2>
        <div className="activity-container">
          {Object.keys(data.activities).map((activity, index) => (
            <div key={index} className="activity-card">
              <Link to={`activity/${data.activities[activity].slug}`}>
                <figure className="img-container">
                  <img src={data.activities[activity].imgUrl} alt={data.activities[activity].imgAlt} />
                  <figcaption>{data.activities[activity].name}</figcaption>
                </figure>
              </Link>
            </div>
          ))}
        </div>
    </section>
  )
}

export default Activities;