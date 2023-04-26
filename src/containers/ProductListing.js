
import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsAction";
import ProductComponent from "./ProductComponent";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "../../src/App.css"

const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts =useCallback( async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
    console.log("data",response.data);
  },[dispatch]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log("Products :", products);
  return (
    <>  <Carousel infiniteLoop={true}  useKeyboardArrows={true} showIndicators={true} emulateTouch={true}  autoPlay={true}>
      {products.map((product)=>(   <div className=" product_carousel">
        <img className="carousel_img" src={product.image}/>

       
     
    </div>))}
 
   
</Carousel>
<h1 className="trending_products">MOST TRENDING <hr></hr>
</h1>
    <div className="ui grid container">
      <ProductComponent />
    </div>
    </>
  );
};

export default ProductPage;