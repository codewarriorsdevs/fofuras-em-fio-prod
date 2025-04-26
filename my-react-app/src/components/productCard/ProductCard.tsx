import { ProductCardContainer } from "./styles";

import { Button } from "./../button/Button";

interface ProductCardProps {
  nameProduct: string;
  priceProduct: string;
  productImage: string;
}

export const ProductCard = ({
  nameProduct,
  priceProduct,
  productImage,
}: ProductCardProps) => {
  ("");
  return (
    <ProductCardContainer>
      <figure>
        <img src={productImage} alt="ProductImage" />
      </figure>

      <div>
        <section>
          <h2>{nameProduct}</h2>
          <p>R$ {priceProduct}</p>
        </section>
      </div>

      <Button textButton={"Comprar"} />
    </ProductCardContainer>
  );
};
