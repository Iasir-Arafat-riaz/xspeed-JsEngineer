import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const UpdateForm = () => {

const {id}=useParams()
    
  const [form, setForm] = useState({});
  useEffect(() => {
    fetch(`http://localhost/xpeed/get_form.php?id=${id}`)
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
         
            <Button variant="primary" type="submit">
            Update
          </Button>
</form>
        {/* </Form> */}
      </div>
    </div>
  );
};

export default UpdateForm;