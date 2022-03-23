import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Home from './components/Home';
import Sessions from './components/Sessions';
import Seats from './components/Seats';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
				<Route path="/sessions/:idFilm" element={<Sessions />}></Route>
        <Route path="/seats/:idSession" element={<Seats />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

//<Route path="/seats/:idSession" element={<Seats />}></Route>
//<Route path="/success" element={<Success />}></Route>     