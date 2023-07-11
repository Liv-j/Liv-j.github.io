import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Home from './Home';
import Destinations from './Destinations';
import Ships from './Ships';
import Voyages from './Voyages';
import Reserve from './Reserve';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<Home />} />
            <Route path="destinations" element={<Destinations />} />
            <Route path="ships" element={<Ships />} />
            <Route path="voyages" element={<Voyages />} />
            <Route path="reserve" element={<Reserve />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
