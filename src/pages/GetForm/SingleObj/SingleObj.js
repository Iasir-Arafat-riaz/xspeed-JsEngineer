import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const SingleObj = ({obj}) => {
    console.log(obj);
    const {title,type,required,value,validate}=obj;
    
    // console.log(title);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    
    return (
        <div>
           <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label ></Form.Label>
            {type!=="hidden"&&title!=="Gender"?<Form.Control {...register("firstName")}   placeholder={title}/>:""}
          </Form.Group> 
         {title=="Gender" &&<Form.Group className="mb-3">
              <Form.Label></Form.Label>
              <Form.Select>
                <option>{obj.default}</option>
                
                {obj.options.map((gender)=>gender.key!==obj.default&&<option key={gender.key}>{gender.key}</option>)}
              </Form.Select>
              
            </Form.Group>}

        
  
        </div>
    );
};

export default SingleObj;