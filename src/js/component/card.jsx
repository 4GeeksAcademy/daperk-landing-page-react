import React from 'react';

const Card = (props) => {
  return (
    <div class="card m-4" style={{width: "18rem"}}>
  <img class="card-img-top" src={props.image} alt="Card image cap" style={{height: "12rem"}}/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.text}</p>
    <a href="#" class="btn btn-primary">See more</a>
  </div>
</div>
  );
};

export default Card;