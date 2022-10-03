import React, { useEffect, useState } from "react";
import axios from "axios";
import { RidersData, config, BASE_URL } from "../lib/types";
import { getAllRiders } from "../middleware/api";
const AllRiders = () => {
  const [apidata, setData] = useState<Array<RidersData>> ([]);
  const url = BASE_URL;
  useEffect(() => {
    const fetchData =async () => {
      try {
        const data = await getAllRiders();
        const allRiders = data as <Array<RidersData>>;
        setData(allRiders); 
        console.log(data, "========");
      } catch (e) {
        console.log(e);
      } 
    };
    fetchData();
  }, []);
  console.log(apidata, "apidata");

  return (
    <div>
      <h1> All riders </h1>
      <ul>
        {apidata?.map((rider) => (
          <li key={rider.id}>{rider.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AllRiders;
