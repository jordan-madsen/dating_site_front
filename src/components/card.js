import React from "react";

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
        {props.favorite ? (
          <img
            src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjL7pPHxN_jAhVTsp4KHXhvD-oQjRx6BAgBEAU&url=https%3A%2F%2Fwww.vectorportal.com%2FStockVectors%2FVarious%2FNAUTICAL-STAR-VECTOR%2F8283.aspx&psig=AOvVaw2_etmj49eDbh6weZpnsOSn&ust=1564675483410931"
            alt="Star"
          />
        ) : null}

        <button onClick={() => props.deletCard(props.id)}>DEL</button>
        <button onClick={() => props.editCard(props.id)}>Edit</button>
      </div>
    </div>
  );
};
export default Card;
