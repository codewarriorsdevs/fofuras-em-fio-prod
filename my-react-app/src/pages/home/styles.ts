import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0; /* Removendo espaços extras */
    margin: 0;
    
    img {
        max-width: 1280px;
        height: auto;

        @media (max-width: 768px) {
            max-width: 495px;
            height: 200px;
        }
    }

    h1 {
        //font-size: 28px;
        //margin-top: 20px;
        text-align: center;
    }
`;
