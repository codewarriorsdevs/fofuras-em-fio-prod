import HomeImage from "../../assets/homeImage.svg";

import { HomeContainer } from './style.ts';

export const Home: React.FC = () => {

    return (
        
        <HomeContainer>
            <figure>
                <img src={HomeImage} alt="HomeImage" />
            </figure>  
        </HomeContainer>
    )
}
