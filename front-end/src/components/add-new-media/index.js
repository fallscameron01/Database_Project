import React, { useState } from "react";
import "./index.css";
import { useGlobal } from "reactn";
import BookDataService from "../../services/book.service";
import MovieDataService from "../../services/movie.service";
import MusicDataService from "../../services/music.service";
import VideoGameDataService from "../../services/video_game.service";

function AddNewMedia() {
  const [username] = useGlobal("username");
  const [type, setType] = useState("video_game");

  const handleType = () => {
    setType(document.getElementById("type").value);
  };

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
    const genre = document.getElementById("genre").value;

    if (location === "to_library") {
      if (type === "book") {
        const obj = { username, title, "cover_art": image_link, "author": artist, "platform_name": platform_name, "platform_link": platform_link };
        BookDataService.addBookToLibrary(obj);
      }
      else if (type === "movie") {
        const obj = { username, title, "box_art": image_link, "description": description, "platform_name": platform_name, "platform_link": platform_link };
        MovieDataService.addMovieToLibrary(obj);
      }
      else if (type === "music") {
        const obj = { username, title, "album_art": image_link, "artist": artist, "genre": genre, "platform_name": platform_name, "platform_link": platform_link };
        MusicDataService.addMusicToLibrary(obj);
      }
      else if (type === "video_game") {
        const obj = { username, title, "box_art": image_link, "description": description, "platform_name": platform_name, "platform_link": platform_link };
        VideoGameDataService.addVideoGameToLibrary(obj);
      }
    }
    else {
      if (type === "book") {
        const obj = { username, title, "cover_art": image_link, "author": artist, "platform_name": platform_name, "platform_link": platform_link };
        BookDataService.addBookToLibrary(obj);
      }
      else if (type === "movie") {
        const obj = { username, title, "box_art": image_link, "description": description, "platform_name": platform_name, "platform_link": platform_link };
        MovieDataService.addMovieToLibrary(obj);
      }
      else if (type === "music") {
        const obj = { username, title, "album_art": image_link, "artist": artist, "genre": genre, "platform_name": platform_name, "platform_link": platform_link };
        MusicDataService.addMusicToLibrary(obj);
      }
      else if (type === "video_game") {
        const obj = { username, title, "box_art": image_link, "description": description, "platform_name": platform_name, "platform_link": platform_link };
        VideoGameDataService.addVideoGameToLibrary(obj);
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
          <select id="type" onChange={handleType}>
            <option value="video_game">Video Game</option>
            <option value="movie">Movie</option>
            <option value="music">Music</option>
            <option value="book">Book</option>
          </select><div/>

          <div>
            <label>Title:</label>
            <input type="text" name="title" id="title" /><div/>
          </div>

          <div style={{display: (type === "music" || type === "book") ? "" : "none"}}>
            <label style={{display: (type === "music") ? "" : "none"}}>Artist:</label>
            <label style={{display: (type === "book") ? "" : "none"}}>Author:</label>
            <input type="text" name="artist" id="artist" /><div/>
          </div>

          <div>
            <label style={{display: (type === "video_game" || type === "movie") ? "" : "none"}}>Box Art Link:</label>
            <label style={{display: (type === "music") ? "" : "none"}}>Album Art Link:</label>
            <label style={{display: (type === "book") ? "" : "none"}}>Cover Art Link:</label>
            <input type="text" name="image_link" id="image_link" /><div/>
          </div>

          <div style={{display: (type === "video_game" || type === "movie") ? "" : "none"}}>
            <label>Description:</label>
            <textarea name="description" id="description">Enter the description here.</textarea><div/>
          </div>

          <div style={{display: (type === "music") ? "" : "none"}}>
            <label>Genre:</label>
            <input type="text" name="genre" id="genre" /><div/>
          </div>

          <div>
            <label>Platform Name:</label>
            <input type="text" name="platform_name" id="platform_name"></input><div/>
          </div>

          <div>
            <label>Platform Link:</label>
            <input type="text" name="platform_link" id="platform_link"></input><div/>
          </div>

          <input type="submit" value="Done"/>
        </form>
      </div>
    </div>
  );
}

export default AddNewMedia;