import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/actions/productsAction";
import ProductDetails from "./ProductDetails";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  // const dispatch= useDispatch()
  const history = useNavigate();
  const cart = useSelector((state) => state.cart);
  const products = useSelector((state) => state.allProducts.products);

  console.log("my", products);
  const [isClicked, setClicked] = useState(false);
  const [category, setCategory] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [clickedOutside, setClickedOutside] = useState(false);
  const myRef = useRef();

  const handleSearchBox = () => {
    setClicked(true);
    setClickedOutside(false);
  };
  const handleClickOutside = (e) => {
    if (!myRef.current.contains(e.target)) {
      setClickedOutside(true);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setCategory(e.target.value);

    const newData = products.filter((p) =>
      p.title.toLowerCase().includes(category.toLowerCase())
    );
    setFilteredData(newData);
  };

  return (
    <div className="ui fixed menu">
      <div className="ui container">
        <h2>FakeShop</h2>
        <div className=" ui rightside">
          {isClicked === true ? (
            <div className="ui inputField">
              <input
                ref={myRef}
                className=" ui serch_input"
                onChange={(e) => handleChange(e)}
                value={category}
                placeholder="Search"
                type="text"
              />

              <>
                {clickedOutside === true ? (
                  setClicked(false)
                ) : (
                  <ul
                  ref={myRef}
                    className="ui searched_items"
                    style={{
                      height: category.length === 0 ? "auto" : "500px",
                    }}
                  >
                    <>
                      {category.length === 0 ? null : (
                        <>
                          {filteredData.map((data) => (
                            <li key={data.id}>
                              <Link to={`/product/${data.id}`}>
                                {data.title}
                              </Link>
                            </li>
                          ))}
                        </>
                      )}
                    </>
                  </ul>
                )}
              </>
            </div>
          ) : (
            <h6 onClick={() => handleSearchBox()}>
              <i class="search icon"></i>
            </h6>
          )}

          <h6 onClick={() => history("/cartpage")}>
            <i class="shopping cart icon"></i>
            {cart.cartItems.length === 0 && <p>cart is empty</p>}
          </h6>
          {/* <button onClick={() => history("/login")}>Log Out</button> */}
        </div>

        {/* <button onClick={()=>dispatch(addProduct())}>+</button> */}
      </div>
    </div>
  );
};

export default Header;
