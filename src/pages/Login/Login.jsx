// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Login.css";
import Logo from "../../assets/logo.png";
import { login, signup } from "../../firebase"; // firebase google
import Netflix_spinner from "../../assets/netflix_spinner.gif";

const Login = () => {
  const [signState, setSignState] = useState("Sign In");

  //firebase
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
    setLoading(false);
  };

  return loading ? (
    <div className="loading_spinner">
      <img src={Netflix_spinner} alt="" />
    </div>
  ) : (
    <div className="login">
      <img src={Logo} className="login-logo" alt="" />
      <div className="login-form">
        <form>
          <h1>{signState}</h1>
          {signState === "Sign Up" ? (
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              placeholder="Your name"
            />
          ) : (
            <></>
          )}
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Password"
          />
          <button onClick={user_auth} type="submit">
            {signState}
          </button>

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
