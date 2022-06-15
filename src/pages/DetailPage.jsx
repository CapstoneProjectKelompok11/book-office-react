import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailPage = () => {
  const { id } = useParams();
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .all([
        axios.get(
          "http://ec2-18-206-213-94.compute-1.amazonaws.com/api/building?page=0&limit=10"
        ),
        axios.get(
          `http://ec2-18-206-213-94.compute-1.amazonaws.com/api/floor?buildingId=${id}`
        ),
      ])

      .then(
        axios.spread((result1, result2) => {
          setData1(result1.data.data);
          setData2(result2.data.data);
        })
      );
  }, []);
  console.log("Ini data 1", data1);
  console.log("Ini data 2", data2);
  return (
    <>
      <div>
      
      </div>
    </>
  );
};

export default DetailPage;
