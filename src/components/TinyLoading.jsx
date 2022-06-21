import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const TinyLoading = () => {
  return (
    <div>
      <div className="p-4">
        <Skeleton style={{ lineHeight: "70px" }} height={30} />
        <Skeleton style={{ lineHeight: "70px" }} height={30} />
      </div>
    </div>
  );
};

export default TinyLoading;
