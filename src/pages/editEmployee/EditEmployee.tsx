import { Form } from "../../components/form/Form";
import { Card } from "../../components/card/card";
import Header from "../../components/header/header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import type { EmployeeState } from "../../store/employee/employee.types";
// import { useAppSelector, type RootState } from "../../store/store";
import { useGetEmployeeByIdQuery } from "../../api-service/employees/employees.api";

export const EditEmployee = () => {
    const {id}=useParams();
  //const employee=useAppSelector((state:RootState)=>state.employee.employees.find((employee)=>employee.emp_id==id))
  const {data:employee}=useGetEmployeeByIdQuery(parseInt(id??""))
   

    const[values,setValues]=useState({
      id: 0,
        name: "",
        experience: "",
        joiningDate:"",
        role:"",
        status:"",
        empId:"",
        email:"",
        department:"",
        age:" ",
        address:{
          line1:"",
          line2:"",
          houseNo:"",
          pincode:""
        }
      })
 
useEffect(()=>{
setValues({
      id:employee?.id?? 0,
        name:employee?.name ?? "",
        experience:employee?.experience ?? "",
        joiningDate:employee?.joiningDate.slice(0,10),
        role:employee?.role ??"",
        status:employee?.status??"",
        empId:employee?.emp_id??"",
        email:employee?.email??"",
        department:employee?.department.id??"",
        age:employee?.age ??" ",
        address:{
          line1:employee?.address.line1??"",
          line2:employee?.address.line2??"",
          houseNo:employee?.address.houseNo??"",
          pincode:employee?.address.pincode??""
        }
      })
 },[employee])


  return (
    <>
      <Card>
        <Header title="Edit Employee" className="createEmployee" />
        <Form  buttonTitle1="Edit" values={values} isEdit={true} empIdButtonDisable={true} onChange={(field,value)=>{if (["line1", "line2", "houseNo", "pincode"].includes(field)) {
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
    }}} />
      </Card>
    </>
  );
};
