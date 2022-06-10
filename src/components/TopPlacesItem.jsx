import React from 'react'

export default function TopPlacesItem({Name, Location, OfficeType, Spesification, img}) {
  return (
    <>
    <p>{Name}</p>
    <p>{Location} </p>
    <p> {OfficeType} </p>
    <p> {Spesification} </p>
    <img src={img} alt=""/>
    </>
  );
}
