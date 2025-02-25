import HomeImage from "../../assets/LogoHome.svg";
import { CategoryCarousel, CategoryGrid } from '../../components/categories';
import { HomeContainer } from './styles';

export const Home: React.FC = () => {

    return (
        
        <HomeContainer>
            <figure>
                <img src={HomeImage} alt="HomeImage" />
            </figure>  
            <div>
                <section>
                    <div className="md:hidden">
                        <CategoryCarousel />
                    </div>
                    <div className="hidden md:block">
                        <CategoryGrid />
                    </div>
                </section>
            </div>
        </HomeContainer>
    )
}