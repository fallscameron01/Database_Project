import React from "react";
import "./index.css";

function Welcome() {
  return (
      <div class="welcome_body">
        <p class="welcome_message">Welcome to the Video Game Management Tool!</p>

        <div class="login_button">
          <a href="login">Log In</a>
        </div>
        <div/>
        <div class="signup_button">
          <a href="signup">Sign Up</a>
        </div>
      </div>
  );
}

export default Welcome;
