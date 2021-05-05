import React from "react";
import "./index.css";
import { useGlobal } from "reactn";
import BookDataService from "../../services/book.service";

function AddNewMedia() {
  const [username] = useGlobal("username");

  const handleSubmit = (event) => {
    event.preventDefault();

    const location = document.getElementById("location").value;
    const type = document.getElementById("type").value;
    const title = document.getElementById("title").value;
    const artist = document.getElementById("artist").value;
    const image_link = document.getElementById("image_link").value;
    const description = document.getElementById("description").value;
    const platform_name = document.getElementById("platform_name").value;
    const platform_link = document.getElementById("platform_link").value;

    if (location === "to_library") {
      if (type === "book") {
        const obj = { username, title, "cover_art": image_link, "author": artist};
        BookDataService.addBookToLibrary(obj);
      }
    }
    else {
      if (type === "book") {
        const obj = { username, title, "cover_art": image_link, "author": artist};
        BookDataService.addBookToWishlist(obj);
      }
    }
  };
  
  return (
    <div class="new_media_body">
      <div class="new_media_message">
        Add new media:
      </div>
      <div class="new_media_form">
        <form onSubmit={handleSubmit}>
          <label>Add To:</label>
          <select id="location">
            <option value="to_library">Library</option>
            <option value="to_wishlist">Wishlist</option>
          </select><div/>

          <label>Media Type:</label>
          <select id="type">
            <option value="video_game">Video Game</option>
            <option value="movie">Movie</option>
            <option value="music">Music</option>
            <option value="book">Book</option>
          </select><div/>

          <label>Title:</label>
          <input type="text" name="title" id="title" /><div/>

          <label>Artist:</label>
          <input type="text" name="artist" id="artist" /><div/>

          <label>Image Link:</label>
          <input type="text" name="image_link" id="image_link" /><div/>

          <label>Description:</label>
          <textarea name="description" id="description">Enter the description here.</textarea><div/>
          
          <label>Platform Name:</label>
          <input type="text" name="platform_name" id="platform_name"></input><div/>

          <label>Platform Link:</label>
          <input type="text" name="platform_link" id="platform_link"></input><div/>

          <input type="submit" value="Done"/>
        </form>
      </div>
    </div>
  );
}

export default AddNewMedia;
