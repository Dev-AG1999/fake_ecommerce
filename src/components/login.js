import React, { useState } from "react";
import "./Login.css";

import { login, logout } from "../features/userslice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[err,setErr]=useState("")

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

   if(name!=="" && email!=="" && password!==""){
    dispatch(
        login({
          name: name,
          email: email,
          password: password,
          loggedIn: true,
        })
      );
   }

   else{
alert(setErr("Please fill the required field"))
   }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login">
      <form className="login__form" onSubmit={(e) => handleSubmit(e)}>
        <h1>Login here 🚪</h1>
        <input
          type="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="submit__btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;