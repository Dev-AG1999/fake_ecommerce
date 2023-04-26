import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import "../src/App.css";
import ProductDetails from "./containers/ProductDetails";
import { useSelector } from "react-redux";
import CartPage from "./containers/CartPage";
import Logout from './components/logout';
import Login from './components/login';
import { selectUser } from './features/userslice';
function App() {
  const user = useSelector(selectUser)
  return (
    <div className="App">
      {/* <Routes>
          <Route path="/" index element={<ProductListing/>} />
          </Routes>
          <Routes>
          <Route path="/product/:productId" element={<ProductDetails/>} />
          </Routes>
          <Routes>
          <Route path="/cartpage" element={<CartPage/>} />
          </Routes>
          <Routes>
          <Route>404 Not Found!</Route>
        </Routes> */}
        <>
      {
  user ?(  <Router>

    <Header />

    <Routes>
      <Route path="/" index element={<ProductListing />} />
    </Routes>
  
    <Routes>
      <Route path="/login" element={<Login/>}/>
    </Routes>
  
    <Routes>
      <Route path="/product/:productId" element={<ProductDetails />} />
    </Routes>
     
    <Routes>
      <Route  path="/cartpage" element={<CartPage />} />
    </Routes>
  
    <Routes>
      <Route>404 Not Found!</Route>
    </Routes>
  </Router>)  : <Login/>
}
    
      </>
    </div>
  );
}

export default App;
