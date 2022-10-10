import React, { useEffect, useState } from "react";
import { RidersData, config, BASE_URL } from "../lib/types";
import { getAllRiders } from "../middleware/api";
import { snakeCase } from "snake-case";
// import { CaseConverter } from "../caseConverter/ObjectCaseConvert";
const AllRiders = () => {
  const [apidata, setData] = useState<Array<RidersData>>([]);
  // const [hel, setHel] = useState({
  //   toSeen: "hello",
  //   toSet: "you",
  //   toNumber: 45,
  // });
  const url = BASE_URL;
  useEffect(() => {
    // const seting = snakeCase(hel);
    // console.log(seting);
    const fetchData = async () => {
      try {
        const data = await getAllRiders();
        // const nData = CaseConverter(data, "camel");
        // console.log(nData, "caseConverter");
        const allRiders = data as RidersData[];
        setData(allRiders);
        // console.log(data, "========");
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);
  // console.log(apidata, "apidata");

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
