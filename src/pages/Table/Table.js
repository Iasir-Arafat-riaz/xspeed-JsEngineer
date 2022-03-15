import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Table.css";

import { Button } from "react-bootstrap";

const Table = () => {
  const [tableHeaders, setTableHeaders] = useState({});
  const [tableDatas,setTableDatas]=useState([])
  const [renderDatas,setRenderDatas]=useState([])
  useEffect(() => {
    fetch("http://localhost/xpeed/list.php")
      .then((res) => res.json())
      .then((data) => setTableHeaders(data?.data?.headers[0]));
  }, []);
  console.log(tableHeaders);
  useEffect(() => {
    fetch("http://localhost/xpeed/list.php")
      .then((res) => res.json())
      .then((data) => {setTableDatas(data.data.rows)
        setRenderDatas(data.data.rows)
      });
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

const handleSerch=(e)=>{
  // console.log(e.target.value);
  const parseData = parseInt(e.target.value)
const newRenderData=tableDatas.filter(item=>{
  const makeString = item.id+"" 
  console.log( item.id,parseData);
  // return item.id===parseData
return makeString.includes(e.target.value)
})
setRenderDatas(newRenderData)
console.log(newRenderData);
}

const handleSort=(fild)=>{
  console.log("sdfdf");
  const sortedData = renderDatas.sort((x,y)=>x.name-y.name)
  console.log(renderDatas,sortedData);
  
}
  return (
    <div className="tableList">
      <h1 className="text-center">This is Xpeed TableList</h1>
      <input onChange={handleSerch} type="text" placeholder="searchng by id" />

      <table>
         
          <tr>
          {!tableHeaders?.id?.hidden ?<th>{tableHeaders?.id?.title}</th>:""}
          {!tableHeaders?.name?.hidden ?<th > {tableHeaders?.name?.title} <button onClick={()=>handleSort("name")}>^</button> </th>:""}
          {!tableHeaders?.message?.hidden ?<th>{tableHeaders?.message?.title}</th>:""}
          {!tableHeaders?.created_at?.hidden ? <th>{tableHeaders?.created_at?.title}</th>:""}
          </tr>
          {
            renderDatas.map((td,id)=><tr draggable='true' onDragStart={start} onDragOver={dragover} key={id}>
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
