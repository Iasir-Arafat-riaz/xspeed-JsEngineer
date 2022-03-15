import React from "react";
import { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./GetForm.css"

const GetForm = () => {
    const submitForm=(e)=>{
        e.preventDefault()
console.log(formRef.current.value);

    }

    const { register, handleSubmit,reset,watch } = useForm();
  const onSubmit = data => {
      console.log(data)
    };

    const formRef = useRef()
  return (
    <div className="tableForm">
     <div>
     <h1 className="formText">Get form</h1>
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <input {...register(`email`)} />
      <textarea name="" id="" cols="30" rows="3"></textarea>

      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      {/* <input  /> */}
      <div class=" text-center ">
      <Button  class="btn btn-info"  type="submit"> Submit</Button>
        </div>
     
    </form>
     </div>

      
    </div>
  );
};



export default GetForm;
