import React, { useState, useCallback, memo } from 'react';
import Logo from '../../assets/Logo.svg';
import { useLocation } from 'react-router-dom';
import {
    HeaderContainer,
    HeaderContent,
    MobileContainer,
    DesktopContainer,
    DesktopTopRow,
    SearchContainer,
    StyledSearchInput,
    StyledSearchIcon,
    CartContainer,
    CartIcon,
    CartBadge,
    MenuButton,
    MenuIcon,
    MobileMenu,
    MenuHeader,
    NavList,
    NavLink,
    Divider,
    SectionTitle,
    CloseIcon,
    DesktopNavLinks,
    DesktopNavLink
} from './styles';

interface MenuItem {
    title?: string;
    path?: string;
    isTitle?: boolean;
    isDivider?: boolean;
}

const Header = memo(() => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [cartItems] = useState(3);
    const location = useLocation();

    const toggleMenu = useCallback(() => {
        setIsMenuOpen(prev => !prev);
    }, []);

    const menuItems: MenuItem[] = [
        { title: "Descubra nossas Peças", isTitle: true },
        { isDivider: true },
        { title: "Acessórios", path: "/acessorios" },
        { title: "Biquinis", path: "/biquinis" },
        { title: "Conjuntos", path: "/conjuntos" },
        { title: "Roupas íntimas", path: "/roupas-intimas" },
        { title: "Sapatinhos", path: "/sapatinhos" },
        { title: "Vestidos", path: "/vestidos" },
        { isDivider: true },
        { title: "Dicas e Cuidados", path: "/dicas" },
    ];

    return (
        <HeaderContainer>
            <HeaderContent>
                {/* Mobile Layout */}
                <MobileContainer>
                    <MenuButton onClick={toggleMenu}>
                        <MenuIcon />
                    </MenuButton>
                    
                    <img src={Logo} alt="Fofuras em Fios" />

                    <CartContainer>
                        <CartIcon />
                        {cartItems > 0 && <CartBadge>{cartItems}</CartBadge>}
                    </CartContainer>
                </MobileContainer>

                {/* Desktop Layout */}
                <DesktopContainer>
                    <DesktopTopRow>
                        <MenuButton onClick={toggleMenu}>
                            <MenuIcon size={30} />
                        </MenuButton>
                        
                        <img src={Logo} alt="Fofuras em Fios" />

                        <SearchContainer>
                            <StyledSearchIcon size={20} />
                            <StyledSearchInput placeholder="Buscar produtos..." />
                        </SearchContainer>

                        <CartContainer>
                            <CartIcon size={24} />
                            {cartItems > 0 && <CartBadge>{cartItems}</CartBadge>}
                        </CartContainer>
                    </DesktopTopRow>

                    {/* Links de navegação desktop abaixo do input */}
                    <DesktopNavLinks>
                        {["Início", "Produtos", "Contato", "Sobre Nós"].map((item) => {
                            const path = `/${item.toLowerCase().replace(' ', '-')}`;
                            return (
                                <DesktopNavLink
                                    key={item}
                                    to={path}
                                    className={location.pathname === path ? 'active' : ''}
                                >
                                    {item}
                                </DesktopNavLink>
                            );
                        })}
                    </DesktopNavLinks>

                </DesktopContainer>

                {/* Mobile Search */}
                <SearchContainer className="md:hidden">
                    <StyledSearchIcon />
                    <StyledSearchInput placeholder="Buscar produtos..." />
                </SearchContainer>
            </HeaderContent>

            {/* Mobile Menu */}
            <MobileMenu $isOpen={isMenuOpen}>
                <MenuHeader>
                    <MenuButton onClick={toggleMenu}>
                        <CloseIcon size={24} />
                    </MenuButton>
                </MenuHeader>

                <NavList>
                    {menuItems.map((item, index) => (
                        <React.Fragment key={index}>
                            {item.isTitle && (
                                <SectionTitle>{item.title}</SectionTitle>
                            )}

                            {item.isDivider && <Divider />}

                            {item.path && (
                                <NavLink
                                    to={item.path}
                                    className={location.pathname === item.path ? 'active' : ''}
                                >
                                    {item.title}
                                </NavLink>
                            )}
                        </React.Fragment>
                    ))}
                </NavList>
            </MobileMenu>
        </HeaderContainer>
    );
});

export default Header;