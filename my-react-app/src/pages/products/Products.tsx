import { ProductCardList } from "../../components/productCardList/ProductCardList";

import { ProductCard } from "../../components/productCard/ProductCard";

import AllStart1 from "../../assets/imgs/allStart1.jpg";
import AllStart2 from "../../assets/imgs/allStart2.jpg";
import AllStart3 from "../../assets/imgs/allStart3.jpg";

const Products: React.FC = () => {
  return (
    <ProductCardList titleSection="All Start">
      <ProductCard
        nameProduct="Sadália"
        priceProduct="13.00"
        productImage={AllStart1}
      />
      <ProductCard
        nameProduct="Sadália"
        priceProduct="13.00"
        productImage={AllStart2}
      />
      <ProductCard
        nameProduct="Sadália"
        priceProduct="13.00"
        productImage={AllStart3}
      />
    </ProductCardList>
  );
};

export default Products;
