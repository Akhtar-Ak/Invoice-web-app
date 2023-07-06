import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import auth from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigate();

  const signup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        // console.log("state1", state1);
        // console.log("auth", auth);
        navigation("/login");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="Signup">
      <div className="signup_view">
        <form>
          <h1>Sign Up</h1>

          <div className="mb-3">
            <label>First name</label>
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              required
            />
          </div>

          <div className="mb-3">
            <label>Last name</label>
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              required

            />
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <br />
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
              name="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <br />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              className="form-control"
              placeholder="Enter password"
              autoComplete="off"
            />
          </div>

          <div className="d-grid">
            <button type="button" className="btn btn-primary" onClick={signup}>
              Sign Up
            </button>
          </div>
          <p className="forgot-password ">
            Already registered <NavLink to="/login">sign in?</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
