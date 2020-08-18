import React, { Component } from "react";
import { Link } from "react-router-dom";

function Card(props) {
  // state = {  }
  return (
    <>
      <div class="card" style={{ width: "18rem" }}>
        <img src={props.photo} class="card-img-top CategoryPhoto" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <Link
            to={"/word/" + `${props.title}`}
            params={{ djnjcd: "hello" }}
          >
            <a href="#" class="btn btn-primary">
              Play
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Card;
