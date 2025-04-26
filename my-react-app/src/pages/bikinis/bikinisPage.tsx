import { ProductCardList } from "../../components/productCardList/ProductCardList";

import { ProductCard } from "../../components/productCard/ProductCard";

import Biquini from "./../../assets/imgs/biquini.jpg";

const BiquinisPage = () => {
  return (
    <ProductCardList titleSection="Biquinis">
      <ProductCard
        nameProduct="Biquini"
        priceProduct="13.00"
        productImage={Biquini}
      />
    </ProductCardList>
  );
};

export default BiquinisPage;
