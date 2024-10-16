import './App.css';
import Slider from './components/Slider';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import About from './components/About';
import ProductDetails from './components/ProductDetails';


import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
          <Slider />
          <ProductList />
          </>
        } />
        <Route path="about" element={<About />} />
        <Route path="product/:productId" element={<ProductDetails />}/>
      </Routes>
    
    </div>
  );
}

export default App;
