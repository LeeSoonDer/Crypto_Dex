import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Learn } from './pages/Learn';
import { Dex } from './pages/Dex';
import { DexDetail } from './pages/DexDetail';
import { Quiz } from './pages/Quiz';
import { About } from './pages/About';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/dex" element={<Dex />} />
          <Route path="/dex/:id" element={<DexDetail />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;