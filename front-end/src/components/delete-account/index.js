import React from "react";
import { useGlobal } from "reactn";
import UserDataService from "../../services/user.service";
import "./index.css";

function DeleteAccount() {
  const [username] = useGlobal("username");

  const handleDelete = () => {
    UserDataService.delete(username);
  };

  return (
    <div class="delete_body">
        <p class="delete_message">Are you sure you wish to delete your account? This cannot be undone!</p>

        <div class="delete_confirm">
          <a href="welcome" onClick={handleDelete}>Yes</a>
        </div>
        <div/>
        <div class="delete_cancel">
          <a href="library">No</a>
        </div>
      </div>
  );
}

export default DeleteAccount;
