/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Card/Card";
import "./index.css";
function Home() {
  const navigate = useNavigate();
  const [movieData, setMovieData] = useState([]);
  const [title, setTitle] = useState("");

  const [id, setId] = useState("");
  useEffect(() => {
    getData();
  }, []);

  const obj = {
    category: "movies",
    language: "kannada",
    genre: "all",
    sort: "voting",
  };

  const getData = () => {
    axios
      .post(`https://hoblist.com/api/movieList`, obj)
      .then((response) => {
        setMovieData(response.data.result);

        console.log(response.data.result);
      })
      .catch((err) => console.log("error", err));
  };

  const increment = (id) => {
    const newMovieData = movieData?.map((item, ind) => {
      debugger;
      if (item._id == id) {
        item.totalVoted += 1;
      }
      return item;
    });
    setMovieData(newMovieData);
  };

  const decrement = (id) => {
    const newMovieData = movieData?.map((item, ind) => {
      debugger;
      if (item._id == id) {
        item.totalVoted -= 1;
      }
      return item;
    });
    setMovieData(newMovieData);
  };
  const PopUp = (item) => {
    console.log("++++++++++++++++++++++++++++", item._id);
    setId(item._id);
    document.getElementById("model").style.display = "block";
    setTitle(item.title);
  };
  const cancel = () => {
    document.getElementById("model").style.display = "none";
  };
  const update = () => {
    const newTitleData = movieData?.map((item, ind) => {
      debugger;
      if (item._id == id) {
        item.title = title;
      }
      return item;
    });
    setMovieData(newTitleData);
    document.getElementById("model").style.display = "none";
  };

  return (
    <div className="container-fluid col-lg-12">
      <div className=" row bg-dark p-3 mb-3 shadow">
        <div className=" text-center ">
          <button
            className="btn btn-primary col-lg-2 "
            onClick={() => navigate("/info")}>
            Company Info
          </button>
        </div>
      </div>
      <center>
        <div className="popUp " id="model">
          <div className="popUpBox bg-light border">
            <div>
              {" "}
              <input
                type={"text"}
                value={title}
                className="form-control"
                onChange={(e) => setTitle(e.target.value)}
              />{" "}
              <div className="mt-2">
                <button
                  className="btn btn-primary ps-3 pe-3 m-2"
                  onClick={update}>
                  {" "}
                  Update
                </button>
                <button
                  className="btn btn-outline-primary ps-3 pe-3 m-2"
                  onClick={cancel}>
                  {" "}
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </center>

      <div className="row  mt-5 ">
        <div className="col-lg-12 mx-auto">
          {movieData?.map((item, index) => {
            return (
              <Card
                image={item.poster}
                pop={() => PopUp(item)}
                title={item.title}
                genre={item?.genre}
                director={item?.director[0]}
                star={
                  item?.stars[0].length > 35
                    ? item?.stars[0].substring(0, 35) + "..."
                    : item?.stars[0]
                }
                mins={item?.language}
                releasedDate={item.releasedDate}
                vote={item?.totalVoted}
                Up={() => increment(item?._id)}
                Down={() => decrement(item?._id)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Home;
