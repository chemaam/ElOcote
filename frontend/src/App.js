import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

// Pages
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import ProductoDetalle from "./pages/ProductoDetalle";
import Servicios from "./pages/Servicios";
import Calidades from "./pages/Calidades";
import Nosotros from "./pages/Nosotros";
import Cotizar from "./pages/Cotizar";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/productos/:slug" element={<ProductoDetalle />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/calidades" element={<Calidades />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/cotizar" element={<Cotizar />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <Toaster position="top-center" richColors />
      </BrowserRouter>
    </div>
  );
}

export default App;
