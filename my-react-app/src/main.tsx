import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components';

import { App } from './App.tsx'

import { theme } from "./styles/theme.ts";
import './styles/main.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <ThemeProvider theme={theme}> <App /> </ThemeProvider>
    </StrictMode>,
)
