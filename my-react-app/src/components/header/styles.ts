import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiMenu, FiSearch, FiShoppingBag, FiX } from 'react-icons/fi';

// Tipos
interface MobileMenuProps {
  $isOpen: boolean;
}

const theme = {
  colors: {
    primary: "rgba(35, 57, 91, 1)",       // Azul principal do header
    accent: "#FF69B4",                    // Rosa das linhas divisórias
    text: "#FFFFFF",                      // Texto branco
    badge: "#FF4757",                     // Vermelho do contador do carrinho
    searchBg: "rgba(255, 255, 255, 0.1)", // Fundo translúcido do input
  },
  spacing: {
    desktop: "2rem",    // 32px
    mobile: "1rem",     // 16px
    menuItem: "0.75rem" // 12px
  },
  typography: {
    title: "1.25rem",   // 20px
    regular: "1rem",    // 16px
    small: "0.875rem"   // 14px
  }
};

// Container Principal
export const HeaderContainer = styled.header`
  background: ${theme.colors.primary};
  height: 190px; // Altura exata do header no desktop
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    height: 180px; // Altura mobile
  }
`;
// Conteúdo do Header
export const HeaderContent = styled.div`
  max-width: 1100px; // Largura máxima do conteúdo
  width: 100%;
  margin: 0 auto;
  padding: 0 ${theme.spacing.desktop};
  
  @media (max-width: 768px) {
    padding: 0 ${theme.spacing.mobile};
  }
`;
// Componentes Mobile
export const MobileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`;

// Componentes Desktop
export const DesktopContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const DesktopTopRow = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1rem;
`;

// Logo
export const Logo = styled.img`
  height: 70px; // Tamanho desktop
  margin: 0 48px; // Espaçamento exato entre logo e elementos adjacentes

  @media (max-width: 768px) {
    height: 50px; // Tamanho mobile
    margin: 0 auto;
  }
`;

// Search
export const SearchContainer = styled.div`
  flex: 1;
  max-width: 693px; // Largura máxima do input
  margin: 0 32px;
`;

export const StyledSearchInput = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 1rem 0 3rem;
  border-radius: 24px;
  background: white;
  color: #23395B;
  border: 2px solid #E2E8F0;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #23395B;
    box-shadow: 0 0 0 3px rgba(35, 57, 91, 0.1);
  }

  &::placeholder {
    color: #94A3B8;
  }
`;

export const StyledSearchIcon = styled(FiSearch)`
  position: fixed;
  left: 1rem;
  top: 100%;
  //transform: translateY(-50%);
  color: #23395B;
  font-size: 1.25rem;
`;

// NavLinks Desktop
export const DesktopNavLinks = styled.div`
  display: flex;
  gap: 2.5rem;
  margin-top: 1.5rem;
  justify-content: center;
`;

export const DesktopNavLink = styled(Link)`
  color: ${props => props.theme.colors.background};
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  padding: 0.5rem;
  margin: 0 1rem;
  top: 50%;
  transform: translateY(-50%);
  transition: color 0.3s ease;
  z-index: 100;

  &:hover {
    color: #FF69B4;
  }

  &.active {
    color: #FF69B4;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100%;
      height: 2px;
      background: #FF69B4;
    }
  }
`;

// Carrinho
export const CartContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const CartIcon = styled(FiShoppingBag)`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.secondary};
`;

export const CartBadge = styled.div`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  background: #ff4757;
  color: white;
  border-radius: 50%;
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
`;

// Menu
export const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => props.theme.colors.secondary};
  padding: 0.5rem;

  &:active {
    color: ${props => props.theme.colors.secondary};
  }
`;

export const MenuIcon = styled(FiMenu)`
  font-size: 2.5rem;
`;

export const CloseIcon = styled(FiX)`
  font-size: 1.5rem;
`;

export const MobileMenu = styled.nav<MobileMenuProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 280px;
  height: 100vw;
  background: rgba(35, 57, 91, 1);
  transform: ${({ $isOpen }) => $isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;
  padding: 2rem;
  z-index: 1000;
`;

export const MenuHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
`;

export const NavList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: ${props => props.theme.colors.background};
  font-size: ${theme.typography.regular};

  &.active {
    color: ${props => props.theme.colors.secondary};
  }
`;

export const NavLink = styled(Link)`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600; // Semi-Bold
  font-size: ${theme.typography.regular};
  padding: ${theme.spacing.menuItem} 0;
  
  &.active {
    color: ${props => props.theme.colors.secondary};
    text-decoration-thickness: 2px;
  }
`;

export const Divider = styled.div`
  height: 2px; // Espessura da linha
  background: ${theme.colors.accent};
  margin: 1.5rem 0;
`;

export const SectionTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-weight: 800; // Extra-Bold
  font-size: ${theme.typography.title};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;