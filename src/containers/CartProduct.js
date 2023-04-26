import React, { useCallback, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { Link } from "react-router-dom";
import {
  selectedProduct,
  removeSelectedProduct,
  addProduct,
} from "../redux/actions/productsAction";

const CartProduct = (image,title,price) => {

    

  
      return (
     
   
             <div style={{width:"60%",margin:"auto"}} className="ui middle aligned divided list">
        <div style={{marginBottom:"20px"}} className="item">
          <div className="right floated content">
            <div className="ui button">Add</div>
          </div>
          <img style={{height:"100px",width:"100px",objectFit:"cover"}} className="ui avatar image" src={image}/>
          <div className="content">
           {title}
           <br></br>
        <p style={{fontWeight:"bolder"}}>${price}</p>  

      
          </div>
        </div>
    
      </div>
   
      );
    }





export default CartProduct