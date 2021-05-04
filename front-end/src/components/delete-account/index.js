import React from "react";
import "./index.css";

function DeleteAccount() {
  return (
    <div class="delete_body">
        <p class="delete_message">Are you sure you wish to delete your account? This cannot be undone!</p>

        <div class="delete_confirm">
          <a href="login">Yes</a>
        </div>
        <div/>
        <div class="delete_cancel">
          <a href="library">No</a>
        </div>
      </div>
  );
}

export default DeleteAccount;
