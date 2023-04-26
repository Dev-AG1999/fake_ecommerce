import React, { useCallback, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

import {
  selectedProduct,
  removeSelectedProduct,


} from "../redux/actions/productsAction";
import { addToCart } from "../features/cartslice";
const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
 

  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
 
  // const [isAdded,setAdded]=useState(false)


  const fetchProductDetail = useCallback(async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  },[dispatch]);


  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId,fetchProductDetail,dispatch]);

  const handleAddtoCart=(product)=>{
dispatch(addToCart(product))
// setAdded(true)
  }
  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (

        <>
        {/* <Header counts={counts} /> */}
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img alt="" className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2 className="ui teal tag label">
                ${price}
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
           
              <button  onClick={()=>handleAddtoCart(product)}  className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div  className="visible content">Add to Cart</div>
                </button>
          
            
              
              </div>
            </div>
          </div>
        </div>
        </>
      )}
    </div>
  
  );
};

export default ProductDetails;