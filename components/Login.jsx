import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
//import { StateContext } from "../context/Context";
import auth from "../firebase";
import {
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //const { state1 } = useContext(StateContext);

  // const handleclick = () => {
  //   const isLoggedinn =
  //     state.user === data.val && state.pass === data.pasword ? true : false;

  // isLoggedinn === true
  //   ? setstate((prev) => ({
  //       ...prev,
  //       isLoggedin: true,
  //     }))
  //   : alert("invalid user name or password");

  //   {
  //     state.isLoggedin === true && <Dashboard />;
  //   }
  // };

  // const handlesubmit = (e) => {
  //   e.preventDefault();
  // };

  const register = () => {
    navigation("/signup");
  };

  const navigation = useNavigate();

  const signin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        
         navigation("/dashboard");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="Login" id="login">
      <div className="login_page">
      <div className="signin_header">
        <h1>Sign In Now</h1>
      </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            name="email"
            type="text"
            placeholder="Email or phone number"
          ></input>
          <br />
          <input
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
            name="password"
            type="password"
            placeholder="Password"
          ></input>
          <br />
          <button onClick={signin}>Login</button>
          <br />
        </form>
        <div className="signuo_botm">
          <p>
            Don't have an Account..
            <span onClick={register}>Sign up now</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
