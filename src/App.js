import './App.css';

import Footer from './customer/components/footer/Footer';
import Navigations from './customer/components/navigation/Navigations';
import Home from './customer/pages/Home';
import Product from './customer/components/product/Product';
import ProductDetails from './customer/components/productdetails/ProductDetails';
import Cart from './customer/components/cart/Cart';
import CheckOut from './customer/components/checkout/CheckOut';

function App() {
  return (
    <> 
      <div>
        <Navigations/>
          <div>
            <Home/>
            <Product/>
            <ProductDetails/>
            <Cart/>
            <CheckOut/>
          </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
