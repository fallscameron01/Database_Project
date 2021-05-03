import React, { useState } from "react";
import addNew from "./images/add-new.PNG";

// This is hardcoded data for now
// We will get this data from the database using an API call
const data = [
  {
    title: "Fall Guys",
    box_art: "https://upload.wikimedia.org/wikipedia/en/5/5e/Fall_Guys_cover.jpg",
    description: "You fall",
    type: "Video Game"
  },
  {
    title: "Goodnight Moon",
    box_art: "https://prodimage.images-bn.com/pimages/9780062573094_p0_v1_s550x406.jpg",
    description: "The moon goes to bed",
    type: "Book"
  },
  {
    title: "Tenet",
    box_art: "https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
    description: "A movie that will make no sense",
    type: "Movie"
  },
  {
    title: "Dark Side of the Moon",
    box_art: "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png",
    description: "Good stuff",
    type: "Music"
  }
];

function Wishlist() {
  const [type, setType] = useState("All");
  const [sort, setSort] = useState("alphabetical");

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
        <img src={addNew} width="auto" height="270px" style={{margin: 15}} />
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

export default Wishlist;
