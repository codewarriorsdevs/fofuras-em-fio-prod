import LogoHome from '../../assets/LogoHome.svg';
import { HomeContainer } from './styles';

function Home() {
    return (
        <HomeContainer>
            <img src={LogoHome} alt="Fofuras-em-Fios-Banner" />
            <h1>Home</h1>
        </HomeContainer>
    );
};

export default Home;