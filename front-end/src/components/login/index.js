import React from "react";
import { useGlobal } from "reactn";
import UserDataService from "../../services/user.service";
import "./index.css";

function Login() {
  const [, setUsername] = useGlobal("username");
  const [, setPassword] = useGlobal("password");

  const handleSubmit = (event) => {
    // event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    UserDataService.getUser(username).then(data => {
      data = JSON.parse(data);
      if (data.password === password) {
        setUsername(username);
        setPassword(password);
      }
      else {
        alert("Incorrect password");
      }
    });
  };

  return (
    <div class="login_body">
      <div class="login_form">
        <form onSubmit={handleSubmit}>
          <label>Username:</label><div/>
          <input type="text" name="username" id="username" /><div/>

          <label>Password:</label><div/>
          <input type="text" name="password" id="password" /><div/>

          <input type="submit" value="Log In"/>
        </form>
      </div>
    </div>
  );
}

export default Login;
