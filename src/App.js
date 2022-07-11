import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react';

import Home from './pages/home/Home';
import HomeMEI from './pages/HomeMEI/HomeMEI';
import CNPJ from './pages/CNPJ/CNPJ';
import Produtos from './pages/produtos/produtos';
import Servicos from './pages/Servicos/Servicos';
import QuemSomos from './pages/Quem_somos/Quem_somos';
import ComoFuncionaUsuario from './pages/Como_funciona_usuario/Como_funciona_usuario';
import ComoFuncionaMei from './pages/Como_funciona_mei/Como_funciona_mei';
import Manutencao from './pages/Manutencao/Manutencao';
import ProdutosInfo from './pages/infoMEI/infoMEI';


function App() {
  return (

    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mei" element={<HomeMEI />} />
        <Route path="/produtos/profileMEI" element={<ProdutosInfo />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/como-funciona" element={<ComoFuncionaUsuario />} />
        <Route path="/como-funciona-mei" element={<ComoFuncionaMei />} />
        <Route path="/CNPJ" element={<CNPJ />} />
        <Route path="/manutencao" element={<Manutencao />} />
      </Routes>

    </Router>
  );
}

export default App;
