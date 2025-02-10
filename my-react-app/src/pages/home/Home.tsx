import HomeImage from "../../assets/LogoHome.svg";

import { HomeContainer } from './styles';

export const Home: React.FC = () => {

    return (
        
        <HomeContainer>
            <figure>
                <img src={HomeImage} alt="HomeImage" />
            </figure>  
        </HomeContainer>
    )
}