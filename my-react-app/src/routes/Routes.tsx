import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import components for routing
import { Home } from "../pages/home/Home";
import Header from "../components/header/Header";
import { NotFoundPage } from "../pages/NotFoundPage";
import { AllStartPage } from "../pages/AllStartPage";
import { BotinhasPage } from "../pages/BotinhasPage";
import { BiquinisPage } from "../pages/BiquinisPage";

// Define route components
const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/all-start" element={<AllStartPage />} />
        <Route path="/biquinis" element={<BiquinisPage />} />
        <Route path="/botinhas" element={<BotinhasPage />} />

        <Route
          path="/roupas-intimas"
          element={<div>Roupas Íntimas Page</div>}
        />
        <Route path="/sapatinhos" element={<div>Sapatinhos Page</div>} />
        <Route path="/vestidos" element={<div>Vestidos Page</div>} />
        <Route path="/dicas" element={<div>Dicas e Cuidados Page</div>} />

        {/* Rotas das Categorias */}
        <Route path="/sapatos" element={<div>Sapatos</div>} />
        <Route path="/vestidos" element={<div>Vestidos</div>} />
        <Route path="/shorts" element={<div>Shorts</div>} />
        <Route path="/sandalias" element={<div>Sandálias</div>} />
        <Route path="/conjuntos" element={<div>Conjuntos</div>} />

        {/* 404 Not Found Route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
