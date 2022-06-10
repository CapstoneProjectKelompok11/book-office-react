import React from "react";
import {dummyData} from './dummyData';
import TopPlacesItem from "./TopPlacesItem";
// import img from "../assets/Image.png";

// console.log("dummyData", dummyData);
const TopPlaces = () => {
  return (
    <div className="mx-auto py-16 px-4 text-center">
      <h2 className="font-medium">Top Places in Jakarta</h2>
      <div className="justify-between pt-12">
        <div className="grid grid-cols-3 gap-1 place-items-center ">
           {dummyData.map((Datas) => {
            return(
              <TopPlacesItem 
              key={Datas.id}
              Name={Datas.Name}
              Location={Datas.Location}
              OfficeType={Datas.OfficeType}
              Spesification={Datas.Spesification}
              img={Datas.img}
              />
            )
          })}   
        </div>
      </div>
    </div>
    
    );
};


export default TopPlaces;
