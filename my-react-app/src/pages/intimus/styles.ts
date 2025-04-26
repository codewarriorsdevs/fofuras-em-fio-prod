import styled from "styled-components";

export const IntimusPageListContainer = styled.div`
  min-width: 18rem;
  min-height: 22rem; /* Aumentado para caber o conteúdo */
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 1rem;

  figure {
    width: 100%;
    height: 12rem;
    border-radius: 10px 10px 0 0;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .product-info {
    padding: 1rem;
    text-align: center;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h2 {
      font-size: 1.25rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.primary};
    }

    p {
      font-size: 1.1rem;
      color: ${({ theme }) => theme.colors.secondary};
    }

    button {
      margin-top: auto;
    }
  }

  &:hover {
    transform: scale(1.02);
  }
`;
