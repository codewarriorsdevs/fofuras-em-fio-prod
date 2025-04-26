import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import components for routing

import { Home } from "../pages/home/Home";
import Header from "../components/header/Header";
import { AccessoriesPage } from "../pages/acessory/productsPage";
import { IntimusPages } from "../pages/intimus/intimusPage";
import { ShoesPage } from "../pages/shoes/ShoesPage";
import { DressPage } from "../pages/dress/DressPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import ContactPage from "../pages/contact/contactPage";
import Products from "../pages/products/Products";
import AboutPage from "../pages/about/aboutPage";
import { OutfitsPage } from "../pages/outfits/OutfitsPage";
import BikinisPage from "../pages/bikinis/bikinisPage";
import TipsPage from "../pages/tips/tips";
import SandalsPage from "../pages/sandals/sandals";

// Define route components
const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Rotas das Categorias */}
        <Route path="/acessorios" element={<AccessoriesPage />} />
        <Route path="/biquinis" element={<BikinisPage />} />
        <Route path="/sandalias" element={<SandalsPage />} />
        <Route path="/conjuntos" element={<OutfitsPage />} />
        <Route path="/roupas-intimas" element={<IntimusPages />} />
        <Route path="/botinhas" element={<ShoesPage />} />
        <Route path="/vestidos" element={<DressPage />} />
        <Route path="/dicas" element={<TipsPage />} />

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
