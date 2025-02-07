import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import components for routing
import Home from '../pages/home/Home';
import Header from '../components/header/Header';

// Define route components
const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acessorios" element={<div>Acessórios Page</div>} />
        <Route path="/biquinis" element={<div>Biquinis Page</div>} />
        <Route path="/conjuntos" element={<div>Conjuntos Page</div>} />
        <Route path="/roupas-intimas" element={<div>Roupas Íntimas Page</div>} />
        <Route path="/sapatinhos" element={<div>Sapatinhos Page</div>} />
        <Route path="/vestidos" element={<div>Vestidos Page</div>} />
        <Route path="/dicas" element={<div>Dicas e Cuidados Page</div>} />
        
        {/* 404 Not Found Route */}
        <Route path="*" element={<div><p>Página não encontrada</p></div>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;