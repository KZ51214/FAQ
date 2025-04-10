import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import FAQ from './pages/FAQ.jsx';

const App = () => {
  return (
    <div>
      <nav style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/faq">FAQ</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </div>
  );
};

export default App;
