import React from "react";
import pin from "../images/pin.svg";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card--container">
        <img className="card--img" src={props.item.imageUrl} />
        <div>
          <div className="card--div--location">
            <img src={pin} width={28} height={28} />
            <h3 className="card--h3--location">{props.item.location}</h3>
            <a href={props.item.googleMapsUrl}>View on Google Maps</a>
          </div>
          <div>
            <h1 className="card--h1">{props.item.title}</h1>
            <h3>
              {props.item.startDate} - {props.item.endDate}
            </h3>
            <p>{props.item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
