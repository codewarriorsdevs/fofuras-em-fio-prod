import { Link } from 'react-router-dom';
import {
  GridContainer,
  CategoryItem,
  CategoryImage,
  CategoryName,
  SeeAllLink,
  CategoryHeader,
} from './styles';

import sapatos from '../../assets/sapatos.svg';
import vestidos from '../../assets/vestidos.svg';
import shorts from '../../assets/shorts.svg';
import sandalias from '../../assets/sandalias.svg';
import conjuntos from '../../assets/conjuntos.svg';

const categories = [
  { name: 'Sapatos', path: '/sapatinhos', image: sapatos },
  { name: 'Vestidos', path: '/vestidos', image: vestidos },
  { name: 'Shorts', path: '/roupas-intimas', image: shorts },
  { name: 'Sandálias', path: '/sandalias', image: sandalias },
  { name: 'Conjuntos', path: '/conjuntos', image: conjuntos },
];

const CategoryGrid = () => {
  return (
    <div>
      {/* Cabeçalho com título e botão "Ver tudo" */}
      <CategoryHeader>
        <h2>Categorias</h2>
        <SeeAllLink to="/produtos">Ver tudo →</SeeAllLink>
      </CategoryHeader>

      {/* Grid de categorias */}
      <GridContainer>
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
      </GridContainer>
    </div>
  );
};

export default CategoryGrid;