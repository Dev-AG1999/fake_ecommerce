import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[],
    cartTotalQuantity:0,
    cartTotalAmount:0
};
const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state,action){
         const itemIndex=   state.cartItems.findIndex((item)=>item.id===action.payload.id);
         if(itemIndex>=0){
            state.cartItems[itemIndex].cartQuantity+=1;
            alert("Incremented by 1")
         }
         else{
            const tempProduct={...action.payload,cartQuantity:1}
            alert(` ${action.payload.title} is added to cart`)
            state.cartItems.push(tempProduct);
         }
     
localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
        },
        removeFromCart(state,action){
const nextCartItems =state.cartItems.filter((cart)=>cart.id!==action.payload.id)
state.cartItems=nextCartItems
localStorage.setItem("cartItems",JSON.stringify(nextCartItems))
        }
    
    }
})

export const {addToCart,removeFromCart}=cartSlice.actions;

export default cartSlice.reducer