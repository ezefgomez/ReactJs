import NavBar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

// REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// IMPORT PAGES
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import ProductDetail from "./pages/ProductDetail/ProductDetail"
import ProductCategory from './pages/ProductCategory/ProductCategory';


function App() {

  return (
    <Router>
        <div className="App">
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Contact />} />
            <Route path="/contact" element={<About />} />
            <Route path="/detail/:id" element={<ProductDetail />} />
            <Route path="/detail/:category" element={<ProductCategory />} />
          </Routes>
        </div>
    </Router>

  );
}

export default App;
