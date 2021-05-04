import React from "react";
import UserDataService from "../../services/user.service";
import "./index.css";

function Signup() {
  const handleSubmit = () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value; 
    
    UserDataService.create({username, password});
  };

  return (
    <div class="signup_body">
      <div class="signup_form">
        <form onSubmit={handleSubmit}>
          <label>Username:</label><div/>
          <input type="text" name="username" id="username" /><div/>

          <label>Password:</label><div/>
          <input type="text" name="password" id="password" /><div/>

          <label>Repeat Password:</label><div/>
          <input type="text" name="repeat_password"/><div/>

          <input type="submit" value="Sign Up" />
        </form>
      </div>
    </div>
  );
}

export default Signup;
