import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Covid from './pages/Covid';
import Programming from './pages/Programming';
import Search from './pages/Search';
import Saved from './pages/Saved';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programming" element={<Programming />} />
        <Route path="/covid" element={<Covid />} />
        <Route path="/search/:query" element={<Search />} />
        <Route path="/saved" element={<Saved />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
