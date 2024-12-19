// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Login.css";
import Logo from "../../assets/logo.png";

const Login = () => {
  const [signState, setSignState] = useState("Sign In");

  return (
    <div className="login">
      <img src={Logo} className="login-logo" alt="" />
      <div className="login-form">
        <form>
          <h1>{signState}</h1>
          {signState === "Sign Up" ? (
            <input type="text" placeholder="Your name" />
          ) : (
            <></>
          )}
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>{signState}</button>

          {signState === "Sign Up" ? (
            <></>
          ) : (
            <div className="form-help">
              <div className="remember">
                <input id="remeberMe" type="checkbox" />
                <label htmlFor="remeberMe">Remember Me!</label>
              </div>
              <p>Need Help?</p>
            </div>
          )}

          <div className="form-switch">
            {signState === "Sign In" ? (
              <p>
                New to Netflix?{" "}
                <span
                  onClick={() => {
                    setSignState("Sign Up");
                  }}
                >
                  Sign Up Now
                </span>
              </p>
            ) : (
              <p>
                Already have account?{" "}
                <span
                  onClick={() => {
                    setSignState("Sign In");
                  }}
                >
                  Sign In Now
                </span>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
