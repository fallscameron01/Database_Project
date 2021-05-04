import React from "react";
import "./index.css";

function Signup() {
  const handleSubmit = () => {
    // this is where I would put code to sign up.
    // IF I HAD ANY!
  };

  return (
    <div class="signup_body">
      <div class="signup_form">
        <form onSubmit={handleSubmit}>
          <label>Username:</label><div/>
          <input type="text" name="username"/><div/>

          <label>Password:</label><div/>
          <input type="text" name="password"/><div/>

          <label>Repeat Password:</label><div/>
          <input type="text" name="repeat_password"/><div/>

          <input type="submit" value="Sign Up"/>
        </form>
      </div>
    </div>
  );
}

export default Signup;
