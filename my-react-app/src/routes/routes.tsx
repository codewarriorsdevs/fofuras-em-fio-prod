import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from "../pages/HomePage";
import { NotFoundPage } from '../pages/NotFoundPage';

// import { Header } from '../components/header/Header';

export const AppRoutes: React.FC = () => {

  return (

    <BrowserRouter>
      {/* <Header /> */}
      
      <Routes>
        <Route path="/" element= { <HomePage /> } />    
        <Route path="*" element= { <NotFoundPage /> } />
      </Routes>
    </BrowserRouter>
  )
}
