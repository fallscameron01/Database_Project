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

  const hideModal = () => {
    setModalOpen(false);
  };

  const showModal = (el) => {
    setCurrent(el);
    
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
    BookDataService.getAllBooks("library").then(books => {
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

    MovieDataService.getAllMovies("library").then(movies => {
      let temp = JSON.parse(movies);
      
      for (let i = 0; i < temp.length; i++) {
        if (temp[i].username === username) {
          MovieDataService.getMovie(temp[i].title).then(singleMovie => {
            singleMovie = JSON.parse(singleMovie);
            list.push({ "title": singleMovie.title, "box_art": singleMovie.box_art, "description": singleMovie.decription, "type": "Movie", "platform_name": singleMovie.platform_name, "platform_link": singleMovie.platform_link });
          });
        }
      }
    }).finally(() => {
      data = list;
      setSort(sort);
    });

    MusicDataService.getAllMusics("library").then(musics => {
      let temp = JSON.parse(musics);
      
      for (let i = 0; i < temp.length; i++) {
        if (temp[i].username === username) {
          MusicDataService.getMusic(temp[i].title).then(singleMusic => {
            singleMusic = JSON.parse(singleMusic);
            list.push({ "title": singleMusic.title, "album_art": singleMusic.album_art, "artist": singleMusic.artist, "type": "Music", "platform_name": singleMusic.platform_name, "platform_link": singleMusic.platform_link });
          });
        }
      }
    }).finally(() => {
      data = list;
      setSort(sort);
    });

    VideoGameDataService.getAllVideoGames("library").then(video_game => {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formType === "book") {
      const obj = { username, "title": current.title, "cover_art": current.image_link, "author": current.author, "platform_name": current.platform_name, "platform_link": current.platform_link };
      BookDataService.addBookToLibrary(obj);
    }
    else if (formType === "movie") {
      const obj = { username, "title": current.title, "box_art": current.image_link, "description": current.description, "platform_name": current.platform_name, "platform_link": current.platform_link };
      MovieDataService.addMovieToLibrary(obj);
    }
    else if (formType === "music") {
      const obj = { username, "title": current.title, "album_art": current.image_link, "artist": current.artist, "genre": current.genre, "platform_name": current.platform_name, "platform_link": current.platform_link };
      MusicDataService.addMusicToLibrary(obj);
    }
    else if (formType === "video_game") {
      const obj = { username, "title": current.title, "box_art": current.image_link, "description": current.description, "platform_name": current.platform_name, "platform_link": current.platform_link };
      VideoGameDataService.addVideoGameToLibrary(obj);
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
                <img src={el.box_art} width="auto" height="270px" style={{margin: 15}} onClick={() => {
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
                <label>Media Type:</label>
                <select id="form-type" onChange={handleFormType}>
                  <option value="video_game">Video Game</option>
                  <option value="movie">Movie</option>
                  <option value="music">Music</option>
                  <option value="book">Book</option>
                </select><div/>

                <div style={{display: (formType === "music" || formType === "book") ? "" : "none"}}>
                  <label style={{display: (formType === "music") ? "" : "none"}}>Artist:</label>
                  <label style={{display: (formType === "book") ? "" : "none"}}>Author:</label>
                  <input type="text" name="artist" id="artist" value={current.artist || current.author} /><div/>
                </div>

                <div>
                  <label style={{display: (formType === "video_game" || formType === "movie") ? "" : "none"}}>Box Art Link:</label>
                  <label style={{display: (formType === "music") ? "" : "none"}}>Album Art Link:</label>
                  <label style={{display: (formType === "book") ? "" : "none"}}>Cover Art Link:</label>
                  <input type="text" name="image_link" id="image_link" value={current.image_link || current.box_art} /><div/>
                </div>

                <div style={{display: (formType === "video_game" || formType === "movie") ? "" : "none"}}>
                  <label>Description:</label>
                  <textarea name="description" id="description" value={current.description}>Enter the description here.</textarea><div/>
                </div>

                <div style={{display: (formType === "music") ? "" : "none"}}>
                  <label>Genre:</label>
                  <input type="text" name="genre" id="genre" value={current.genre} /><div/>
                </div>

                <div>
                  <label>Platform Name:</label>
                  <input type="text" name="platform_name" id="platform_name" value={current.platform_name}></input><div/>
                </div>

                <div>
                  <label>Platform Link:</label>
                  <input type="text" name="platform_link" id="platform_link" value={current.platform_link}></input><div/>
                </div>

                <input onClick={handleSubmit} type="submit" value="Done"/>
              </form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={hideModal}>Cancel</button>
          </Modal.Footer>
        </Modal>
    </div>
  );
}

export default Library;
