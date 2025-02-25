import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';
import {
  CarouselContainer,
  CategoryItem,
  CategoryImage,
  CategoryName,
  CarouselButton,
} from './styles';

import sapatos from '../../assets/sapatos.svg';
import vestidos from '../../assets/vestidos.svg';
import shorts from '../../assets/shorts.svg';
import sandalias from '../../assets/sandalias.svg';
import conjuntos from '../../assets/conjuntos.svg';

const categories = [
  { name: 'Sapatos', path: '/sapatos', image: sapatos },
  { name: 'Vestidos', path: '/vestidos', image: vestidos },
  { name: 'Shorts', path: '/shorts', image: shorts },
  { name: 'Sandálias', path: '/sandalias', image: sandalias },
  { name: 'Conjuntos', path: '/conjuntos', image: conjuntos },
];

const CategoryCarousel = () => {
  return (
    <CarouselContainer>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        useKeyboardArrows
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <CarouselButton
              type="button"
              onClick={onClickHandler}
              aria-label={label}
              style={{ left: '10px' }}
            >
              &lt;
            </CarouselButton>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <CarouselButton
              type="button"
              onClick={onClickHandler}
              aria-label={label}
              style={{ right: '20px' }}
            >
              &gt;
            </CarouselButton>
          )
        }
      >
        {categories.map((category, index) => (
          <CategoryItem key={index}>
            <Link to={category.path}>
              <CategoryImage>
                <img src={category.image} alt={category.name} />
              </CategoryImage>
              <CategoryName>{category.name}</CategoryName>
            </Link>
          </CategoryItem>
        ))}
      </Carousel>
    </CarouselContainer>
  );
};

export default CategoryCarousel;