import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { Button } from "react-bootstrap";

const Table = () => {
  const [tableList, setTableList] = useState([]);
  useEffect(() => {
    fetch("http://localhost/api/list.php")
      .then((res) => res.json())
      .then((data) => console.log(data.data));
  });
  return (
    <div>
      <h1>This is Xpeed Table for job task</h1>
    </div>
  );
};

export default Table;
