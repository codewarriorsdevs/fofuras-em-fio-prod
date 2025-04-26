import  styled from 'styled-components'


export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  padding: 2rem 0;
  text-align: center;
  border-top: 4px solid ${({ theme }) => theme.colors.secondary};
  margin-top: 100rem;
  position: relative;
  bottom: 100;
  p{
    font-size: ${({ theme }) => theme.typography.regular};
    font-weight: 600;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    text-align: center;
    color: ${({ theme }) => theme.colors.background};
  }
`;
