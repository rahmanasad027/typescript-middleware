import React, { useState, useEffect } from "react";
// import { snakeCase } from "change-case";

const Hello = () => {
  const [hel, setHel] = useState({
    toSeen: "helloTo",
    toSet: "you",
    toNumber: 45,
  });

  useEffect(() => {
    const set = JSON.stringify(hel);
    // const set1 = snakeCase(set);
    // console.log(set1);
  }, []);
  return <div>Hello</div>;
};

export default Hello;
