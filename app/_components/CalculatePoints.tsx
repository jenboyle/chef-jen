"use client";
import { useState } from "react";
import ChefButton from "./ChefButton";

function CalculatePoints() {
  const [cal, setCal] = useState(0);
  const [satfat, setSatfat] = useState(0);
  const [points, setPoints] = useState(0);
  function handleClick() {
    let pointsCalc = cal / 50 + satfat / 12;
    pointsCalc = Math.round(pointsCalc * 2) / 2;
    setPoints(pointsCalc);
  }

  function handleCals(e: React.ChangeEvent<HTMLInputElement>) {
    setCal(Number(e.target.value));
  }

  function handleSatFat(e: React.ChangeEvent<HTMLInputElement>) {
    setSatfat(Number(e.target.value));
  }

  //   <div className="justify-center text-center p-10">
  //         <label className="p-1 ">Points: {points}</label>
  //         <input
  //           type="text"
  //           name="points"
  //           disabled
  //           value={points}
  //           className="p-2 m-2"
  //         ></input>
  //       </div>

  return (
    <div className="my-8">
      <label className="p-1">Calories:</label>
      <input
        type="text"
        name="cal"
        placeholder="Enter calories"
        onChange={handleCals}
        className="p-2 m-2"
      ></input>
      <label className="p-1">Saturated Fat:</label>
      <input
        type="text"
        name="satfat"
        placeholder="Enter saturated fat"
        onChange={handleSatFat}
        className="p-2 m-2"
      ></input>
      <div className="text-center p-10">
        <ChefButton handleClick={handleClick}>Calculate Points</ChefButton>
      </div>
      <div className="text-center p-8">
        <label className="p-1 ">Points: {points}</label>
      </div>
    </div>
  );
}

export default CalculatePoints;
