import React, { useState } from "react";
import addNew from "./images/add-new.PNG";

// This is hardcoded data for now
// We will get this data from the database using an API call
const data = [
  {
    title: "Halo",
    box_art: "https://www.mobygames.com/images/covers/l/9494-halo-combat-evolved-xbox-front-cover.jpg",
    description: "Shooter Video Game",
    type: "Video Game"
  },
  {
    title: "Call of Duty",
    box_art: "https://upload.wikimedia.org/wikipedia/en/f/fd/Call_of_Duty_-_Infinite_Warfare_%28promo_image%29.jpg",
    description: "Shooter Video Game",
    type: "Video Game"
  },
  {
    title: "Rocket League",
    box_art: "https://images-na.ssl-images-amazon.com/images/I/71mzNfoyPUL._SL1000_.jpg",
    description: "Car Video Game",
    type: "Video Game"
  },
  {
    title: "Harry Potter",
    box_art: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/3406/34068479_so.jpg",
    description: "Wizard dude does some cool stuff",
    type: "Movie"
  }
];

function Library() {
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

export default Library;
