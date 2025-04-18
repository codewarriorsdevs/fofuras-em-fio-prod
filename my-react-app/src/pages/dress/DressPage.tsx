import { Button } from '../../components/button/Button';
import { DressPageListContainer } from './styles';
import { ProductCardList } from '../intimusPageList/IntimusPageList';

// Importações de imagens corretas
import DreSSBaby from '../../assets/Image-dress1.jpg';
import DreSSBaby2 from '../../assets/vestidos.svg';


interface DressCardProps {
  id: string;
  namProducts: string;
  priceProducts: string;
  imageUrl: string;
}

export const DressCard = ({ 
  namProducts, 
  priceProducts, 
  imageUrl 
}: DressCardProps) => {
  return (
    <DressPageListContainer>
      <figure>
        {/* Usando imagem dinâmica do prop */}
        <img src={imageUrl} alt={`Produto ${namProducts}`} />
      </figure>
      
      <div className="product-info">
        <h2>{namProducts}</h2>
        <p>R$ {priceProducts}</p>
        <Button textButton={"Comprar"} />
      </div>
    </DressPageListContainer>
  );
};

export const DressPage = () => {
  // Dados corretos com imagens diferentes
  const products = [
    { id: '1', namProducts: "Conjunto vermelho", priceProducts: "74.99", imageUrl: DreSSBaby },
    { id: '2', namProducts: "Conjunto rosa", priceProducts: "69.99", imageUrl: DreSSBaby2 },
   
    // Adicione mais produtos conforme necessário
  ];

  return (
    <main>
      <ProductCardList titleSection="Vestidos">
        {products.map((product) => (
          <DressCard
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