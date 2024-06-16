import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
import Gallery from './Pages/Gallery'
import Member from './Pages/Member'
import NavBar from './Pages/NavBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <NavBar /> */}
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/member" element={<Member />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App


// weekly show with about us and socials
// membership tab
// gallery tab