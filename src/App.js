import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Sessions from './components/Sessions';
import Seats from './components/Seats';
import Success from './components/Success';

export default function App() {
  const [booking, setBooking] = useState({});

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
				<Route path="/sessions/:idFilm" element={<Sessions />}></Route>
        <Route path="/seats/:idSession" element={<Seats booking={booking} setBooking={setBooking}/>}></Route>
        <Route path="/success" element={<Success booking={booking} setBooking={setBooking}/>}></Route>  
      </Routes>
    </BrowserRouter>
  );
}
  