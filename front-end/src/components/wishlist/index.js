import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

// This is hardcoded data for now
// We will get this data from the database using an API call
const data = [
  {
    title: "Call of Duty",
    box_art: "https://upload.wikimedia.org/wikipedia/en/f/fd/Call_of_Duty_-_Infinite_Warfare_%28promo_image%29.jpg",
    description: "Shooter Video Game"
  },
  {
    title: "Harry Potter",
    box_art: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/3406/34068479_so.jpg",
    description: "Wizard dude does some cool stuff"
  },
  {
    title: "Rocket League",
    box_art: "https://images-na.ssl-images-amazon.com/images/I/71mzNfoyPUL._SL1000_.jpg",
    description: "Car Video Game"
  },
  {
    title: "Halo",
    box_art: "https://www.mobygames.com/images/covers/l/9494-halo-combat-evolved-xbox-front-cover.jpg",
    description: "Shooter Video Game"
  }
];

function Wishlist() {
  return (
    <div style={{padding: 50}}>
        {data.map((el) => {
          return (<img src={el.box_art} width="200px" height="300px" style={{margin: 15}} />)
        })}
    </div>
  );
}

export default Wishlist;
