import { Button } from "../../components/button/Button";
import { ShoesPageListContainer } from "./styles";
import { ProductCardList } from "../intimusPageList/IntimusPageList";

// Importações de imagens corretas
import ShoEsBaby from "../../assets/imagem-sapatos1.jpg";
import ShoEsBaby2 from "../../assets/imgs/productImage.png";
import ShoEsBaby3 from "../../assets/sandalias.svg";
import ShoEsBaby4 from "../../assets/sapatos.svg";

import Botinha2 from "../../assets/imgs/botinha2.jpg";
import Botinha3 from "../../assets/imgs/botinha3.jpg";

interface ShoesCardProps {
  id: string;
  namProducts: string;
  priceProducts: string;
  imageUrl: string;
}

export const ProductCard = ({
  namProducts,
  priceProducts,
  imageUrl,
}: ShoesCardProps) => {
  return (
    <ShoesPageListContainer>
      <figure>
        {/* Usando imagem dinâmica do prop */}
        <img src={imageUrl} alt={`Produto ${namProducts}`} />
      </figure>

      <div className="product-info">
        <h2>{namProducts}</h2>
        <p>R$ {priceProducts}</p>
        <Button textButton={"Comprar"} />
      </div>
    </ShoesPageListContainer>
  );
};

export const ShoesPage = () => {
  // Dados corretos com imagens diferentes
  const products = [
    {
      id: "1",
      namProducts: "Sandália verde",
      priceProducts: "24.99",
      imageUrl: ShoEsBaby,
    },
    {
      id: "2",
      namProducts: "Chinelinho",
      priceProducts: "19.99",
      imageUrl: ShoEsBaby2,
    },
    {
      id: "3",
      namProducts: "Sandália vermelha",
      priceProducts: "21.99",
      imageUrl: ShoEsBaby3,
    },
    {
      id: "4",
      namProducts: "Ténis Feminino",
      priceProducts: "64.99",
      imageUrl: ShoEsBaby4,
    },
    {
      id: "5",
      namProducts: "Botinha",
      priceProducts: "14.99",
      imageUrl: Botinha2,
    },
    {
      id: "6",
      namProducts: "Botinha",
      priceProducts: "14.99",
      imageUrl: Botinha3,
    },

    // Adicione mais produtos conforme necessário
  ];

  return (
    <main>
      <ProductCardList titleSection="Sapatinhos">
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
