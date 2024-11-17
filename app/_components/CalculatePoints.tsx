"use client";
import { useState } from "react";
import ChefButton from "./ChefButton";
import { wwcal } from "../public/wwcal";
import { wwsatfat } from "../public/wwsatfat";
//import { wwpoints } from "../public/wwpoints";
import { getPoints } from "../public/getPoints";

function CalculatePoints() {
  const [cal, setCal] = useState(20);
  const [satfat, setSatfat] = useState(0);
  const [points, setPoints] = useState(0.5);

  function handleCals(e: React.ChangeEvent<HTMLSelectElement>) {
    setCal(Number(e.target.value));
  }

  function handleSatFat(e: React.ChangeEvent<HTMLSelectElement>) {
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

  // <ChefButton
  //         handleClick={() => {
  //           console.log(getPoints(cal, satfat));
  //           wwpoints.map((wwpoint) =>
  //             Number(wwpoint.cal) === cal
  //               ? Number(wwpoint.satfat) === satfat
  //                 ? setPoints(Number(wwpoint.points))
  //                 : null
  //               : null
  //           );
  //         }}
  //       ></ChefButton>

  return (
    <div className="my-8 grid col-span-1">
      <label className="p-1 font-semibold">Calories:</label>
      <select defaultValue={cal} onChange={handleCals}>
        {wwcal.map((wwcaldata) => (
          <option key={wwcaldata.cal} value={wwcaldata.cal}>
            {wwcaldata.cal}
          </option>
        ))}
      </select>
      <label className="p-1 font-semibold">Saturated Fat:</label>
      <select defaultValue={satfat} onChange={handleSatFat}>
        {wwsatfat.map((wwsatfatdata) => (
          <option key={wwsatfatdata.satfat} value={wwsatfatdata.satfat}>
            {wwsatfatdata.satfat}
          </option>
        ))}
      </select>
      <div className="text-center p-10">
        <ChefButton
          handleClick={() => {
            setPoints(getPoints(cal, satfat));
          }}
        >
          Calculate Points
        </ChefButton>
      </div>
      <div className="text-center p-8 text-yellow-600 font-semibold">
        <label className="p-1">
          Points:{" "}
          <span className="bg-yellow-300 bg-opacity-5 text-black rounded-md p-3">
            {points}
          </span>
        </label>
      </div>
    </div>
  );
}

export default CalculatePoints;
