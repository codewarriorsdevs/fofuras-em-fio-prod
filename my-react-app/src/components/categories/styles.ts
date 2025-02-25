import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../styles/theme';

// Container do Carousel
export const CarouselContainer = styled.div`
  .carousel .slide {
    background: ${theme.colors.background};
    color: ${theme.colors.text};
  }
`;

export const CategoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  h2 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-size: 1.5rem;
    color: #23395B;
    margin: 0;
    padding: 2rem;
  }
`;

// Botão "Carrossel" e "Grid"
export const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: ${theme.colors.secondary};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: ${theme.colors.primary};
  cursor: pointer;
  z-index: 2;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 1);
  }
`;

// Container do Grid
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 2fr);
  gap: 1.5rem;
  padding: 1rem 2rem;
`;

// Item da Categoria (comum para Carousel e Grid)
export const CategoryItem = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

// Imagem da Categoria
export const CategoryImage = styled.div`
  width: 120px;
  height: 120px;
  margin: 0 auto;
  border: 10px solid white;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.16);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// Nome da Categoria
export const CategoryName = styled.p`
  margin-top: 1rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  color: ${theme.colors.primary};
`;

// Botão/Link "Ver tudo"
export const SeeAllLink = styled(Link)`
  display: inline-block;
  margin-bottom: 2rem;
  padding: 0.75rem 1.5rem;
  color: ${theme.colors.text};
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  
  text-decoration: none;
  border-radius: 25px;
  transition: background 0.3s ease;

  &:hover {
    color: ${theme.colors.secondary};
  }
`;