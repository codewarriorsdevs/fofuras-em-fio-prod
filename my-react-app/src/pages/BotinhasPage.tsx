import { ProductCardList } from "../components/productCardList/ProductCardList";

import { ProductCard } from "../components/productCard/ProductCard";

import Botinha1 from "./../assets/imgs/botinha1.jpg";
import Botinha2 from "./../assets/imgs/botinha2.jpg";
import Botinha3 from "./../assets/imgs/botinha3.jpg";
import Botinha4 from "./../assets/imgs/botinha4.jpg";

export const BotinhasPage = () => {
  return (
    <ProductCardList titleSection="Botinhas">
      <ProductCard
        nameProduct="Sadália"
        priceProduct="13.00"
        productImage={Botinha1}
      />
      <ProductCard
        nameProduct="Sadália"
        priceProduct="13.00"
        productImage={Botinha2}
      />
      <ProductCard
        nameProduct="Sadália"
        priceProduct="13.00"
        productImage={Botinha3}
      />
      <ProductCard
        nameProduct="Sadália"
        priceProduct="13.00"
        productImage={Botinha4}
      />
    </ProductCardList>
  );
};
