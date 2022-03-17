import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Table.css";
import { List, arrayMove } from "react-movable";

import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Table = () => {
  const [tableHeaders, setTableHeaders] = useState({});
  const [tableDatas,setTableDatas]=useState([])
  const [renderDatas,setRenderDatas]=useState([])
  const [searchData,setSearchData]=useState({name:"",id:""})
  const [dataState,setDataState]=useState({dataSorted:false})
  
  const navigate = useNavigate()

  useEffect(() => {
    fetch("http://localhost/xpeed/list.php")
      .then((res) => res.json())
      .then((data) => {
        setTableHeaders(data?.data?.headers[0])
        setTableDatas([...data.data.rows])
        setRenderDatas([...data.data.rows])
      });
  }, []);


const handleSearchByName=(e)=>{

  setSearchData({...searchData,[e.target.name]:e.target.value})
  console.log(searchData);
  const newDataArray=tableDatas.filter(item=>{
    if(searchData.id){
      const makeString = item.id+""
      return makeString.includes(searchData.id)&&item.name.toLowerCase().includes(e.target.value.toLowerCase())
    }

else{
  return item.name.toLowerCase().includes(e.target.value.toLowerCase())
}


  })
console.log(newDataArray);
setRenderDatas(newDataArray)
}  

const handleSerch=(e)=>{
  setSearchData({...searchData,[e.target.name]:e.target.value})
const newRenderData=tableDatas.filter(item=>{
  const makeString = item.id+"" 
  
  
return makeString.includes(e.target.value)
})
setRenderDatas(newRenderData)

}




const handleSort=(fild)=>{
  if(dataState.dataSorted===false){
    console.log("false");
  const sortedData = renderDatas.sort((x,y)=>x.name.localeCompare(y.name))
 
  console.log(renderDatas,sortedData)
  setRenderDatas([...sortedData])
  setDataState({dataSorted:!dataState.dataSorted})
  return
  }
 
    const tbl = [...tableDatas]
    setRenderDatas(tbl)
    setDataState({dataSorted:!dataState.dataSorted})
    console.log("true");
 
  
}
const handleUpdate =(id)=>{
  navigate(`/updateForm/${id}`)
}

console.log(tableDatas,renderDatas)
  return (
    <div className="tableList">
     
      <h1 className="text-center">This is Xpeed TableList</h1>
      
      <table>
        
          <tr>
          {!tableHeaders?.id?.hidden ?<th>{tableHeaders?.id?.title} <input  name="id" onChange={handleSerch} type="text" placeholder="searchng by id" />
</th>:""}
          {!tableHeaders?.name?.hidden ?<th > {tableHeaders?.name?.title} <input  name="name" onChange={handleSearchByName} type="text" placeholder="searchng by name" /> <button onClick={()=>handleSort("name")}>^</button> </th>:""}
          {!tableHeaders?.message?.hidden ?<th>{tableHeaders?.message?.title}</th>:""}
          {!tableHeaders?.created_at?.hidden ? <th>{tableHeaders?.created_at?.title}</th>:""}
          </tr>
          {
            renderDatas.map((td,id)=><tr   key={id}>
              {!tableHeaders?.id?.hidden?<td onClick={()=>handleUpdate(td?.id)}>{td?.id}</td>:""}
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
