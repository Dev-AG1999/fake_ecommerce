
import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsAction";
import ProductComponent from "./ProductComponent";

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
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductPage;