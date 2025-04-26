import HomeImage from "../../assets/LogoHome.svg";
import { CategoryCarousel, CategoryGrid } from "../../components/categories";
import { ProductCard } from "../../components/productCard/ProductCard";
import { HomeContainer } from "./styles";
import { ProductCardList } from "./../../components/productCardList/ProductCardList";

import Sandalia from "../../assets/imgs/productImage.png";

export const Home: React.FC = () => {
  return (
    <HomeContainer>
      <figure>
        <img src={HomeImage} alt="HomeImage" />
      </figure>
      <div>
        <section>
          <div className="md:hidden">
            <CategoryCarousel />
          </div>
          <div className="hidden md:block">
            <CategoryGrid />
          </div>
        </section>
      </div>

      <ProductCardList titleSection="Produtos em destaque">
        <ProductCard
          nameProduct="Sadália"
          priceProduct="13.00"
          productImage={Sandalia}
        />
        <ProductCard
          nameProduct="Sadália"
          priceProduct="13.00"
          productImage={Sandalia}
        />
        <ProductCard
          nameProduct="Sadália"
          priceProduct="13.00"
          productImage={Sandalia}
        />
        <ProductCard
          nameProduct="Sadália"
          priceProduct="13.00"
          productImage={Sandalia}
        />
        <ProductCard
          nameProduct="Sadália"
          priceProduct="13.00"
          productImage={Sandalia}
        />
        <ProductCard
          nameProduct="Sadália"
          priceProduct="13.00"
          productImage={Sandalia}
        />
        <ProductCard
          nameProduct="Sadália"
          priceProduct="13.00"
          productImage={Sandalia}
        />
        <ProductCard
          nameProduct="Sadália"
          priceProduct="13.00"
          productImage={Sandalia}
        />
        <ProductCard
          nameProduct="Sadália"
          priceProduct="13.00"
          productImage={Sandalia}
        />
        <ProductCard
          nameProduct="Sadália"
          priceProduct="13.00"
          productImage={Sandalia}
        />
      </ProductCardList>
    </HomeContainer>
  );
};
