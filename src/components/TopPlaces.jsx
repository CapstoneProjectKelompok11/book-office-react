import React, { useEffect, useState } from "react";
import axios from "axios";
import { dummyData } from "./dummyData";
// import TopPlacesItem from "./TopPlacesItem";
// import img from "../assets/Image.png";

const TopPlaces = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(
        "http://ec2-18-206-213-94.compute-1.amazonaws.com/api/building?page=0&limit=10"
      )
      .then((res) => {
        setData(res.data.data);
        console.log("res.data", res.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  return (
    <div className="mx-auto py-16 px-4 text-center">
      <h2 className="font-medium">Top Places in Jakarta</h2>
      <div className="justify-between pt-12">
        <div className="grid grid-cols-3 gap-1 place-items-center ">
          {data.map((builds) => {
            return (
              <>
                <p> {builds.name}</p>
                <img src={builds.images} alt="img" />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopPlaces;
