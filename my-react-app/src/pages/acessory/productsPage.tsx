import { Button } from '../../components/button/Button';
import { AccessoriesPageContainer } from './styles';
import { ProductCardList } from '../acessoryPageList/AccessoriesPageList';

// Importações de imagens corretas
import SanDalias from '../../assets/sandalias.svg';
import SaPatos from '../../assets/image 4.svg';
import SaPatinHos from '../../assets/image 3.svg';
import SaPatin from '../../assets/image 2.svg';
import ConJUnTos from '../../assets/conjuntos.svg';
import ShoRtS from '../../assets/shorts.svg';

interface AccessoryCardProps {
  id: string;
  namProducts: string;
  priceProducts: string;
  imageUrl: string;
}

export const ProductCard = ({ 
  namProducts, 
  priceProducts, 
  imageUrl 
}: AccessoryCardProps) => {
  return (
    <AccessoriesPageContainer>
      <figure>
        {/* Usando imagem dinâmica do prop */}
        <img src={imageUrl} alt={`Produto ${namProducts}`} />
      </figure>
      
      <div className="product-info">
        <h2>{namProducts}</h2>
        <p>R$ {priceProducts}</p>
        <Button textButton={"Comprar"} />
      </div>
    </AccessoriesPageContainer>
  );
};

export const AccessoriesPage = () => {
  // Dados corretos com imagens diferentes
  const products = [
    { id: '1', namProducts: "Sandália", priceProducts: "17.99", imageUrl: SanDalias },
    { id: '2', namProducts: "Sapato", priceProducts: "25.99", imageUrl: SaPatos },
    { id: '3', namProducts: "Sapato de Pato", priceProducts: "35.99", imageUrl: SaPatinHos },
    { id: '4', namProducts: "Sapato de Pato", priceProducts: "35.99", imageUrl: SaPatin }, 
    { id: '5', namProducts: "Conjuntos", priceProducts: "17.99", imageUrl: ConJUnTos },
    { id: '6', namProducts: "Shorts", priceProducts: "17.99", imageUrl: ShoRtS },
    // Adicione mais produtos conforme necessário
  ];

  return (
    <main>
      <ProductCardList titleSection="Acessórios">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            namProducts={product.namProducts}
            priceProducts={product.priceProducts}
            imageUrl={product.imageUrl}
          />
        ))}
      </ProductCardList>
    </main>
  );
};