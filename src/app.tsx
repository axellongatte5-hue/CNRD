import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nieto from './pages/Nieto';
import Bouteille from './pages/Bouteille';
import Feigelson from './pages/Feigelson';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nieto" element={<Nieto />} />
        <Route path="/bouteille" element={<Bouteille />} />
        <Route path="/feigelson" element={<Feigelson />} />
      </Routes>
    </Router>
  );
}

export default App;
