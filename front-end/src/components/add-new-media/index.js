import React from "react";
import "./index.css";

function AddNewMedia() {
  const handleSubmit = () => {
    // this is where I would put code to create the media.
    // IF I HAD ANY!
  };
  
  return (
    <div class="new_media_body">
      <div class="new_media_message">
        Add new media:
      </div>
      <div class="new_media_form">
        <form onSubmit={handleSubmit}>
          <label>Add To:</label>
          <select>
            <option value="to_library">Library</option>
            <option value="to_wishlist">Wishlist</option>
          </select><div/>

          <label>Media Type:</label>
          <select>
            <option value="video_game">Video Game</option>
            <option value="movie">Movie</option>
            <option value="music">Music</option>
            <option value="book">Book</option>
          </select><div/>

          <label>Title:</label>
          <input type="text" name="title"/><div/>

          <label>Artist:</label>
          <input type="text" name="artist"/><div/>

          <label>Image Link:</label>
          <input type="text" name="image_link"/><div/>

          <label>Description:</label>
          <textarea name="description">Enter the description here.</textarea><div/>
          
          <label>Platform Name:</label>
          <input type="text" name="platform_name"></input><div/>

          <label>Platform Link:</label>
          <input type="text" name="platform_link"></input><div/>

          <input type="submit" value="Done"/>
        </form>
      </div>
    </div>
  );
}

export default AddNewMedia;
