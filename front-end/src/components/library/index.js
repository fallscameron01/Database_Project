import React, { useState, useEffect } from "react";
import addNew from "./images/add-new.PNG";
import BookDataService from "../../services/book.service";
import MovieDataService from "../../services/movie.service";
import { useGlobal } from "reactn";

let data = [];

function Library() {
  const [type, setType] = useState("All");
  const [sort, setSort] = useState("alphabetical");
  const [username] = useGlobal("username");

  useEffect(() => {
    let list = [];
    BookDataService.getAllBooks("library").then(books => {
      let temp = JSON.parse(books);
      
      for (let i = 0; i < temp.length; i++) {
        if (temp[i].username === username) {
          BookDataService.getBook(temp[i].title).then(singleBook => {
            singleBook = JSON.parse(singleBook);
            list.push({ "title": singleBook.title, "box_art": singleBook.cover_art, "author": singleBook.author, "type": "Book" });
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
            list.push({ "title": singleMovie.title, "box_art": singleMovie.box_art, "description": singleMovie.decription, "type": "Movie" });
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
                <img src={el.box_art} width="auto" height="270px" style={{margin: 15}} />
                <h5 className="text-center">{el.title}</h5>
              </div> : <></>
            )
        })}
    </div>
  );
}

export default Library;
