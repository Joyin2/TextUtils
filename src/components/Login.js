import React from "react";
import signupImage from "../images/image-illustrator.jpg";
import "./Login.css";

export default function Login() {
  return (
    <div>
      <div className="ls-container">
        <div className="image-container">
          <img src={signupImage} alt="" />
        </div>
        <div className="signup-container">
          <div className="signup-item">
            <h1>Sign In</h1>
            <h7>Enter your email and password to sign in</h7>
            <form action="" method="post">
              <input
                className="form-control"
                type="email"
                placeholder="Email"
              ></input>
              <input
                className="form-control"
                type="password"
                placeholder="Current password"
              ></input>

              <div className="remember-me">
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
                &nbsp;
                <label>Remember me</label>
              </div>

              <button type="submit" className="button ">
                Sign in
              </button>
            </form>
            <div className="already-ask">
              Already have an account?&nbsp;<a href="/">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
