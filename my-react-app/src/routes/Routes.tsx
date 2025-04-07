import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import components for routing
import { Home } from '../pages/home/Home';
import Header from '../components/header/Header';
import { AccessoriesPage } from '../pages/acessory/productsPage';
import { IntimusPages  }from '../pages/intimus/intimusPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import ContactPage from '../pages/contact/contactPage';
import Products from '../pages/products/Products';
import AboutPage from '../pages/about/aboutPage';

// Define route components
const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Rotas das Categorias */}
        <Route path="/acessorios" element={<AccessoriesPage />} />
        <Route path="/biquinis" element={<div>Biquinis Page</div>} />
        <Route path="/conjuntos" element={<div>Conjuntos Page</div>} />
        <Route path="/roupas-intimas" element={<IntimusPages />} />
        <Route path="/sapatinhos" element={<div>Sapatinhos Page</div>} />
        <Route path="/vestidos" element={<div>Vestidos Page</div>} />
        <Route path="/dicas e cuidados" element={<div>Dicas e Cuidados</div>} />


        {/* Rotas das Página */}
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Products />} />
        <Route path="/contato" element={<ContactPage />} />
        <Route path="/sobre-nós" element={<AboutPage />} />

        {/* 404 Not Found Route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;