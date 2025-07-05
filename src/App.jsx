

import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
import Header from "./pages/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/NavPages/Home"
import Contact from "./pages/NavPages/Contact"
import Books from "./pages/NavPages/Books";

function App() {
  return (
    <>
      <Header />

      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/books" element={<Books />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
