import React from 'react';
import './Card.css';
import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import amongus1 from './amongus2.png'; // Import the PNG image
import more from './more.png'; // Import the PNG image

const Card = (props) => {
  const [count, setCount] = useState(0);
  const updateCount = () => {
    setCount((count) => count + 1);
  };

  return (
    <div className="Card">
      <Link to={'edit/'+ props.id}><img className="moreButton" alt="edit button" src={more} /></Link>
      <img className="crewmateImage" alt="crewmate" src={amongus1} /> {/* Updated line */}
      <h2 className="name">{props.name}</h2>
      <p className="speed">Speed: {props.speed}</p>
      <p className="color">Color: {props.color}</p>
      <button className="upVoteButton" onClick={updateCount}>
        Up Vote Crewmate! {count}
      </button>
    </div>
  );
  
};

export default Card;
