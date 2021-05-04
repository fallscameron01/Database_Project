import React from "react";
import "./index.css";

function Login() {
  const handleSubmit = () => {
    // this is where I would put code to log in.
    // IF I HAD ANY!
  };

  return (
    <div class="login_body">
      <div class="login_form">
        <form onSubmit={handleSubmit}>
          <label>Username:</label><div/>
          <input type="text" name="username"/><div/>

          <label>Password:</label><div/>
          <input type="text" name="password"/><div/>

          <input type="submit" value="Log In"/>
        </form>
      </div>
    </div>
  );
}

export default Login;
