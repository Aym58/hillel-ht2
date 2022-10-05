import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/General/home';
import Popular from './components/Popular/popular';
import Battle from './components/Battle/battle';
import Nav from './components/General/nav';
import Results from './components/Battle/results';

import './App.css';

const App: FC = (): JSX.Element => {
  return (
    <div className="container">
      <BrowserRouter basename={'hillel-ht2'}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="popular" element={<Popular />} />
          <Route path="battle" element={<Battle />} />
          <Route path="battle/results" element={<Results />} />
          <Route path="*" element={<p>Element not found</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
