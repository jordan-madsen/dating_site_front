import React from "react";

import Heart from "../../static/images/logos/heart.jpg";

const Card = props => {
  return (
    <div className="card">
      <div className="image-wrapper">
        <img src={props.image} alt="Card" />
      </div>
      <div className="text-wrapper">
        <p>{props.text}</p>
      </div>

      <div className="logo-wrapper">
        {props.favorite ? <img src={Heart} alt="Star" /> : null}
        <button onClick={() => props.deletecard(props.id)}>DEL</button>
        <button onClick={() => props.editcard(props.id)}>EDIT</button>
      </div>
    </div>
  );
};
export default Card;
