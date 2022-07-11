import Activities from '../Activities';
import Search from '../Search';
import Hosting from '../Hosting';

const Home = () => {
    return(
        <main>
          <Search />
          <Hosting />
          <Activities />
        </main>
    )
}

export default Home;