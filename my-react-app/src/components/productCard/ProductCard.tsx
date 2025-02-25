import { ProductCardContainer } from './styles';

import productImage from '../../assets/imgs/productImage.png';
import { Button } from './../button/Button';

interface ProductCardProps {

    nameProduct: string;
    priceProduct: string;
}

export const ProductCard= ({ nameProduct, priceProduct }: ProductCardProps) => {

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
    )
}
