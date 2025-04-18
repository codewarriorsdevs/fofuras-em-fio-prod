import { Button } from '../../components/button/Button';
import { OutfitsPageListContainer } from './styles';
import { ProductCardList } from '../intimusPageList/IntimusPageList';

// Importações de imagens corretas
import OutfitBaby from '../../assets/conjuntos.svg';


interface DressCardProps {
  id: string;
  namProducts: string;
  priceProducts: string;
  imageUrl: string;
}

export const OutfitsCard = ({ 
  namProducts, 
  priceProducts, 
  imageUrl 
}: DressCardProps) => {
  return (
    <OutfitsPageListContainer>
      <figure>
        {/* Usando imagem dinâmica do prop */}
        <img src={imageUrl} alt={`Produto ${namProducts}`} />
      </figure>
      
      <div className="product-info">
        <h2>{namProducts}</h2>
        <p>R$ {priceProducts}</p>
        <Button textButton={"Comprar"} />
      </div>
    </OutfitsPageListContainer>
  );
};

export const OutfitsPage = () => {
  // Dados corretos com imagens diferentes
  const products = [
    { id: '1', namProducts: "Conjuntinhos", priceProducts: "44.99", imageUrl: OutfitBaby },

   
    // Adicione mais produtos conforme necessário
  ];

  return (
    <main>
      <ProductCardList titleSection="Conjuntinhos">
        {products.map((product) => (
          <OutfitsCard
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