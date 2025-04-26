import { Button } from '../../components/button/Button';
import { IntimusPageListContainer } from './styles';
import { ProductCardList } from '../intimusPageList/IntimusPageList';

// Importações de imagens corretas
import ShoRtsDuo from '../../assets/peças-1.jpg';
import ShortPink from '../../assets/peças-2.jpg';
import ShoRtSBlue from '../../assets/peças-3.jpg';

interface IntimusCardProps {
  id: string;
  namProducts: string;
  priceProducts: string;
  imageUrl: string;
}

export const ProductCard = ({ 
  namProducts, 
  priceProducts, 
  imageUrl 
}: IntimusCardProps) => {
  return (
    <IntimusPageListContainer>
      <figure>
        {/* Usando imagem dinâmica do prop */}
        <img src={imageUrl} alt={`Produto ${namProducts}`} />
      </figure>
      
      <div className="product-info">
        <h2>{namProducts}</h2>
        <p>R$ {priceProducts}</p>
        <Button textButton={"Comprar"} />
      </div>
    </IntimusPageListContainer>
  );
};

export const IntimusPages = () => {
  // Dados corretos com imagens diferentes
  const products = [
    { id: '1', namProducts: "Cacinhas Dupla", priceProducts: "32.99", imageUrl: ShoRtsDuo },
    { id: '2', namProducts: "Calcinha Rosa", priceProducts: "17.99", imageUrl: ShortPink },
    { id: '3', namProducts: "Calcinha Azul", priceProducts: "16.99", imageUrl: ShoRtSBlue },
    // Adicione mais produtos conforme necessário
  ];

  return (
    <main>
      <ProductCardList titleSection="Calcinhas">
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