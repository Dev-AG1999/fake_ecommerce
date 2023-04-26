import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer,incrementProductsReducer,cartproductsReducer ,selectedCartProductsReducer} from "./productsReducer";
import  useReducer  from '../../features/userslice'
import cartReducer from "../../features/cartslice";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  user: useReducer,
  count:incrementProductsReducer,
  selectedCart:selectedCartProductsReducer,
  cart:cartReducer
});
export default reducers;