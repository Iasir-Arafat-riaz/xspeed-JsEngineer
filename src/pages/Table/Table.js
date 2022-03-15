import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Table.css";

import { Button } from "react-bootstrap";

const Table = () => {
  const [tableHeaders, setTableHeaders] = useState({});
  const [tableDatas,setTableDatas]=useState([])
  useEffect(() => {
    fetch("http://localhost/xpeed/list.php")
      .then((res) => res.json())
      .then((data) => setTableHeaders(data?.data?.headers[0]));
  }, []);
  console.log(tableHeaders);
  useEffect(() => {
    fetch("http://localhost/xpeed/list.php")
      .then((res) => res.json())
      .then((data) => setTableDatas(data.data.rows));
  }, []);
console.log(tableDatas);
let row;
function start(event){
  row = event.target;
}
function dragover(e){
 
  e.preventDefault();

  let children= tableDatas.from(e.target.parentNode.parentNode.children);
  if(children.indexOf(e.target.parentNode)>children.indexOf(row))
    e.target.parentNode.after(row);
  else
    e.target.parentNode.before(row);
}
  return (
    <div className="tableList">
      <h1 className="text-center">This is Xpeed TableList</h1>

      <table>
         
          <tr>
          {!tableHeaders?.id?.hidden ?<th>{tableHeaders?.id?.title}</th>:""}
          {!tableHeaders?.name?.hidden ?<th>{tableHeaders?.name?.title}</th>:""}
          {!tableHeaders?.message?.hidden ?<th>{tableHeaders?.message?.title}</th>:""}
          {!tableHeaders?.created_at?.hidden ? <th>{tableHeaders?.created_at?.title}</th>:""}
          </tr>
          {
            tableDatas.map((td,id)=><tr draggable='true' onDragStart={start} onDragOver={dragover} key={id}>
              {!tableHeaders?.id?.hidden?<td>{td?.id}</td>:""}
              {!tableHeaders?.name?.hidden?<td>{td?.name}</td>:""}
              {!tableHeaders?.message?.hidden?<td>{td?.message}</td>:""}
              {!tableHeaders?.created_at?.hidden?<td>{td?.created_at}</td>:""}
            </tr>)
          }
       
      </table>
    </div>
  );
};

export default Table;
