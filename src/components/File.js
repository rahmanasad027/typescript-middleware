import React, { useState, useEffect } from "react";
import * as caseConverter from "change-object-case";

const File = () => {
  const [hel, setHel] = useState({
    toSeen: "hello",
    toSet: "you",
    toNumber: 45,
  });
  useEffect(() => {
    const set = JSON.stringify(caseConverter.toSnake(hel));
    // const set1 = snakeCase(hel);
    console.log(set);
  }, []);
  return <div>File</div>;
};

export default File;
