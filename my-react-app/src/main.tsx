import { StrictMode } from 'react';
import { ThemeProvider } from 'styled-components';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/main.css'; // Importe o CSS aqui

const theme = {
  // ... mesmo objeto do styles.ts
  colors: {
    primary: "#23395B",        // Azul principal
    secondary: "#FF69B4",      // Rosa
    text: "#23395B",           // Texto escuro
    background: "#FFFFFF",     // Fundo branco
    border: "#E2E8F0",         // Borda cinza
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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  </StrictMode>
);