import React from 'react';
import {Routes, Route} from "react-router-dom";
import Main from "./pages/Main";
import {Menu} from "./pages/Menu";
import {Navbar} from "./components/Navbar"
import {ShoppingCartProvider} from "./context/ShoppingCartContext";
import Footer from "./components/Footer";

function App() {
  return (
    <ShoppingCartProvider>
        <Navbar />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/menu" element={<Menu />} />
            </Routes>
        <Footer />
    </ShoppingCartProvider>
  );
}

export default App;
