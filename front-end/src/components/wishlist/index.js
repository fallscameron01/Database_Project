import React, { useState, useEffect } from "react";
import addNew from "./images/add-new.PNG";
import BookDataService from "../../services/book.service";
import MovieDataService from "../../services/movie.service";
import MusicDataService from "../../services/music.service";
import VideoGameDataService from "../../services/video_game.service";
import { useGlobal } from "reactn";
import Modal from "react-bootstrap/Modal";

let data = [];

function Library() {
  const [type, setType] = useState("All");
  const [sort, setSort] = useState("alphabetical");
  const [username] = useGlobal("username");
  const [modalOpen, setModalOpen] = useState(false);
  const [current, setCurrent] = useState({});
  const [formType, setFormType] = useState("");
  const [imageLink, setImageLink] = useState(current.image_link || current.box_art || current.album_art);
  const [artist, setArtist] = useState(current.artist || current.author);
  const [genre, setGenre] = useState(current.genre);
  const [platformName, setPlatformName] = useState(current.platform_name);
  const [platformLink, setPlatformLink] = useState(current.platform_link);

  const hideModal = () => {
    setModalOpen(false);
  };

  const showModal = (el) => {
    setCurrent(el);
    setImageLink(el.image_link || el.box_art || current.album_art);
    setArtist(el.artist || el.author);
    setGenre(el.genre);
    setPlatformName(el.platform_name);
    setPlatformLink(el.platform_link);

    if (el.type === "Video Game") {
      setFormType("video_game");
    }
    else if (el.type === "Movie") {
      setFormType("movie");
    }
    else if (el.type === "Music") {
      setFormType("music");
    }
    else if (el.type === "Book") {
      setFormType("book");
    }
    
    setModalOpen(true);
  };

  useEffect(() => {
    let list = [];
    BookDataService.getAllBooks("wishlist").then(books => {
      let temp = JSON.parse(books);
      
      for (let i = 0; i < temp.length; i++) {
        if (temp[i].username === username) {
          BookDataService.getBook(temp[i].title).then(singleBook => {
            singleBook = JSON.parse(singleBook);
            list.push({ "title": singleBook.title, "box_art": singleBook.cover_art, "author": singleBook.author, "type": "Book", "platform_name": singleBook.platform_name, "platform_link": singleBook.platform_link });
          });
        }
      }
    }).finally(() => {
      data = list;
      setSort(sort);
    });

    MovieDataService.getAllMovies("wishlist").then(movies => {
      let temp = JSON.parse(movies);
      
      for (let i = 0; i < temp.length; i++) {
        if (temp[i].username === username) {
          MovieDataService.getMovie(temp[i].title).then(singleMovie => {
            singleMovie = JSON.parse(singleMovie);
            list.push({ "title": singleMovie.title, "box_art": singleMovie.box_art, "description": singleMovie.description, "type": "Movie", "platform_name": singleMovie.platform_name, "platform_link": singleMovie.platform_link });
          });
        }
      }
    }).finally(() => {
      data = list;
      setSort(sort);
    });

    MusicDataService.getAllMusics("wishlist").then(musics => {
      let temp = JSON.parse(musics);
      
      for (let i = 0; i < temp.length; i++) {
        if (temp[i].username === username) {
          MusicDataService.getMusic(temp[i].title).then(singleMusic => {
            singleMusic = JSON.parse(singleMusic);
            list.push({ "title": singleMusic.title, "album_art": singleMusic.album_art, "artist": singleMusic.artist, "type": "Music", "platform_name": singleMusic.platform_name, "platform_link": singleMusic.platform_link, "genre": singleMusic.genre });
          });
        }
      }
    }).finally(() => {
      data = list;
      setSort(sort);
    });

    VideoGameDataService.getAllVideoGames("wishlist").then(video_game => {
      let temp = JSON.parse(video_game);
      
      for (let i = 0; i < temp.length; i++) {
        if (temp[i].username === username) {
          VideoGameDataService.getVideoGame(temp[i].title).then(singleVideoGame => {
            singleVideoGame = JSON.parse(singleVideoGame);
            list.push({ "title": singleVideoGame.title, "box_art": singleVideoGame.box_art, "description": singleVideoGame.description, "type": "Video Game", "platform_name": singleVideoGame.platform_name, "platform_link": singleVideoGame.platform_link });
          });
        }
      }
    }).finally(() => {
      data = list;
      setSort(sort);
    });
  });

  const handleType = () => {
    const value = document.getElementById("types");
    setType(value.value);
  };

  const handleSort = () => {
    const value = document.getElementById("sort");

    if(value.value === "alphabetical") {
      setSort("alphabetical");
    }
    else {
      setSort("reverse");
    }
  };

  const addNewMedia = () => {
    document.getElementById("add-new-media").click();
  };

  const deleteMedia = () => {
    if (current.type === "Video Game") {
      VideoGameDataService.deleteVideoGame(current.title)
    }
    else if (current.type === "Movie") {
      MovieDataService.deleteMovie(current.title)
    }
    else if (current.type === "Music") {
      MusicDataService.deleteMusic(current.title)
    }
    else if (current.type === "Book") {
      BookDataService.deleteBook(current.title)
    }

    hideModal();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (formType === "book") {
      const title = current.title;
      const cover_art = document.getElementById("image_link").value;
      const author = document.getElementById("artist").value;
      const platform_name = document.getElementById("platform_name").value;
      const platform_link = document.getElementById("platform_link").value;
      const obj = { username, "title": title, "cover_art": cover_art, "author": author, "platform_name": platform_name, "platform_link": platform_link };
      BookDataService.modifyBook(current.title, obj);
    }
    else if (formType === "movie") {
      const title = current.title;
      const box_art = document.getElementById("image_link").value;
      const description = document.getElementById("description").value;
      const platform_name = document.getElementById("platform_name").value;
      const platform_link = document.getElementById("platform_link").value;
      const obj = { username, "title": title, "box_art": box_art, "description": description, "platform_name": platform_name, "platform_link": platform_link };
      MovieDataService.modifyMovie(current.title, obj);
    }
    else if (formType === "music") {
      const title = current.title;
      const album_art = document.getElementById("image_link").value;
      const artist = document.getElementById("artist").value;
      const genre = document.getElementById("genre").value;
      const platform_name = document.getElementById("platform_name").value;
      const platform_link = document.getElementById("platform_link").value;
      const obj = { username, "title": title, "album_art": album_art, "artist": artist, "genre": genre, "platform_name": platform_name, "platform_link": platform_link };
      MusicDataService.modifyMusic(current.title, obj);
    }
    else if (formType === "video_game") {
      const title = current.title;
      const box_art = document.getElementById("image_link").value;
      const description = document.getElementById("description").value;
      const platform_name = document.getElementById("platform_name").value;
      const platform_link = document.getElementById("platform_link").value;
      const obj = { username, "title": title, "box_art": box_art, "description": description, "platform_name": platform_name, "platform_link": platform_link };
      VideoGameDataService.modifyVideoGame(current.title, obj);
    }
    hideModal();
  };

  const handleFormType = () => {
    setFormType(document.getElementById("form-type").value);
  };

  return (
    <div style={{padding: 50}}>
      <div style={{display: "block"}}>
        <select onChange={handleType} id="types" style={{marginRight: 10}}>
          <option value="All" selected="selected">All</option>
          <option value="Video Game">Video Game</option>
          <option value="Movie">Movie</option>
          <option value="Music">Music</option>
          <option value="Book">Book</option>
        </select>

        <select onChange={handleSort} id="sort">
          <option value="alphabetical" selected="selected">Alphabetical (Title)</option>
          <option value="reverse">Reverse Alphabetical (Title)</option>
        </select>
      </div>

      <div style={{display: "inline-block"}}>
        <img src={addNew} width="auto" height="270px" style={{margin: 15}} onClick={addNewMedia} className="hoverable" />
        <h5 className="text-center">Add New</h5>
      </div>
      
        {(sort === "alphabetical" ? data.sort((a, b) => (a.title > b.title) ? 1 : -1) : data.sort((a, b) => (a.title < b.title) ? 1 : -1)).map((el) => {
            return (el.type === type || type === "All" ?
              <div style={{display: "inline-block"}} title={el.description}>
                <img src={el.box_art || el.album_art} width="auto" height="270px" style={{margin: 15}} onClick={() => {
                  showModal(el);
                }} />
                <h5 className="text-center">{el.title}</h5>
              </div> : <></>
            )
        })}

        <Modal show={modalOpen} onHide={hideModal}>
          <Modal.Header>
            <Modal.Title>{current.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{width: "80%"}}>
            <div class="new_media_form">
              <form>
                <label>Media Type: {current.type}</label>

                <div style={{display: (formType === "music" || formType === "book") ? "" : "none"}}>
                  <label style={{display: (formType === "music") ? "" : "none"}}>Artist:</label>
                  <label style={{display: (formType === "book") ? "" : "none"}}>Author:</label>
                  <input type="text" name="artist" id="artist" value={artist} onChange={(event) => {
                    setArtist(event.target.value);
                  }} />
                </div>

                <div>
                  <label style={{display: (formType === "video_game" || formType === "movie") ? "" : "none"}}>Box Art Link:</label>
                  <label style={{display: (formType === "music") ? "" : "none"}}>Album Art Link:</label>
                  <label style={{display: (formType === "book") ? "" : "none"}}>Cover Art Link:</label>
                  <input type="text" name="image_link" id="image_link" value={imageLink} onChange={(event) => {
                    setImageLink(event.target.value);
                  }} />
                </div>

                <div style={{display: (formType === "video_game" || formType === "movie") ? "" : "none"}}>
                  <label>Description:</label>
                  <textarea name="description" id="description">{current.description}</textarea>
                </div>

                <div style={{display: (formType === "music") ? "" : "none"}}>
                  <label>Genre:</label>
                  <input type="text" name="genre" id="genre" value={genre} onChange={(event) => {
                    setGenre(event.target.value);
                  }} />
                </div>

                <div>
                  <label>Platform Name:</label>
                  <input type="text" name="platform_name" id="platform_name" value={platformName} onChange={(event) => {
                    setPlatformName(event.target.value);
                  }}></input>
                </div>

                <div>
                  <label>Platform Link:</label>
                  <input type="text" name="platform_link" id="platform_link" value={platformLink} onChange={(event) => {
                    setPlatformLink(event.target.value);
                  }}></input>
                </div>

                <input onClick={handleSubmit} type="submit" value="Done"/>
              </form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button style={{color: "red"}} onClick={deleteMedia}>Delete</button>
            <button onClick={hideModal}>Cancel</button>
          </Modal.Footer>
        </Modal>
    </div>
  );
}

export default Library;
