
// import CartProduct from './CartProduct'
import React from "react";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// import { setProducts,CartProducts } from "../redux/actions/productsAction";
import { Link } from 'react-router-dom';
import { removeFromCart } from '../features/cartslice';





const CartPage = () => {
  let cartproduct = useSelector((state) => state.cart.cartItems);
  // let cartTotal= useSelector((state) => state.cart.cartTotalAmpount);
  // let cart= useSelector((state) => state.cart);
  console.log(
"cartp",    cartproduct
  );

  const dispatch = useDispatch();

  const handleRemoveCart=(cartItem)=>{
dispatch(removeFromCart(cartItem))
  }
  
  return (
    <>
{
  cartproduct.length===0?(<div style={{height:"100vh",display:"flex",    flexDirection: "column",

  justifyContent: "center",
  alignItems: "center",color:"white"}}>
    <h3>no items in cart</h3>
    <h1>start shopping</h1></div>
  ):(<><ul style={{marginTop: "100px",width:"100%"}}>
    
  {
    cartproduct?.map((cart)=>(<>
 

 <li style={{display:"flex",width:"100%"}} key={cart.id} >
      
       <div  style={{display:"flex",justifyContent:"center",margin:" 10px auto"}}>
       <div className='cartitem container-lg clearfix"' style={{alignItems: "center",
       color: "white",
       borderRadius: "12px",
      display:"flex",width:"100%",justifyContent:"space-between",flexDirection:"row",padding:"0 10px"}}>
        <Link style={{display:"flex",justifyContent:"center",alignItems:"center"}} to={`/product/${cart.id}`}> 
        <div className=' ui img_container  cart_prop col-sm-6  p-2 ' >   <img alt="cart_item" style={{height:"80%",objectFit:"cover",width:"100%",borderRadius:"12px",marginRight:"10px"}} src={cart.image}/></div>
     
       </Link>
       <div className='cart_prop col-sm-4 col-md-2 col-lg-3 float-left p-2 ' style={{display:"flex",flexDirection:"column", }}>
        <p>
          Title
        </p>
         <h5>{cart.title}</h5></div>
   <div className='cart_prop col-sm-4 col-md-2 col-lg-3 float-left p-2 ' style={{display:"flex",flexDirection:"column", }}>
    <p>Price</p>
    <h5>${cart.price}</h5></div>
     
    <div className='cart_prop col-sm-4 col-md-2 col-lg-3 float-left p-2 ' style={{display:"flex",flexDirection:"column", }}>
      <p>Total</p>
      
       <h5>
           ${cart.price*cart.cartQuantity}
         </h5></div>
        
      

       <button onClick={()=>handleRemoveCart(cart)} className='cart_prop col-sm-4 col-md-2 col-lg-3 float-left p-2 ' style={{
             background: "#00b5ad",
             color: "white",
             padding: "10px",
             border: "none",
             borderRadius: "5px",cursor:"pointer",
             marginRight:"10px"
            
       }}>remove</button>
         {/* <button onClick={()=>alert("Purchase successful")} className='cart_prop col-sm-4 col-md-2 col-lg-3 float-left p-2 ' style={{
             background: "#00b5ad",
             color: "white",
             padding: "10px",
             border: "none",
             borderRadius: "5px",cursor:"pointer",
            
       }}>Buy Now</button> */}
     
       
       
       </div>
       </div>
             {/* <CartProduct price={cart.price} image={cart.iamge} title={cart.title} key={cart.id}/> */}
             </li>
   
           </>

    ))
  }
  </ul>
  {/* <div>
    <h3>${cartTotal}</h3>
  </div> */}
  </>)
}
    
    
       

 
    </>
  )
}

export default CartPage