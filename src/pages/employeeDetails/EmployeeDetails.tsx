import Header from "../../components/header/header";
import { Card } from "../../components/card/card";
import { DetailsCard } from "../../components/detailsCard/DetailsCard";
import {  useNavigate, useParams } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import './EmployeeDetails.css'
//import { useSelector } from "react-redux";
//import type { EmployeeState } from "../../store/employee/employee.types";
import { useGetEmployeeByIdQuery } from "../../api-service/employees/employees.api";


export const EmployeeDetails = () => {
  const {id}=useParams();
 // const employee = useSelector((state:EmployeeState)=>state.employees.find((employee)=>employee.emp_id===id))
const {data:employee}=useGetEmployeeByIdQuery(parseInt(id??""))

  const navigate=useNavigate();
function handleNavigationToEdit(){
   navigate(`/employee/edit/${employee?.id}`)
}


  return (
    <>
      <Card>
        <Header
          title="Employee Details"
          className="createEmployee"
          endAdornment={<div className="endadornment">
                <div className="create-emp-nav" onClick={handleNavigationToEdit}>  
                    <div className="emp-nav-btn"><i className='fa fa-pencil' style={{fontSize :'25px', margin:'0%'}} ></i></div>
                     <p>Edit</p>
                </div>
          </div>}
        />
     
        {employee && <DetailsCard employee={employee} />}
     
      </Card>
    </>
  );
};
