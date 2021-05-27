import React, { useState } from "react";
import "./Signup.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Signup() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        if (auth) {
          history.push("/");
        }
      })

      .catch((error) => alert(error.message));
  };

  return (
    <div className="signup">
      <Link to="/">
        <div className="signup__image">
          <img className="signup__logo" src="ama2.png" />
        </div>
      </Link>

      <div className="signup__container">
        <h1>Sign-up</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={register} className="signup__signInButton">
            Sign Up
          </button>
        </form>

        <p>
          • By signing-up you agree to the AMAGON Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
      </div>
    </div>
  );
}

export default Signup;
