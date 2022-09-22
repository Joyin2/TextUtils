import React from 'react';
import signupImage from "../images/image-illustrator.jpg";
import "./SIgnUp.css";

export default function Login() {
  return (
    <div>
      <div className="ls-container">
        <div className="image-container">
          <img src={signupImage} alt="" />
        </div>
        <div className="signup-container">
          <div className="signup-item">
            <h1>Sign Up</h1>
            <h7>Enter your username, email and password to sign up</h7>
            <form action="" method="post">
              <input
                className="form-control"
                type="text"
                placeholder="First Name"
              ></input>
              <input
                className="form-control"
                type="text"
                placeholder="Last Name"
              ></input>
              <input
                className="form-control"
                type="email"
                placeholder="Email"
              ></input>
              <input
                className="form-control"
                type="password"
                placeholder="First Name"
              ></input>

              <button type="submit" className="button ">
                Submit
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
