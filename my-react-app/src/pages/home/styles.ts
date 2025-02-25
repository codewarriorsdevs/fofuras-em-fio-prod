import styled from 'styled-components'

export const HomeContainer = styled.section`

    background-color: violet;
    width: 100%;
    height: 595px;

    > figure {

        height: 100%;

        > img {

            width: 100vw;
            height: 100%;
            object-fit: cover;
        }
    }

    @media screen and ( max-width: 1000px ) { height: 230px }
`;