import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./GetForm.css";
import SingleObj from "./SingleObj/SingleObj";

const GetForm = () => {
  const [form, setForm] = useState({});
  useEffect(() => {
    fetch("http://localhost/xpeed/get_form.php")
      .then((res) => res.json())
      .then((data) => setForm(data.data.fields[0]));
  }, []);
  console.log(form);
  const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
       console.log(data)
       axios.post("http://localhost/xpeed/submit_form.php",data)
       .then(res=>console.log(res))
      };
  return (
    <div className="getFormMain">
      <div>
     
        {/* <Form className="getForm w-50"> */}
        <form className="getForm w-50" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="">Get Form</h2>
          {
           Object.values(form).map((obj)=><div key={obj.title}> <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Label ></Form.Label>
           {obj.type!=="hidden"&&obj.title!=="Gender"?<Form.Control {...register(obj.title)} required maxLength="25" type={obj.type}  placeholder={obj.title}/>:""}
         </Form.Group> 
        {obj.title=="Gender" &&<Form.Group className="mb-3">
             <Form.Label></Form.Label>
             <Form.Select {...register("gender")}>
               <option>{obj.default}</option>
               
               {obj.options.map((gender)=>gender.key!==obj.default&&<option key={gender.key}>{gender.key}</option>)}
             </Form.Select>
             
           </Form.Group>}</div>)
          }
          {/* {Object.keys(form)[0]==="id"||"user_name"? <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{Object.keys(form)[0]}</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>:""}
         

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>{Object.keys(form)[1]}</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>{Object.keys(form)[2]}</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          {Object.keys(form)[3]==="user_gender" ? (
            <Form.Group className="mb-3">
              <Form.Label>{Object.keys(form)[3]}</Form.Label>
              <Form.Select>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Select>
            </Form.Group>
          ) : (
            " "
          )} */}
            <Button variant="primary" type="submit">
            Submit
          </Button>
</form>
        {/* </Form> */}
      </div>
    </div>
  );
};

export default GetForm;
