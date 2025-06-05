
import { Form } from "../../components/form/Form";
import Header from "../../components/header/header";
import { Card } from "../../components/card/card";
import { useState } from "react";

export const CreateEmployee = () => {
  const[values,setValues]=useState({
    name:"",
    experience:"",
    joiningDate:"",
    role:"",
    status:"",
    empId:"",
    email:"",
    department:"",
    age:"",
    password:"",
    address:{
      line1:"",
      line2:"",
      houseNo:"",
      pincode:""
    }
  })
  return (
    <>
    <Card>
            <Header title="Create Employee" className="createEmployee"/>
            <Form values={values}  onChange={(field,value)=>{if (["line1", "line2", "houseNo", "pincode"].includes(field) ) {
      setValues({
        ...values,
        address: {
          ...values.address,
          [field]: value,
        },
      });
    } else {
      setValues({
        ...values,
        [field]: value,
      });
    }}}/>
  </Card>
  </>
  );
};
