import React from "react";
import './index.css'
function Cards(props)
{
    return(
        
        <div className="card1">
        <p><img className="card1image" src={props.image} alt="Movie Poster" /></p>
        <div className="card1content">
          <h2 className="card1title"> {props.name}</h2>
          <p className="card1release">{props.year}</p>
          <p className="card1company">{props.company}</p>

          <p className="card1playtime">{props.playtime}</p>
          <p className="card1description">{props.description}</p>
          <p className="card1plot">{props.plot}</p>
        </div>
      </div>
    )
}
export default Cards;

