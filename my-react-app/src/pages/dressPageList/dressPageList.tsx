import { ComponentProps } from "react";

import styled from "styled-components";

import { theme } from "../../styles/theme";

const DressPageListContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  > section:first-child {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;

    h1 {
      font-size: 2rem;
      font-weight: 900;
      color: ${({ theme }) => theme.colors.primary};
      white-space: nowrap;
    }

    hr {
      flex: 1;
      border: 1px solid ${theme.colors.secondary};
    }
  }

  > section:last-child {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    justify-content: center;

    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

interface DressPageListProps extends ComponentProps<'div'> { titleSection: string; }

export const ProductCardList = ({ titleSection, children, ...props }: DressPageListProps) => {

    return ( 

        <DressPageListContainer {...props  }> 

            <section>
                
                <h1> { titleSection } </h1>
                <hr />
            </section>

            <section>
                { children } 
            </section>
        </DressPageListContainer> 
    
    );

}
