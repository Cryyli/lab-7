import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Snowboarder from './pages/Snowboarder';
import Artist from './pages/Artist';
import Golfer from './pages/Golfer';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/snowboarder" element={<Snowboarder />} />
          <Route exact path="/artist" element={<Artist />} />
          <Route exact path="/golfer" element={<Golfer />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  
  );
}

export default App;
