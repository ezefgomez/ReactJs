import 'bootstrap/dist/css/bootstrap.min.css';

// REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// IMPORT PAGES
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import ProductDetail from "./pages/ProductDetail/ProductDetail"
import ProductCategory from './pages/ProductCategory/ProductCategory';
import Barra from './components/navbar';
import Carrito from './pages/Carrito/Cart';


function App() {

  return (
    <Router>
        <div className="App">
          <Barra/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Contact />} />
            <Route path="/contact" element={<About />} />
            <Route path="/details/:id" element={<ProductDetail />} />
            <Route path="/detalle/:detalleId" element={<ProductDetail />} />
            <Route path="/category/:category" element={<ProductCategory />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
        </div>
    </Router>

  );
}

export default App;


// Clase de firebase I //

/*

// Firebase

import { db } from "./firebase/firebaseConfig"
import { collection, doc, setDoc } from "firebase/firestore";



*/