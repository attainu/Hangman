import React, { Component } from "react";

function Card(props) {
  // state = {  }
  return (
    <>
      <div class="card" style={{ width: "18rem" }}>
        <img src={props.photo} class="card-img-top CategoryPhoto" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <a href="#" class="btn btn-primary">
            Play
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
