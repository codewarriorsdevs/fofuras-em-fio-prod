import { ComponentProps } from "react";

import styled from "styled-components";

import { theme } from "../../styles/theme";

const ProductCardListContainer = styled.div`

    display: flex;
    flex-direction: column;
    padding: 0 2rem 0 2rem;

    > section:first-child {

        display: flex;
        align-items: center;
        gap: 2rem;
        margin-bottom: 1rem;

        > h1 {
                
            font-size: 2rem;
            font-weight: 700;
            color: ${({ theme }) => theme.colors.primary};

            display: flex;
            flex-wrap: nowrap;
        }

        > hr {

            margin-top: 7px;
            flex: 1;
            border: 1px solid ${theme.colors.secondary};
        }
    }

    > section:last-child {

        display: flex;
        gap: 2rem;
        flex-wrap: wrap;

        > div {

            flex: 1;
            margin-bottom: 1rem;
        }
    }

`;

interface ProductCardListProps extends ComponentProps<'div'> { titleSection: string; }

export const ProductCardList = ({ titleSection, children, ...props }: ProductCardListProps) => {

    return ( 

        <ProductCardListContainer {...props  }> 

            <section>
                
                <h1> { titleSection } </h1>
                <hr />
            </section>

            <section>
                { children } 
            </section>
        </ProductCardListContainer> 
    
    );

}