import styled from "styled-components";

export const ProductCardContainer = styled.div`

    min-width: 18rem;
    min-height: 18rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    transition: transform .3s ease;

    border-radius: 10px;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);

    > figure {

        width: 100%;
        border-radius: 10px 10px 0 0;

        > img {

            max-height: 12rem;
            border-radius: inherit;
            object-fit: cover;
            width: inherit;
        }
    }

    > div {

        width: 100%;
        padding-left: 1rem;
        > section {

            > h2 {
                font-size: 1.5rem;
                font-weight: 600;
                color: ${({ theme }) => theme.colors.primary};
            }
        }
    }

    &:hover {

        transform: scale(1.02);
    }
`;