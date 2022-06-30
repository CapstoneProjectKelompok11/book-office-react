import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
  return (
    <div>
      <div className="grid grid-cols-2 py-4 gap-8">
        <div className="pl-5">
          <Skeleton style={{ lineHeight: "70px" }} height={30} />
          <Skeleton style={{ lineHeight: "70px" }} height={30} width={200} />
          <Skeleton style={{ lineHeight: "70px" }} height={30} width={500} />
          <Skeleton style={{ lineHeight: "70px" }} height={30} width={300} />
          <Skeleton style={{ lineHeight: "70px" }} height={30} width={500} />
          <Skeleton style={{ lineHeight: "70px" }} height={30} width={200} />
          <Skeleton style={{ lineHeight: "70px" }} height={30} width={500} />
          <Skeleton style={{ lineHeight: "70px" }} height={30} width={300} />
          <Skeleton style={{ lineHeight: "70px" }} height={30} width={500} />
        </div>
        <div className="pr-5">
          <Skeleton style={{ lineHeight: "70px" }} height={30} />
          <Skeleton style={{ lineHeight: "70px" }} height={30} width={200} />
          <Skeleton style={{ lineHeight: "70px" }} height={30} width={500} />
          <Skeleton style={{ lineHeight: "70px" }} height={30} width={300} />
          <Skeleton style={{ lineHeight: "70px" }} height={30} width={500} />
          <Skeleton style={{ lineHeight: "70px" }} height={30} width={200} />
          <Skeleton style={{ lineHeight: "70px" }} height={30} width={500} />
          <Skeleton style={{ lineHeight: "70px" }} height={30} width={300} />
          <Skeleton style={{ lineHeight: "70px" }} height={30} width={500} />
        </div>
      </div>
      <div className="grid grid-cols-2 py-4 gap-8">
        <div className="pl-5">
          <Skeleton style={{ lineHeight: "70px" }} height={30} />
          <Skeleton style={{ lineHeight: "70px" }} height={30} width={200} />
          <Skeleton style={{ lineHeight: "70px" }} height={30} width={500} />
          <Skeleton style={{ lineHeight: "70px" }} height={30} width={300} />
          <Skeleton style={{ lineHeight: "70px" }} height={30} width={500} />
          <Skeleton style={{ lineHeight: "70px" }} height={30} width={200} />
          <Skeleton style={{ lineHeight: "70px" }} height={30} width={500} />
          <Skeleton style={{ lineHeight: "70px" }} height={30} width={300} />
          <Skeleton style={{ lineHeight: "70px" }} height={30} width={500} />
        </div>
        <div className="pr-5">
          <Skeleton style={{ lineHeight: "70px" }} height={30} />
          <Skeleton style={{ lineHeight: "70px" }} height={30} width={200} />
          <Skeleton style={{ lineHeight: "70px" }} height={30} width={500} />
          <Skeleton style={{ lineHeight: "70px" }} height={30} width={300} />
          <Skeleton style={{ lineHeight: "70px" }} height={30} width={500} />
          <Skeleton style={{ lineHeight: "70px" }} height={30} width={200} />
          <Skeleton style={{ lineHeight: "70px" }} height={30} width={500} />
          <Skeleton style={{ lineHeight: "70px" }} height={30} width={300} />
          <Skeleton style={{ lineHeight: "70px" }} height={30} width={500} />
        </div>
      </div>
    </div>
  );
};

export default Loading;
