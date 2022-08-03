/** @format */

import React from "react";

function Card({
  image,
  title,
  genre,
  director,
  star,
  mins,
  releasedDate,
  vote,
  Up,
  Down,
  pop,
  onClick,
}) {
  return (
    <div className="container">
      <div className="row col-lg-8 mx-auto pb-4 ps-4 pe-4 mb-2 bg-light border rounded shadow">
        <div className="d-flex p-4 ">
          <div className="ps-2 pe-2 my-auto">
            <div className="mt-4">
              <i class="fa fa-arrow-up" onClick={Up}></i>
            </div>
            <div className="mt-5 mb-5"> {vote} </div>
            <i class="fa fa-arrow-down" onClick={Down}></i>
          </div>
          <div className="col-lg-4 ps-4 pe-4">
            <img
              src={image}
              alt=""
              className="shadow rounded img-fluid"
              onClick={pop}
            />
          </div>
          <div className="ps-2 pe-2">
            <div className="fw-bold mb-2" onClick={onClick}>
              {title}
            </div>
            <div className="mb-2">
              <b>Genre : </b>
              {genre}
            </div>
            <div className="mb-2">
              <b>Director : </b> {director}
            </div>
            <div className="mb-2">
              <b>Starring : </b>
              {star}
            </div>
            <div className="mb-2">
              Mins | {mins} | {releasedDate}
            </div>
            <div className="text-danger fw-bold">
              1 Views | Vote By {vote} People
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary shadow">
          Watch Trailer
        </button>
      </div>
    </div>
  );
}

export default Card;
